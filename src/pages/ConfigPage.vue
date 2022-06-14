<template>
  <q-page class="center">

      <div class="listinha-config" >

        <q-toolbar>

          <q-toolbar-title class="titulo_config">Configurações</q-toolbar-title>

        </q-toolbar>

        <q-list>

          <q-expansion-item
            expand-separator
            icon="perm_identity"
            label="Conta"
            class="continha"

          >

            <q-list>

              <q-separator/>

              <q-item clickable v-ripple tag="a" size="15px" href="http://localhost:8080/#/desativar">

                <q-item-section> <p class="topic">Desativar conta</p> </q-item-section>

              </q-item>

              <q-separator/>

              <q-item clickable v-ripple tag="a" href="http://localhost:8080/#/deletar">

                <q-item-section> <p class="topic">Deletar conta</p> </q-item-section>

              </q-item>

              <q-separator/>

              <q-item clickable v-ripple tag="a" href="http://localhost:8080/#/senha">

                <q-item-section> <p class="topic">Mudar senha</p> </q-item-section>

              </q-item>

              <q-separator/>

              <q-item clickable v-ripple tag="a" href="http://localhost:8080/#/atualizar">

                <q-item-section> <p class="topic">Atualizar dados pessoais</p> </q-item-section>

              </q-item>

            </q-list>

          </q-expansion-item>

          <q-separator/>

          <q-item clickable v-ripple tag="a" href="http://localhost:8080/#/sobre">

            <q-item-section> <q-icon class="isobre" name="contact_support" /> </q-item-section>
            <q-item-section><p class="sobre"> Sobre </p></q-item-section>

          </q-item>

          <q-separator/>

        </q-list>

      </div>


  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ConfigPage'
})
</script>

<style lang="scss">

body{
  background-color: #f6f7d7;
}

p{
  font-size: 20px;
  font-family: Arial;
}

.titulo_config{

  font-family: titulinho2;
  text-align: center;
  font-size: 30px;

}

.topic{

    font-family: titulinho1;

}

.continha{

  font-family: titulinho2;
  font-size: 18px;

}

.isobre{

  font-size: 28px;

}

.sobre{
  font-family: titulinho2;
}

</style>
