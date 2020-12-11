import Vue from 'vue'

var logged_user = null;

function mockasync (data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({data: data}), 600)
  })
}

const api = {
    login(username, password){
        if(password){
            logged_user = {
                username: username,
                first_name: 'Lanchonete',
                last_name: 'Can-Can',
                email: 'contato@cancan.com',
                notifications_enabled: true,
                permissions:{
                    ADMIN: username == 'admin',
                    STAFF: username == 'admin',
                }
            };
        }
        return mockasync(logged_user);
    },
    logout(){
        logged_user = null;
        return mockasync({});
    },
    whoami(){
        return mockasync(logged_user ? {
            authenticated: true,
            user: logged_user,
        } : {authenticated: false});
    },
    add_todo(newtask){
        return mockasync({description: newtask, done: false});
    },
    list_todos(){
        return mockasync({
            todos: [
                {description: 'Tira a roupa do varal', done: true},
                {description: 'Alimenta a criança', done: false}
            ]
        });
    },
    get_user_details(username){
      const avatar = {
        '@isaacnewton': 'http://1.bp.blogspot.com/-A9_ROvP0efw/TZI9dUsXAKI/AAAAAAAAGCI/rD_-a3ZBF3U/s1600/Isaac_Newton_Biography%255B1%255D.jpg',
        '@descartes': 'http://www.filosofia.com.br/figuras/biblioteca/Descartes.jpg',
        '@einstein': 'https://figuracasdainternet.files.wordpress.com/2013/12/como-vocc3aa-c3a9-burro-cara.jpg'
      }[username]
      return mockasync({
        username: username,
        avatar: avatar,
        last_tweet: 'Exemplo de tweet',
        ifollow: true
      })
    },
    tweet(text) {
      return mockasync({
        id: 1000,
        author_name: logged_user.username,
        author_username: logged_user.username,
        author_avatar: 'https://figuracasdainternet.files.wordpress.com/2013/12/como-vocc3aa-c3a9-burro-cara.jpg',
        created_at: new Date().toISOString(),
        text: text
      })
    },
    comida(text) {
       return mockasync({
         id: 1000,
         author_name: logged_user.username,
         author_username: logged_user.username,
         author_avatar: 'https://figuracasdainternet.files.wordpress.com/2013/12/como-vocc3aa-c3a9-burro-cara.jpg',
         created_at: new Date().toISOString(),
         text: text
       })
     },
    follow (username) {
      return mockasync({})
    },
    unfollow (username) {
      return mockasync({})
    },
    list_tweets(username){
        const d = new Date()
        const _1min = 60000
        const _1h = 60 * _1min
        const d1 = new Date(d - 15 * _1min)
        const d2 = new Date(d - 2 * _1h)
        const d3 = new Date(d - 48 * _1h)
        return mockasync([
            {
              id: 1,
              author_name: 'Lanchonete X-Detrito',
              author_username: username || '@xdetrito',
              author_avatar: 'https://itafortnet.com.br/wp-content/uploads/2016/04/placa_cuidado_-_detritos_de_produtos_qu_micos-600x500.gif',
              created_at: d1.toISOString(),
              text: 'Servimos barato para servir sempre!'
            },
            {
              id: 2,
              author_name: 'Rondeles da Rô',
              author_username: username || '@ro-ndeles',
              author_avatar: 'data:image/jpeg;base64,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',
              created_at: d2.toISOString(),
              text: 'Rôndeles :)'
            },
            {
              id: 3,
              author_name: 'Madrugadão Lanches',
              author_username: username || '@madrugalanches',
              author_avatar: 'https://vignette.wikia.nocookie.net/chavesdooito/images/c/cd/Seu_Madruga_-_Seriado.jpg/revision/latest/scale-to-width-down/340?cb=20130709181325&path-prefix=pt-br',
              created_at: d3.toISOString(),
              text: 'Aquele lanchinho nervoso da madrugada.'
            }
        ])
    }
};

export default api;
