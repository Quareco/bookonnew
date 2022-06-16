<template>

  <div class="deletar">

    <h1>Bora mudar a senha</h1>

    <p>Insira a sua nova senha</p>

    <q-input  rounded outlined v-model="text" label="Senha" :dense="dense" />

    <p>Insira novamente a sua senha</p>

    <q-input rounded outlined v-model="text" label="Reconfirmar senha" :dense="dense" />

 <q-btn  rounded outlined label="Mudar" @click="confirm = true" type="submit" color="red" />

    <!-- http://localhost:8080/#/mudar_senha -->

    <!-- //////////////////////////////////////////////// -->

    <q-dialog v-model="confirm" auto-close>
      <q-card>
        <q-card-section class="row items-center">

          <h3>Senha mudada com sucesso!</h3>

        </q-card-section>
      </q-card>
    </q-dialog>


  </div>

</template>

<script>
import { ref } from 'vue'


export default {

  setup (){

    return{

      confirm: ref(false)

    }

  },

  mounted () {

  // this.$axios.post('https://bookon-3b2c1-default-rtdb.firebaseio.com/novaSenha.json', {
  //  "senha":"654321"
  

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
