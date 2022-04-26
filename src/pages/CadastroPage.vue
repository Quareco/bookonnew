<template>

  <div>

    <q-page>

        <h1>Vamos brincar</h1>

        <q-input outlined v-model="text" label="Digite o seu email" />

        <q-input outlined v-model="text" label="Digite o seu nick" />

        <q-input outlined v-model="password" type="password" label="Digite a sua senha" />

        <q-input outlined  v-model="password" type="password" label="Confirme a sua senha">
<template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"  />

            </template>
            </q-input>
        
        <q-checkbox v-model="caixa" label="Você tem mais de 18 anos?"/>

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

      caixa: ref(false)

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
}

.q-btn{
  border-radius: 10px;
}


</style>
