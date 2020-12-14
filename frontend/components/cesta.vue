<template>
  <v-container>
    <h2 class="display-2 mb-4">Minha cesta:</h2>

    <v-list two-line>
      <template v-for="(produto, index) in produtos">
        <v-list-tile :key="produto.id" avatar>
          <!-- <v-list-tile-avatar>
            <imc :src="produto.img" />
          </v-list-tile-avatar> -->

          <!-- a partir daqui que faz a tabelinha com os produtos :) -->
          <!-- OBS: a imagem ainda não funciona :( -->

          <v-list-tile>
            Valor: R${{produto.preco * produto.quantidade}}
          </v-list-tile>

          <v-list-tile-content>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title>{{produto.nome}}</v-list-item-title>
                <v-list-item-subtitle>{{produto.descricao}}</v-list-item-subtitle>
                <v-list-item-subtitle>Preço unitário: R${{produto.preco}}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-tile-action>
                <v-btn v-if="produto.quantidade !=0" icon ripple>
                  <v-icon color="error" v-on:click="itens--; produto.quantidade--; total-=produto.preco">mdi-cart-minus</v-icon>
                </v-btn>
                <v-btn icon ripple>
                  <v-icon color="success" v-on:click="itens++; produto.quantidade++; total+=produto.preco">mdi-cart-plus</v-icon>
                </v-btn>
                <v-btn icon ripple>
                  <v-icon color="red lighten-1" v-on:click="itens-=produto.quantidade; total-=produto.preco * produto.quantidade; produto.quantidade=0">delete</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-item>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile-action :key="produto.quantidade">
          <v-text-field label="Quantidade" reverse :value="produto.quantidade" />
        </v-list-tile-action>
        <v-divider v-if="index + 1 < produto.lenght" :key="index" />
      </template>
    </v-list>

    <v-container>
      <p>{{itens}} itens no carrinho</p> <br>
      <p>Total: R$ {{total.toFixed(2)}}</p>

      <v-btn color="success" x-large style="float: right;">Checkout</v-btn>
    </v-container>
  </v-container>
</template>

<script>

export default {
  data: () => ({
    produtos: [{
      id: 'brohmo',
      nome: 'Cerveja Brohmo lata',
      preco: 2.59,
      img: 'https://static.clubeextra.com.br/img/uploads/1/677/556677.jpg',
      descricao: 'A  número 0.',
      quantidade: 1
    },
    {
      id: 'scol',
      nome: 'Cerveja Scol Lata',
      preco: 2.59,
      img: 'https://www.paodeacucar.com/img/uploads/1/497/693497.jpg',
      descricao: 'Scolzinha gelada, desce fazendo drift.',
      quantidade: 1
    },
    {
      id: 'amaisbarata',
      nome: 'A mais Barata',
      preco: 2.25,
      img: 'https://images.tcdn.com.br/img/img_prod/420472/garrafa_long_neck_355ml_165_1_20171205142401.png',
      descricao: 'Churrasco com os amigos? Melhor levar A mais barata.',
      quantidade: 1
    },
    {
      id: 'leite',
      nome: 'Leite',
      preco: 4.50,
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imigrantesbebidas.com.br%2Fcerveja-skol-pilsen-lata-350ml&psig=AOvVaw2CZDVWLCJ-1IaYXIUYWh30&ust=1607807508601000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICeyP3rxu0CFQAAAAAdAAAAABAK',
      descricao: 'Não aguenta? Beba Leite!',
      quantidade: 1
    },
    {
      id: 'boazinha',
      nome: 'Cachaça Boazinha 1L',
      preco: 51.00,
      img: 'https://www.prabarbebidas.com.br/img/products/cachaca-boazinha-670ml_1_1200.jpg',
      descricao: 'Evento especial? Leva uma Boazinha!',
      quantidade: 1
    }],
    itens: 5,
    total: 62.93
  })
}
</script>
