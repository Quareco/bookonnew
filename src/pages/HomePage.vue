<template>
    <q-page>
        <h1>Aqui vai a imagem do bookon</h1>

        <q-input outlined v-model="text" label="Login" />

        <q-input outlined v-model="text" label="Senha" />

         <q-btn color="primary" label="Login" />

    </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomePage'
})
</script>
