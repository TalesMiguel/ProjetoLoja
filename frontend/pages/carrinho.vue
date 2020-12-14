<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="blue-grey"
        height="10"
        indeterminate
      />
    </template>

    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    />

    <v-card-title>Seu carrinho: </v-card-title>

    <v-card-text>
      <v-row
        align="center"
        class="mx-0"
      />

      <div class="my-4 subtitle-1">
        13 itens:
      </div>
      <!-- COLOCAR NO LUGAR DISSO O JSON HARD-CODED COM O CARRINHO" -->
      <div>12 x R$ 02,50 Cerveja Scol Lata   </div>
      <div>01 x R$ 50,00 Cachaça Boazinha 1L </div>

      <v-divider class="mx-4" />
      <div>Total: R$52,50</div>
    </v-card-text>

    <v-card-title>Horário de retirada do pedido</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="blue-grey white--text"
        column
      >
        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="blue lighten-2"
        text
        @click="aceitar"
      >
        Checkout
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  data () {
    return {}
  }
}
</script>

<style>
</style>
