<template>
  <v-layout justify-center align-center>
    <div class="pb-5">
      <section class="hero">
        <v-container>
          <v-layout align-center>
            <v-flex>
              <h1 class="my-5">Sobre o projeto</h1>
            </v-flex>
          </v-layout>
        </v-container>
      </section>

      <v-container>
        <h2 class="mb-5">Detalhes</h2>
        <v-layout>
          <div class="history-description">
            <p class="title mb-2">Objetivo</p>
            <p>Este projeto visa apresentar alguns dos conceitos aprendidos durante o 1° "Buser Camp", que ocorreu entre novembro e dezembro de 2020.</p>
            <p class="title mb-2">Ferramentas utilizadas</p>
            <p>O site foi desenvolvido utilizando majoritariamente Django, Vue, Vuetify, Python e JavaScript.</p>
            <p>
              O template utilizado pode ser encontrado
              <a :href="'https://github.com/evolutio/djavue2'"> neste link </a>
            </p>
          </div>
        </v-layout>
      </v-container>

      <v-container>
        <h2 class="mb-3">Contato</h2>

        <p class="mb-4">Algumas formas de entrar em contato comigo:</p>

        <v-layout class="marks mb-4">
          <v-icon class="mr-2">account_circle</v-icon>
          <p class="mb-0">
            <strong>Meu perfil no github</strong> <br>
            <a :href="'https://github.com/TalesMiguel'">Perfil</a> <br>
          </p>
        </v-layout>
        <v-layout class="marks mb-4">
          <v-icon class="mr-2">source</v-icon>
          <p class="mb-0">
            <strong>Página deste repositório no github</strong> <br>
            <a :href="'https://github.com/TalesMiguel/ModeloLoja'"> Repositório </a>
          </p>
        </v-layout>
      </v-container>
    </div>
  </v-layout>
</template>

<script>
</script>

<style lang="scss" scoped>

.media-container {
  text-align: center;
  span {
    font-size: 16px;
  }
}

.history-bar {
  width: 7px;
  background-color: #eceff1;
  flex-shrink: 0;
}
.history-description .title {
  position: relative;
}
.history-description .title:before {
  content: "";
  position: absolute;
  background-color: #26547C;
  width: 24px;
  height: 24px;
  border-radius: 48px;
  left: -39px;
  top: 2px;
}
.history-last-text {
  position: relative;
}
.history-last-text:before {
  content: "";
  position: absolute;
  background-color: #fff;
  width: 12px;
  left: -34px;
  top: -2px;
  height: calc(100% + 10px);
}
</style>

<script>
</script>

<style>
</style>
