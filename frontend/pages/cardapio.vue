<template>
  <div id="app">
    <v-layout justify-end align-right>
      <v-btn color="primary" :to="{name: 'carrinho'}">Ver carrinho</v-btn>
    </v-layout>
    <ul>
      <li v-for="produto in list_produtos" :key="produto.id">
        {{produto.id}}
      </li>
    </ul>
    <!-- <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" /> -->
  </div>
</template>

<script>
import id from '/home/tales/busercamp/cursodjavue/frontend/helpers/api/list_produtos.json'
import api from '~api'

export default {
  data () {
    return {
      newitem: id,
      adding: false,
      loading: false,
      items: [
      ]
    }
  },
  async mounted () {
    this.loading = true
    const response = await api.cart_list()
    const carts = response.carts
    this.items = carts
    this.loading = false
  },
  methods: {
    async add () {
      this.adding = true
      const response = await api.add_to_cart(this.newitem)
      this.items.push(response)
      this.newitem = id
      this.adding = false
    }
  }
}
</script>

<style>
</style>
