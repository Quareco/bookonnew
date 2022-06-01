<template>

  <div>

    <q-page>

        <h1>Vamos ao Cadastro</h1>

        <q-input outlined v-model="email" type="email" label="Digite o seu email" stack-label :dense="dense" />

        <br>

        <q-input v-model="email" outlined type="email" label="Confirme o seu email" stack-label :dense="dense"/>

        <br>

        <q-input outlined v-model="text" label="Digite o seu nick" />

        <br>

        <q-input outlined v-model="password" type="password" label="Digite a sua senha" />

        <br>

        <q-input outlined  v-model="password" type="password" label="Confirme a sua senha">

        <br>

<template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"  />

            </template>
            </q-input>



            <div class="q-gutter-y-md column" style="max-width: 2000px">


      <br>


      <q-input outlined v-model="text" label="Nome Completo" stack-label :dense="dense" />





            <q-input v-model="date" outlined type="date" hint="Data de Nascimento" stack-label :dense="dense"/>

            <q-select outlined v-model="model" :options="options" label="Gênero" />




      <q-input
        outlined
        v-model="phone"
        label="Telefone"
        mask="(##) ##### - ####"
        fill-mask

      />





    </div>

        <q-checkbox v-model="caixa" label="Você tem mais de 18 anos?"/>


      <br>

        <q-btn label="Cadastrar" type="submit" color="primary"/>



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

    setup () {

    return {

      caixa: ref(false),

      model: ref(null),
      options: [
        'Masculino', 'Feminino'
      ]

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

.q-select{
  background-color: #ffffff;
  border-radius: 50px;
  width: 70%;
  margin-left: 15%;
}

.q-checkbox{
  margin-left: 15%;
}



</style>
