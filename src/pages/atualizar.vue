<template>

  <div>

    <h4>Atualizar dados pessoais</h4>

    <h6> E-mail </h6>
   <q-input rounded outlined v-model="text" label="E-mail" stack-label :dense="dense" />


    <h6> Nome </h6>
   <q-input rounded outlined v-model="text" label="Nome" stack-label :dense="dense" />

    <h6> Data de Nascimento </h6>
     <q-input rounded outlined v-model="date" type="date" />

    <h6> Gênero </h6>
    <q-select rounded outlined v-model="model" :options="options" label="Gênero" />

    <h6> Número </h6>
    <q-input rounded outlined v-model="phone" label="Telefone" mask="(##) ##### - ####" fill-mask />

 <q-btn rounded outlined class=' atualizar' color="orange" icon="check" label="Atualizar" @click="mudar = true" />



  </div>

  <q-dialog v-model="mudar" auto-close>
  <q-card>
        <q-card-section class="row items-center">
    <q-card-section>
    <h5>Dados atualizados com sucesso!</h5>

</q-card-section>

   </q-card-section>
      </q-card>
  </q-dialog>




</template>

<script>
import { ref } from 'vue'


  export default {

    setup (){

      return {

         model: ref(null),
      options: [
        'Masculino', 'Feminino', 'Prefiro não informar',
      ],

        email: ref('PlaceHolder'),
        nome: ref('PlaceHolder'),
        date: ref('2002/02/06'),
        genero: ref('PlaceHolder'),
        num: ref('PlaceHolder'),
        mudar: ref(false)

      }

    }

  }

</script>

<style lang="scss">

.atualizar{
margin-top: 20px;
border-radius: 20px;
  margin-left: 140px;
text-shadow: 2px 2px 4px #000000

}





</style>
