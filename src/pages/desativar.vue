<template>

  <div class="desativar">

    <h5>Você realmente deseja desativar a sua conta?</h5>

    <p>Essa operação pode ser reversível, você poderá ativar a sua conta caso tente logar novamente</p>

    <q-btn class="btnDesativar" label="Desativar" @click="off = true" color="red" />

  </div>

  <q-dialog v-model="off">

    <q-card>

      <q-card-section>

        <h3>Você realmente deseja desativar a sua conta?</h3>

      </q-card-section>

      <q-card-section>

        <p> Se sim, insira a sua senha novamente</p>

      </q-card-section>

      <q-card-section>

        <q-input rounded outlined v-model="senhaConfirm" :type="confirmPw ? 'password' : 'text'" label="Digite sua senha"
          stack-label :dense="dense">
          <template v-slot:append>
            <q-icon :name="confirmPw ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="confirmPw = !confirmPw" />
          </template>
        </q-input>

      </q-card-section>

      <q-card-section>

        <q-btn rounded outlined class="cancelarr" label="Cancelar" size="11px" v-close-popup color="blue" />

        <q-btn rounded outlined class="prosseguir" label="Prosseguir" size="11px" color="blue" />

      </q-card-section>

    </q-card>

  </q-dialog>

</template>

<script>
import { ref } from 'vue'


export default {

  setup() {

    return {

      senhaConfirm: ref(''),
      off: ref(false),
      confirmPw: ref(true)

    }

  }

}

</script>

<style lang="scss">

body{
  background-color: $palete1;
}

h1{
  color: #ffffff;
  text-align: center;
  font-size: 35px;
  font-family: textinho1;
  text-shadow: 2px 2px 4px #000000;
  margin-top:-1%
}

p{
  font-family: textinho1;
  font-size: 25px;
}
///border-radius: 20px;
//width: 30%;
//margin-left: 35%;
//margin-top: 50%;

.btnDesativar{
  margin-top: 12%;
  margin-bottom: 20%;
  border-radius: 20px;
  width: 30%;
  margin-left: 37%;
}


h3{
  color: #000000;
  text-align: center;
  font-size: 35px;
  font-family: textinho1;
  margin-top:-1%
}
.cancelarr{
border-radius: 30px;
width: 30%;
margin-left: 38%;
margin-top: -10%;

}
.prosseguir{
 margin-top: -2%;
border-radius: 50px;
width: 30%;
margin-left: 38%;





}

</style>
