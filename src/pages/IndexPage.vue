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

  setup (){

    const { list } = postService();

    onMounted(() => {

      getPosts()

    });

    const getPosts = async () => {

      try{

        const { data } = await list()

        batatinha.textContent = JSON.stringify(data)

      } catch (error){

        console.error(error)

      }

    }


  }

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

