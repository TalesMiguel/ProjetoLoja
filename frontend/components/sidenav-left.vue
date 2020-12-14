<template>
  <v-navigation-drawer fixed v-model="state.drawer" app>
    <v-list dense>
      <v-list-item @click.stop="state.left = !state.left">
        <v-list-item-action />
        <v-list-item-content>
          <v-list-item-title>
            <v-btn to="/">
              Página inicial
            </v-btn>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click.stop="state.left = !state.left">
        <v-list-item-action />
        <v-list-item-content>
          <v-list-item-title>
            <v-btn to="/cardapio">
              Cardápio
            </v-btn>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click.stop="state.left = !state.left">
        <v-list-item-action />
        <v-list-item-content>
          <v-list-item-title>
            <v-btn to="/sobre">
              Sobre
            </v-btn>
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ['state']
}
</script>
