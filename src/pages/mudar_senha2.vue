<template>

  <div class="deletar">

    <h5 class="boraMudar">Bora mudar a senha</h5>

    <p>Insira a sua nova senha</p>

    <q-input class="senha0" rounded outlined v-model="text" label="Senha" :dense="dense" />

    <p>Insira novamente a sua senha</p>

    <q-input class="senha1" rounded outlined v-model="text" label="Reconfirmar senha" :dense="dense" />

 <q-btn  rounded outlined class="mudar" label="Mudar" @click="confirm = true" type="submit" color="blue" />

    <!-- http://localhost:8080/#/mudar_senha -->

    <!-- //////////////////////////////////////////////// -->

    <q-dialog v-model="confirm" auto-close>
      <q-card>
        <q-card-section class="row items-center">

          <h5 class="senha2">Senha mudada com sucesso!</h5>

        </q-card-section>
      </q-card>
    </q-dialog>


  </div>

</template>

<script>
import { ref } from 'vue'


export default {

  setup (){

    return{

      confirm: ref(false)

    }

  }

}

</script>

<style lang="scss" >
body {
    background-color: $palete3;
}

.boraMudar {
    color: #ffffff;
    text-align: center;
    font-family: textinho1;
    font-size: 55px;
    text-shadow: 2px 2px 4px #000000;
}

p {
    text-align: center;
    font-family: textinho1;
    font-size: 25px;
}

.senha2 {
    text-align: center;
}

.q-input {
    border-radius: 30px;
    border-radius: 50px;
    width: 90%;
    margin-left: 5%;
    background-color: #ffffff;
}

.mudar {
    border-radius: 40px;
    margin-left: 160px;
    margin-top: 4px;
    text-shadow: 2px 2px 4px #000000;
}
</style>
