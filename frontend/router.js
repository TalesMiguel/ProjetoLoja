import Vue from 'vue'
import Router from 'vue-router'
import Index from '~/pages/index.vue'
import Todos from '~/pages/todos.vue'
import Cardapio from '~/pages/cardapio.vue'
import Carrinho from '~/pages/carrinho.vue'
import Cesta from '~/components/cesta.vue'

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  routes: [
    {path: '/', component: Index, name: 'index'},
    {path: '/todos', component: Todos, name: 'todos'},
    {path: '/carrinho', component: Carrinho, name: 'carrinho'},
    {path: '/cardapio', component: Cardapio, name: 'cardapio'},
    {path: '/cesta', component: Cesta, name: 'cesta'}
  ]
}

export function createRouter (ctx) {
  return new Router(routerOptions)
}
