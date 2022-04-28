<template>
  <div class="q-pa-md">
    <div class="q-gutter-y-md column" style="max-width: 2000px">

    
      


      <q-input filled v-model="text" label="Nome Completo" stack-label :dense="dense" />


        <q-input v-model="email" filled type="email" label="Email" stack-label :dense="dense"/>


            <q-input v-model="date" filled type="date" hint="Data de Nascimento" />

            <q-select filled v-model="model" :options="options" label="Gênero" />



      <q-input
        filled
        v-model="phone"
        label="Telefone"
        mask="(##) ##### - ####"
        fill-mask
        
      />

       <q-btn color="primary" label="Salvar" />

      

     
  
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      model: ref(null),
      options: [
        'Masculino', 'Feminino'
      ]
    }
  }
}
</script>