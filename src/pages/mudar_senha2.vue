<template>

  <div class="deletar">

    <h5>Bora mudar a senha</h5>

    <p>Insira a sua nova senha</p>

    <q-input  rounded outlined v-model="text" label="Senha" :dense="dense" />

    <p>Insira novamente a sua senha</p>

    <q-input rounded outlined v-model="text" label="Reconfirmar senha" :dense="dense" />

 <q-btn  rounded outlined class="mudar" label="Mudar" @click="confirm = true" type="submit" color="blue" />

    <!-- http://localhost:8080/#/mudar_senha -->

    <!-- //////////////////////////////////////////////// -->

    <q-dialog v-model="confirm" auto-close>
      <q-card>
        <q-card-section class="row items-center">

          <h5>Senha mudada com sucesso!</h5>

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

  }

}

</script>
<style lang="scss">
body {
  background-color: $palete3;
}

.mudar {
border-radius: 40px;
  margin-left: 160px;
  margin-top: 4px;
text-shadow: 2px 2px 4px #000000
}




</style>
