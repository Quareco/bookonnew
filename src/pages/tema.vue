<template>

  <div class="teminhas">

    <q-list>

      <q-item><q-radio v-model="shape" val="clarinho" label="Claro"/></q-item>

      <q-item><q-radio v-model="shape" val="escurinho" label="Escuro"/></q-item>

    </q-list>

  </div>

</template>


<script>
import { ref } from 'vue'


  export default{

    setup () {

      return {

        shape: ref('line')

      }

    }

  }

</script>
