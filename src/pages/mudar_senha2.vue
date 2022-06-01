<template>

  <div class="deletar">

    <h1>Bora mudar a senha</h1>

    <p>Insira a sua nova senha</p>

    <q-input filled v-model="text" label="Senha" :dense="dense" />

    <p>Insira novamente a sua senha</p>

    <q-input filled v-model="text" label="Reconfirmar senha" :dense="dense" />

    <q-btn label="Mudar" @click="confirm = true"/>

    <!-- http://localhost:8080/#/mudar_senha -->

    <!-- //////////////////////////////////////////////// -->

    <q-dialog v-model="confirm" auto-close>
      <q-card>
        <q-card-section class="row items-center">

          <h3>Senha mudada com sucesso</h3>

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
