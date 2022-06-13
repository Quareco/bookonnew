<template>
    <q-page>
      <div>
        <q-img src="../assets/bookonlogo(transparente).png"/>
      </div>
        <h1 class="bem">Seja Bem-Vindo</h1>

        <q-input rounded outlined v-model="text" label="E-mail ou Usuário" />

        <br>

        <div>
          <q-input v-model="password" rounded outlined  :type="senhaLogin ? 'password' : 'text'" label="Senha" stack-label :dense="dense" >
            <template v-slot:append>
              <q-icon
                :name="senhaLogin ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="senhaLogin = !senhaLogin"
              />
            </template>
          </q-input>

        </div>

        <div>

        <q-btn class="logar" label="Logar" type="submit" color="primary"/>

        </div>

        <div>

        <q-btn to="/cad" class="cadastro" label="Não tem uma conta ainda? Se cadastre aqui" color="primary"/>

        </div>

       <!-- <a href="http://localhost:8080/#/cad" class="cadst" >Não tem uma conta ainda? Se cadastre aqui</a> -->

    </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'HomePage',

  setup () {

    return {

      password: ref(''),
      senhaLogin: ref(true),

    }

  }

})
</script>

<style lang="scss">
  body {
  background-color: #ff9a00;
}

h1 {
  color: #ffffff;
  text-align: center;
  font-size: 50px;
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

.logar{
  margin-top: 12%;
  border-radius: 25px;
  width: 25%;
  margin-left: 37%;
}

.cadastro{
  margin-top: 12%;
  border-radius: 25px;
  width: 65%;
  margin-left: 18%;
}

.bem{

  font-family: redondinho;

}

</style>
