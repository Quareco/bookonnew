<template>
    <q-page>
        <h1>Aqui vai a imagem do bookon</h1>

        <q-input outlined v-model="text" label="Login" />

        <q-input outlined v-model="text" label="Senha" />

        <q-btn label="Logar" type="submit" color="primary"/>

        <a href="http://localhost:8080/#/cad" >Não tem uma conta ainda? Se cadastre aqui</a>

    </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomePage'
})
</script>
