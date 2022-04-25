<template>

  <div>

    <q-page>

        <h1>Vamos brincar</h1>

        <q-input outlined v-model="text" label="Digite o seu email" />

        <q-input outlined v-model="text" label="Digite o seu nick" />

        <q-input outlined v-model="text" label="Digite a sua senha" />

        <q-input outlined v-model="text" label="Confirme a sua senha" />

        <q-checkbox v-model="caixa" label="Você tem mais de 18 anos?"/>

        <q-btn label="Cadastrar" type="submit" color="primary"/>

    </q-page>

  </div>

</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'LoginPage',

    setup () {

    return {

      caixa: ref(false)

    }

  }

})
</script>
