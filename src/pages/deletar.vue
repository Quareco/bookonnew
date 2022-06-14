<template>

  <div class="deletar">

    <h1>Você realmente deseja deletar a sua conta?</h1>

    <p>Essa operação é irreversível, então pense bem antes de fazer isso</p>

    <q-btn class="btnDeletar" label="Deletar" @click="pre = true" type="submit" color="red"/>

  </div>

<q-dialog  v-model="pre">

    <q-card>

      <q-card-section>

        <h3 class="really">Você deseja deletar a sua conta?</h3>

      </q-card-section>

      <q-card-section>

        <p> Se sim, insira a sua senha novamente </p>

      </q-card-section>

      <q-card-section>
       <q-input rounded outlined v-model="password" :type="isPwd ? 'password' : 'text'" label="Digite sua senha"
        stack-label :dense="dense">
        <template v-slot:append>
          <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />
        </template>
      </q-input>



      <template v-slot:append>
        <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd" />

      </template>


      </q-card-section>

      <q-card-section>

        <q-btn class="btnCancelar" label="Cancelar" size="11px" v-close-popup  color="red"/>

        <q-btn class="btnProsseguir" label="Prosseguir" size="11px" @click="deleter = true"   color="red"/>

      </q-card-section>

    </q-card>

  </q-dialog>

  <!-- /////////////////////////////////////////////////////// -->

<q-dialog  v-model="deleter" color="red">

    <q-card>

      <q-card-section>

        <h2 class="quePena">Poxa, ficamos muito tristes por isso</h2>

      </q-card-section>

      <q-card-section>

        <p>Você sempre vai ser bem vindo aqui caso deseje voltar</p>

      </q-card-section>

      <q-card-section>

        <p> Se você realmente quer deletar a sua conta

          digite "Eu quero deletar minha conta"

          </p>

      </q-card-section>

      <q-card-section>

        <q-input rounded outlined v-model="frase"/>

      </q-card-section>

      <q-card-section>

        <q-btn class="cancelar" label="Cancelar"  size="11px"  v-close-popup color="red" />

        <q-btn class="deletar" type="submit" label="Deletar"  size="11px"  color="red"/>

      </q-card-section>

    </q-card>

  </q-dialog>


</template>


<style lang="scss">

body{
  background-color: $warning;
}

h1{
  color: #ffffff;
  text-align: center;
  font-size: 40px;
  font-family: textinho1;
}

p{
  font-family: textinho1;
  font-size: 25px;
}

.btnDeletar{
  margin-top: 12%;
  margin-bottom: 20%;
  border-radius: 20px;
  width: 30%;
  margin-left: 37%;
}

.btnCancelar{
  margin-top: 12%;
  margin-bottom: 20%;
  border-radius: 20px;
  width: 30%;
  margin-left: 37%;
}

.btnProsseguir{
  margin-top: 12%;
  margin-bottom: 20%;
  border-radius: 20px;
  width: 30%;
  margin-left: 37%;
}

.really{
  color: #000000;
  text-align: center;
  font-size: 30px;
  font-family: textinho1;
}

.quePena{
  color: #000000;
  text-align: center;
  font-size: 30px;
  font-family: textinho1;
}


</style>

<script>
import { ref } from 'vue'


  export default {

    setup () {

      return {

        pre: ref(false),
        deleter: ref(false)





      }

    }

  }



</script>

