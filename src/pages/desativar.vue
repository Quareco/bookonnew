<template>

  <div class="desativar">

    <h1>Você realmente deseja desativar a sua conta?</h1>

    <p>Essa operação pode ser reversível, você poderá ativar a sua conta caso tente logar novamente</p>

    <q-btn label="Desativar" @click="off = true" color="red" />

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

        <q-btn rounded outlined label="Cancelar" size="11px" v-close-popup color="red" />

        <q-btn ounded outlined label="Prosseguir" size="11px" color="red" />

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
