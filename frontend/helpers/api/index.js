import {get, post} from './ajaxutils'

export default {
  login (username, password) {
    return post('/api/login', {username, password})
  },
  logout () {
    return post('/api/logout')
  },
  whoami () {
    return get('/api/whoami')
  },
  settings () {
    return get('/api/settings')
  },
  list_todos () {
    return get('/api/list_todos')
  },
  add_todo (newtask) {
    return post('/api/add_todo', {new_task: newtask})
  },
  add_to_cart (newitem) {
    return post('/api/add_to_cart', {new_item: newitem})
  },
  cart_list () {
    return get('/api/cart_list')
  },
  remove_from_cart (removeitem) {
    return post('/api/remove_from_cart', {remove_item: removeitem})
  }
}
