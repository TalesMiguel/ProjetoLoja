<template>
  <v-container>
    <h2 class="display-2 mb-4">Minha cesta:</h2>

    <v-row no-gutters>
      <v-col
        v-for="n in 4"
        :key="n"
        cols="12"
        sm="3"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          Colunitchas
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
