# 1. Dev-env, super-easy mode (docker all things)

Requirements:
- [Install docker](https://docs.docker.com/install/)
- Learn [Python](https://docs.python.org/3/tutorial/) and [Django](https://docs.djangoproject.com/en/2.0/intro/tutorial01/)
- Learn [vue.js](vuejs.org)
- Learn [Nuxt.js](https://nuxtjs.org/)
- Get familiar with [Vuetify.js](vuetifyjs.com/) components

Step by step

```bash
source dev.sh  # import useful bash functions
devhelp  # like this one ;)
dkbuild  # builds the docker image for this project. The first time Will take a while.
dknpminstall  # I'll explain later!
dkup  # Brings up everything
```

With `dkup` running, open another terminal

```bash
dk bash  # starts bash inside "jabuticaba" container
./manage.py migrate  # create database tables and stuff
./manage.py createsuperuser  # creates an application user in the database
```

What is happenning:

* `dev.sh` is a collection of useful bash functions for this project's development environment. You're encouraged to look inside and see how that works, and add more as the project progresses.
* `dknpminstall` will start a docker container and run `npm install` inside to download node dependencies to the `frontend/node_modules` folder. Using docker for this means you don't need to worry about installing (and choosing version for) node/npm.
* `dkup` uses docker-compose to start 3 containers: postgres, nginx, and jabuticaba.
* The dockerized postgres saves its state into `docker/dkdata`. You can delete that if you want your dev database to go kaboom.
* Once `dkup` is running, `dk <command>` will run `<command>` inside the `jabuticaba` container. So `dk bash` will get you "logged in" as root inside that container. Once inside, you need to run Django's `manage.py` commands to initialize the database properly.
* The jabuticaba container runs 3 services:
 * django on port 8000
 * nuxt frontend with real APIs on port 3000
 * nuxt frontend with mock APIs on port 3001
* nginx is configured to listen on port 80 and redirect to 8000 (requests going to `/api/*`) or 3000 (everything else).
* Therefore, when `dkup` is running, you get a fully working dev-environment by pointing your browser to http://localhost, and a frontend-only-mock-api-based environment by pointing your browser to http://localhost:3001. Each one is more useful on different situations.
* You're supposed to create features first by implementing them on 3001, then validate them, and only then write the backend APIs and integrate them. Experience shows this process is very productive.

# 2. Dev-env, normal-easy mode (dockerize nginx + postgres)

Running everything inside docker is a quick and easy way to get started, but sometimes we need to run things "for real", for example, when you need to debug python code.

## Python setup

Requirements:
 - Understand about python [virtualenvs](https://docs.python.org/3/tutorial/venv.html)
 - Install [virtualenvwrapper](https://virtualenvwrapper.readthedocs.io/en/latest/) (not required, but recommended)

Step by step

```bash
dkpgnginx  # Starts postgres and nginx inside docker
```

With `dkpgnginx` running, start another terminal:

```bash
mkvirtualenv jabuticaba -p python3  # creates a python3 virtualenv
pip install -r requirements.txt  # install python dependencies inside virtualenv
export DJANGO_DB_PORT=5432  # That's where our dockerized postgres is listening
./manage.py runserver  # starts django on port 8000
```

Since nginx is also running you go ahead and point your browser to http://localhost/admin and you should see the same thing as in http://localhost:8000/admin

## Node Setup

Requirements:

* Install [nvm](https://github.com/creationix/nvm) (not required, but highly recommended)

Step by step:

```bash
nvm use 12  # Switch your terminal for node version 9.x
# no need to npm install anything, we already have our node_modules folder
sudo chmod -R o+rw .nuxt/  # I'll explain this later
npm run dev  # Starts nuxt frontend on port 3000
```

You can go ahed and point your browser to http://localhost:3000 to see nuxt running **with mocked apis**

To run nuxt using real APIs just turn set this environment variable API_MOCK=0

```bash
API_MOCK=0 npm run dev  # Starts nuxt frontend on port 3000
```

Since nginx is also running you go ahead and point your browser to http://localhost/ and you should have a fully integrated frontend+backend dev env.

# 3. Deploy to production

Rent a linux machine on a cloud somewhere. Let's say you'll be using ubuntu on AWS.
Install docker and nginx. Create an empty postgres database jabuticaba owned by a user jabuticaba.

On your remote machine, create a file ~/jabuticaba.env:

```
DJANGO_DB_PASSWORD=<jabuticaba's password>
DJANGO_DB_HOST=<database_ip>
DJANGO_DB_NAME=jabuticaba
DJANGO_DB_USER=jabuticaba
DJANGO_DEBUG=0
```

Have a nginx config serving your domain like:

```
server {
    server_name  jabuticaba.example.com;

    location /api {
        proxy_pass http://localhost:8000/api;
    }
    location /admin {
        proxy_pass http://localhost:8000/admin;
    }
    location /static {
        alias /home/ubuntu/dkdata/jabuticaba/static;
        add_header Cache-Control public;
        add_header ETag "";
    }
    location / {
        proxy_pass http://localhost:3000/;
    }

    listen 80;
}
```

(Replace "jabuticaba.example.com" with your production domain)

On your development environment, edit the `HOST_PROD` variable on `dev.sh` to make it point to your production domain, then run on terminal:

```
source dev.sh
deploy_prod
```

If it works the first time, go have a beer and take the day off :-)
