<template>
  <v-container>
    <h2 class="display-2 mb-4">Minha cesta:</h2>

    <v-list two-line>
      <template v-for="(produto, index) in produtos">
        <v-list-tile-action>
          <v-btn icon ripple>
            <v-icon color="red lighten-1">delete</v-icon>
          </v-btn>
        </v-list-tile-action>
        <v-list-tile :key="produto.id" avatar>
          <v-list-tile-avatar>
            <imc :src="produto.img" />
          </v-list-tile-avatar>

          <!-- a partir daqui que faz a tabelinha com os produtos :) -->
          <!-- OBS: A IMAGEM NÃO TA INDO! -->

          <v-list-tile>
            Valor: {{produto.preco * produto.quantidade}}R$
          </v-list-tile>

          <v-list-tile-content>
            <v-list-tile>
              Preço unitário: {{produto.preco}}R$
            </v-list-tile>
            <v-list-tile-title v-html="produto.nome" />
            <v-list-tile-sub-title v-html="produto.descricao" /></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile-action>
          <v-text-field label="Quantidade" reverse :value="produto.quantidade" />
        </v-list-tile-action>

        <v-divider v-if="index + 1 < produto.lenght" :key="index" />
      </template>
    </v-list>

    <v-container>
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
      preco: 2.50,
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imigrantesbebidas.com.br%2Fcerveja-skol-pilsen-lata-350ml&psig=AOvVaw2CZDVWLCJ-1IaYXIUYWh30&ust=1607807508601000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICeyP3rxu0CFQAAAAAdAAAAABAK',
      descricao: 'A  número 0.',
      quantidade: 8
    },
    {
      id: 'scol',
      nome: 'Cerveja Scol Lata',
      preco: 2.50,
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imigrantesbebidas.com.br%2Fcerveja-skol-pilsen-lata-350ml&psig=AOvVaw2CZDVWLCJ-1IaYXIUYWh30&ust=1607807508601000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICeyP3rxu0CFQAAAAAdAAAAABAK',
      descricao: 'Scolzinha gelada, desce fazendo drift.',
      quantidade: 12
    },
    {
      id: 'amaisbarata',
      nome: 'A mais Barata',
      preco: 2.00,
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imigrantesbebidas.com.br%2Fcerveja-skol-pilsen-lata-350ml&psig=AOvVaw2CZDVWLCJ-1IaYXIUYWh30&ust=1607807508601000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICeyP3rxu0CFQAAAAAdAAAAABAK',
      descricao: 'Churrasco com os amigos? Melhor levar A mais barata.',
      quantidade: 5
    },
    {
      id: 'leite',
      nome: 'Leite',
      preco: 4,
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imigrantesbebidas.com.br%2Fcerveja-skol-pilsen-lata-350ml&psig=AOvVaw2CZDVWLCJ-1IaYXIUYWh30&ust=1607807508601000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICeyP3rxu0CFQAAAAAdAAAAABAK',
      descricao: 'Não aguenta? Beba Leite!',
      quantidade: 2
    },
    {
      id: 'boazinha',
      nome: 'Cachaça Boazinha 1L',
      preco: 50,
      img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imigrantesbebidas.com.br%2Fcerveja-skol-pilsen-lata-350ml&psig=AOvVaw2CZDVWLCJ-1IaYXIUYWh30&ust=1607807508601000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCICeyP3rxu0CFQAAAAAdAAAAABAK',
      descricao: 'Evento especial? Leva uma Boazinha!',
      quantidade: 1
    }]
  })
}
</script>
