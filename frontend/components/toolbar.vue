<template>
  <v-app-bar color="blue-grey" dark fixed app clipped-right>
    <v-app-bar-nav-icon @click.stop="state.drawer = !state.drawer" />
    <v-toolbar-title>Menu</v-toolbar-title>
    <v-spacer />

    <v-toolbar-item>
      <v-btn flat color="default" to="/cardapio">
        Produtos
      </v-btn>
      <v-btn flat color="default" to="/carrinho">
        <v-badge left color="green">
          <span slot="badge">3</span>
          <v-icon>shopping_cart</v-icon>
          Meu carrinho
        </v-badge>
      </v-btn>
      <v-btn flat color="default" to="/cesta">
        <v-badge left color="green">
          <span slot="badge">3</span>
          <v-icon>shopping_cart</v-icon>
          Minha cesta
        </v-badge>
      </v-btn>
    </v-toolbar-item>
    <v-btn v-if="!logged_user" text dark ripple class="ma-0 ml-5" @click="open_login_dialog($event)">Login</v-btn>

    <!-- <template v-slot:activator="{ on }"><v-btn v-on="on"> -->
    <v-menu v-if="logged_user" offset-y>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on" class="ma-0 ml-5">
          <v-avatar size="36px">
            <img src="https://graph.facebook.com/4/picture?width=300&height=300">
          </v-avatar>
        </v-btn>
      </template>
      <v-card class="no-padding">
        <v-list two-line>
          <v-list-item>
            <v-list-item-avatar>
              <v-avatar>
                <img src="https://graph.facebook.com/4/picture?width=300&height=300">
              </v-avatar>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{logged_user.first_name}} {{logged_user.last_name}}</v-list-item-title>
              <v-list-item-subtitle>{{logged_user.email}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider />
        <v-list>
          <v-list-item @click="logout()">
            <v-list-item-content>
              <v-list-item-title>Log out</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-menu>
    <v-app-bar-nav-icon @click.stop="state.drawerRight = !state.drawerRight" />
    <login-dialog ref="login_dialog" />
  </v-app-bar>
</template>

<script>
import loginDialog from '~/components/login-dialog.vue'
import Snacks from '~/helpers/Snacks.js'
import api from '~api'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

export default {
  components: {
    loginDialog
  },
  props: ['state'],
  computed: {
    logged_user () {
      return this.$store.state.auth.currentUser
    }
  },
  methods: {
    open_login_dialog (evt) {
      this.$refs.login_dialog.open()
      evt.stopPropagation()
    },
    async logout () {
      await api.logout()
      this.$store.commit('auth/setCurrentUser', null)
      Snacks.show(this.$store, {text: 'Até logo!'})
    }
  }
}
</script>
