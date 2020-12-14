import Vue from 'vue'
import Router from 'vue-router'
import Index from '~/pages/index.vue'
import Todos from '~/pages/todos.vue'
import Cardapio from '~/pages/cardapio.vue'
import Carrinho from '~/pages/carrinho.vue'
import Cesta from '~/components/cesta.vue'
import Cesta2 from '~/components/cesta_2.vue'
import Sobre from '~/pages/sobre.vue'

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  routes: [
    {path: '/', component: Index, name: 'index'},
    {path: '/todos', component: Todos, name: 'todos'},
    {path: '/carrinho', component: Carrinho, name: 'carrinho'},
    {path: '/cardapio', component: Cardapio, name: 'cardapio'},
    {path: '/cesta', component: Cesta, name: 'cesta'},
    {path: '/cesta2', component: Cesta2, name: 'cesta2'},
    {path: '/sobre', component: Sobre, name: 'sobre'}

  ]
}

export function createRouter (ctx) {
  return new Router(routerOptions)
}
