<template>

  <div>

    <h1>Atualizar dados pessoais</h1>

    <h3> Email </h3>
    <q-input rounded outlined v-model="text" label="E-mail" stack-label :dense="dense" />


    <h3> Nome </h3>
    <q-input rounded outlined v-model="text" label="Nome" stack-label :dense="dense" />

    <h3> Data de nascimento </h3>
    <q-date v-model="date" />

    <h3> Gênero </h3>
    <q-select rounded outlined v-model="model" :options="options" label="Gênero" />
    <h3> Número </h3>
    <q-input rounded outlined v-model="text" label="Telefone" stack-label :dense="dense" />

    <q-btn color="primary" icon="check" label="Atualizar" @click="mudar = true" />

  </div>

  <q-dialog v-model="mudar" auto-close>

    <q-card-section>

      <h2>Dados atualizados com sucesso</h2>

    </q-card-section>

  </q-dialog>

</template>

<script>
import { ref } from 'vue'


  export default {

    setup (){

      return {

        email: ref('PlaceHolder'),
        nome: ref('PlaceHolder'),
        date: ref('2002/02/06'),
        genero: ref('PlaceHolder'),
        num: ref('PlaceHolder'),
        mudar: ref(false)

      }

    },

    mounted () {

    // this.$axios.post('https://bookon-3b2c1-default-rtdb.firebaseio.com/atualizarDados.json', {
    // "email":"matheusinamine123@gmail.com",
    // "nome":"Matheus Inamine",
    // "data":"13032003",
    // "genero":"masculino"
    
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

  }

</script>

