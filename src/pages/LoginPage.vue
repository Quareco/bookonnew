<template>
    <q-page>
      <div>
        <q-img src="../assets/bookonlogo(transparente).png"/>
      </div>
        <h1>Seja Bem-Vindo</h1>

        <q-input outlined v-model="text" label="Login: Email ou Usuário" />
        <br>
        <div>

        <q-input outlined v-model="password" type="password" label="Senha" />

        </div>

        <div>
        <br>
        <q-btn label="Logar" type="submit" color="primary"/>

        </div>
        <br>
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
  border-radius: 50px;
  width: 70%;
  margin-left: 15%;
}

.q-btn{
  border-radius: 10px;
  width: 25%;
  margin-left: 37%;
}

a{
  margin-left: 23%;
}


</style>
