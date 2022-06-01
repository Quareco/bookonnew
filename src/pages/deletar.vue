<template>

  <div class="deletar">

    <h1>Você realmente deseja deletar a sua conta?</h1>

    <p>Essa operação é irreversível, então pense bem antes de fazer isso</p>

    <q-btn label="Deletar" @click="pre = true"/>

  </div>

<q-dialog  v-model="pre">

    <q-card>

      <q-card-section>

        <h3>Você deseja deletar a sua conta?</h3>

      </q-card-section>

      <q-card-section>

        <p> Se sim, insira a sua senha novamente </p>

      </q-card-section>

      <q-card-section>

        <q-input v-model="senha"/>

      </q-card-section>

      <q-card-section>

        <q-btn label="Cancelar" v-close-popup />

        <q-btn label="Prosseguir" @click="deleter = true"/>

      </q-card-section>

    </q-card>

  </q-dialog>

  <!-- /////////////////////////////////////////////////////// -->

<q-dialog  v-model="deleter">

    <q-card>

      <q-card-section>

        <h2>Poxa, ficamos muito tristes por isso</h2>

      </q-card-section>

      <q-card-section>

        <p>Você sempre vai ser bem vindo aqui caso deseje voltar</p>

      </q-card-section>

      <q-card-section>

        <p> Se você realmente quer deletar a sua conta

          digite "Eu quero deletar minha conta"

          </p>

      </q-card-section>

      <q-card-section>

        <q-input v-model="frase"/>

      </q-card-section>

      <q-card-section>

        <q-btn label="Cancelar" v-close-popup />

        <q-btn label="Deletar" />

      </q-card-section>

    </q-card>

  </q-dialog>


</template>


<script>
import { ref } from 'vue'


  export default {

    setup () {

      return {

        pre: ref(false),
        deleter: ref(false)

      }

    }

  }

</script>

