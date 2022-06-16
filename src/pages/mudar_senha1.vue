<template>

  <div class="mudar senha">

    <h1>Mudar senha</h1>

    <p>Por favor, insira sua senha primeiro</p>

    <q-input filled v-model="text" label="Senha" :dense="dense" />

    <q-btn label="Próximo" href="http://localhost:8080/#/mudar_senha" />

  </div>

</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  mounted () {

  // this.$axios.get('https://bookon-3b2c1-default-rtdb.firebaseio.com/senha.json', {
  //  "senha":"123456"
  

  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

    this.$axios.get('https://teste-f22a1-default-rtdb.firebaseio.com/usuarios/-N4UbNUHz8LXWAbRn91F.json')
      .then((res) => {

        console.log(res);

        const dataNome = res.data[0].firstName
        console.log('data', dataNome)
        this.teste = dataNome
      })
  },
})

</script>
