import { zuck } from './db_people'
import { todos } from './db_todos'
import { cart } from './db_cart'
import { mockasync } from './mockutils'
// tem que adicionar a função de add ao carrinho, talvez não aqui, mas no index.js do /api sim!

const keepLoggedIn = true
// var logged_user = null

export default {
  login (username, password) {
    return mockasync(zuck)
  },
  logout () {
    return mockasync({})
  },
  whoami () {
    const iam = {authenticated: keepLoggedIn}
    if (iam.authenticated) {
      iam.user = zuck
    }
    return mockasync(iam)
  },
  settings () {
    return mockasync({
      SENTRY_DSN_FRONT: ''
      // SENTRY_DSN_FRONT: 'https://abcd1234@sentry.example.com/10'
    })
  },
  list_todos () {
    return mockasync(todos)
  },
  add_todo (newtask) {
    return mockasync({description: newtask, done: false})
  },
  cart_list () {
    return mockasync(cart)
  },
  // talvez tenha que trocar esse newtask por "items" e criar uma pagina no components igual a todo-list e trocar o newtask por "items"
  add_to_cart (newitem) {
    return mockasync({description: newitem})
  },
  remove_from_cart (removeitem) {
    return mockasync({description: removeitem})
  }
}
