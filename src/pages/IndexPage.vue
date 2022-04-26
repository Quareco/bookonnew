<template>
  <q-page class="flex flex-center">

      <h1>O que vamos estudar hoje?</h1>
      <p id="batatinha"></p>

  </q-page>
</template>

<script>
import { defineComponent, onMounted } from 'vue'
import postService from 'src/FuncoesJson/services'

export default defineComponent({
  name: 'IndexPage',

  data() {
    return {
      usuario: {
        nome: ''
        },
      teste: '',
      }
  },

  setup (){
    const { list } = postService();
  },

  mounted () {
    this.$axios.get('http://localhost:3000/usuario')
      .then(function (res) {
        console.log('response', res.data[0])
        this.teste = res.data[0];
      })
  },

})
</script>


<style lang="scss">

body {

  background-color: #add8e6;

}

h1 {

  color: #ffffff;
  text-align: center;
  font-size: 50px;
  font-family: Arial, Helvetica, sans-serif;
  text-shadow: 2px 2px 4px #000000;

}

</style>

