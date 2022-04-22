<template>
    <q-page>
      <div>
        <q-img src="../assets/bookonlogo(transparente).png"/>
      </div>
        <h1>Seja Bem-Vindo</h1>

        <q-input outlined v-model="text" label="Login" />

        <div>

        <q-input outlined v-model="text" label="Senha" />

        </div>

        <div>

        <q-btn label="Logar" type="submit" color="primary"/>

        </div>

        <a href="http://localhost:8080/#/cad" >Não tem uma conta ainda? Se cadastre aqui</a>

    </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HomePage'
})
</script>

<style lang="scss">
  body {
  background-color: #add8e6;
}

h1 {
  color: #ffffff;
  text-align: center;
  font-size: 50px;
  font-family: Arial, Helvetica, sans-serif;
  text-shadow: 2px 2px 4px #000000;
}

p {
  font-family: verdana;
  font-size: 20px;
}

.q-input{
  background-color: #ffffff;
}

.q-btn{
  border-radius: 10px;
}


</style>
