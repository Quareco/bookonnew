<template>

  <div class="mudar senha">

    <h1>Mudar senha</h1>

    <p>Por favor, insira sua senha primeiro</p>

   <q-input filled v-model="text" label="Senha" :dense="dense" />

     <q-btn label="Próximo" href="http://localhost:8080/#/mudar_senha" />

  </div>

</template>
