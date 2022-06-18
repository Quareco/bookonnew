<template>

  <div class="mudar senha">

    <h1>Mudar senha</h1>

    <p>Por favor, insira sua senha primeiro</p>


   <q-input class="password" v-model="password" rounded outlined  :type="senhaLogin ? 'password' : 'text'" label="Senha" stack-label :dense="dense" >
            <template v-slot:append>
              <q-icon
                :name="senhaLogin ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="senhaLogin = !senhaLogin"/>
            </template>
          </q-input>

    <q-btn class="proximo" label="Próximo" color="blue" href="http://localhost:8080/#/mudar_senha" />

  </div>

</template>

<style lang="scss">

h1 {
    color: #ffffff;
    text-align: center;
    font-size: 55px;
    font-family: textinho1;
    text-shadow: 2px 2px 4px #000000;
}

p {
    text-align: center;
    font-family: textinho1;
    font-size: 25px;
}

body {
    background-color: $palete3;
}

.q-input {
    border-radius: 30px;
    border-radius: 50px;
    width: 90%;
    margin-left: 5%;
    background-color: #ffffff;
}

.proximo {
    border-radius: 100px;
    width: 30%;
    margin-left: 35%;
    margin-top: 20%;
}
</style>
