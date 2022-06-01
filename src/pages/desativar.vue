<template>

  <div class="desativar">

    <h1>Você realmente deseja desativar a sua conta?</h1>

    <p>Essa operação pode ser reversível, você poderá ativar a sua conta caso tente logar novamente</p>

    <q-btn label="Desativar" @click="off = true" />

  </div>

  <q-dialog  v-model="off">

    <q-card>

      <q-card-section>

        <h3>Você realmente deseja desativar a sua conta?</h3>

      </q-card-section>

      <q-card-section>

        <p> Se sim, insira a sua senha novamente </p>

      </q-card-section>

      <q-card-section>

        <q-input v-model="senha"/>

      </q-card-section>

      <q-card-section>

        <q-btn label="Cancelar" v-close-popup />

        <q-btn label="Prosseguir"/>

      </q-card-section>

    </q-card>

  </q-dialog>

</template>

<script>
import { ref } from 'vue'


  export default {

    setup () {

      return {

        off: ref(false)

      }

    }

  }

</script>
