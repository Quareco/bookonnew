<template>

  <div>

    <h1>Atualizar dados pessoais</h1>

    <h3> Email </h3>
    <q-input v-model="email"/>


    <h3> Nome </h3>
    <q-input v-model="nome"/>

    <h3> Data de nascimento </h3>
    <q-date v-model="date" />

    <h3> Gênero </h3>
    <q-input v-model="genero"/>

    <h3> Número </h3>
    <q-input v-model="num"/>

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

    }

  }

</script>

