<template>

  <div class="mudar senha">

    <h1>Mudar senha</h1>

    <p>Por favor, insira sua senha primeiro</p>


   <q-input class="password" v-model="password" rounded outlined  :type="senhaLogin ? 'password' : 'text'" label="Senha" stack-label :dense="dense" >
            <template v-slot:append>
              <q-icon
                :name="senhaLogin ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="senhaLogin = !senhaLogin"
              />
            </template>
          </q-input>

    <q-btn class="proximo" label="Próximo" color="blue" href="http://localhost:8080/#/mudar_senha" />

  </div>

</template>
<style lang="scss">
  body {
  background-color: $palete3;
}

.q-input{
  border-radius: 30px;
border-radius: 50px;
width: 90%;
margin-left: 2%;

}




.proximo{
border-radius: 100px;
width: 30%;
margin-left: 32%;
margin-top: 20%;
}

</style>
