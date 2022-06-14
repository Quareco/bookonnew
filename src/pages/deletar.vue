<template>

  <div class="deletar">

    <h3>Você realmente deseja deletar a sua conta?</h3>

    <p5>Essa operação é irreversível, então pense bem antes de fazer isso</p5>



  </div>

<q-btn class="btnDeletar" label="Deletar" @click="pre = true" type="submit" color="purple"/>

<q-dialog  v-model="pre">

    <q-card>

      <q-card-section>

        <h3 class="really">Você deseja deletar a sua conta?</h3>

      </q-card-section>

      <q-card-section>

        <p6> Se sim, insira a sua senha novamente; </p6>

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

        <q-btn class="btnCancelar" label="Cancelar" size="11px" v-close-popup  color="purple"/>

        <q-btn class="btnProsseguir" label="Prosseguir" size="11px" @click="deleter = true"   color="purple"/>

      </q-card-section>

    </q-card>

  </q-dialog>

  <!-- /////////////////////////////////////////////////////// -->

<q-dialog  v-model="deleter" color="purple">

    <q-card>

      <q-card-section>

        <h2 class="quePena">Poxa, ficamos muito tristes por isso</h2>

      </q-card-section>

      <q-card-section>

        <p6>Você sempre vai ser bem vindo aqui caso deseje voltar</p6>

      </q-card-section>

      <q-card-section>

        <p6> Se você realmente quer deletar a sua conta

          digite "Eu quero deletar minha conta"

          </p6>

      </q-card-section>

      <q-card-section>

        <q-input rounded outlined v-model="frase"/>

      </q-card-section>

      <q-card-section>

        <q-btn class="cancelar" label="Cancelar"  size="11px"  v-close-popup color="purple" />

        <q-btn class="fimdeletar" type="submit" label="Deletar"  size="11px"  color="purple"/>

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
  margin-top: 150px;
  margin-bottom: 20%;
  border-radius:  70px;
  width: 30%;
  margin-left: 150px;
  text-shadow: 2px 2px 4px #000000
}

.btnCancelar{
  margin-top: 40px;
  margin-bottom: 20%;
  border-radius: 65px;
  width: 40%;
  margin-left:  110px;
  text-shadow: 2px 2px 4px #000000
}

.btnProsseguir{
  margin-top: -17%;
  margin-bottom: 20%;
  border-radius: 65px;
  width: 40%;
  margin-left: 110px;
  text-shadow: 2px 2px 4px #000000
}

.really{
  color: #000000;
  text-align: center;
  font-size: 25px;
  font-family: textinho1;
}

.quePena{
  color: #000000;
  text-align: center;
  font-size: 30px;
  font-family: textinho1;
}
.cancelar{
 width:40%;
border-radius: 70px;
margin-left: 110px;
 margin-top: -40px;
text-shadow: 2px 2px 4px #000000
}
.fimdeletar{
  width:40%;
border-radius: 70px;
margin-left: 110px;
 margin-top: -15px;
text-shadow: 2px 2px 4px #000000

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

