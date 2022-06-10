<template>

  <div>

    <q-page>

      <h1>Vamos ao Cadastro</h1>



      <q-input rounded outlined v-model="email" type="email" label="Digite o seu email" stack-label :dense="dense"  />


      <q-input rounded outlined v-model="email" type="email" label="Confirme o seu email" stack-label :dense="dense" />


      <q-input rounded outlined v-model="text" label="Digite o seu nick" />


      <q-input rounded outlined v-model="password" :type="isPwd ? 'password' : 'text'" label="Digite sua senha"
        stack-label :dense="dense">
        <template v-slot:append>
          <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
        </template>
      </q-input>


      <q-input rounded outlined v-model="confirm_password" :type="isPwd2 ? 'password' : 'text'"
        label="Digita sua senha novamente" stack-label :dense="dense">
        <template v-slot:append>
          <q-icon :name="isPwd2 ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd2 = !isPwd2" />
        </template>
      </q-input>


      <template v-slot:append>
        <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />

      </template>

      <div class="q-gutter-y-md column" style="max-width: 2000px">

        <q-input rounded outlined v-model="text" label="Nome Completo" stack-label :dense="dense" />

        <q-input rounded outlined v-model="date" type="date"  />

        <q-select rounded outlined v-model="model" :options="options" label="Gênero" />

        <q-input rounded outlined v-model="phone" label="Telefone" mask="(##) ##### - ####" fill-mask />

      </div>
      <q-btn class="cadastrar" label="Cadastrar" type="submit" color="primary" />

      <!--<q-spinner-hourglass
          color="primary"
          size="2em"
        />
        <q-tooltip :offset="[0, 8]">QSpinnerHourglass</q-tooltip>-->

    </q-page>



  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'LoginPage',

  setup() {

    return {

      model: ref(null),
      options: [
        'Masculino', 'Feminino', 'Prefiro não informar',
      ],

      password: ref(''),
      confirm_password: ref(''),
      isPwd: ref(true),
      isPwd2: ref(true),

    }

  }

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

.q-input {
  background-color: #ffffff;
  border-radius: 50px;
  width: 70%;
  margin-left: 15%;
}


.q-select {
  background-color: #ffffff;
  border-radius: 50px;
  width: 70%;
  margin-left: 15%;
}

.cadastrar {
  margin-top: 2%;
  margin-bottom: 20%;
  border-radius: 20px;
  width: 30%;
  margin-left: 37%;
}
</style>
