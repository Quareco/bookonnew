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

          >

            <q-list>

              <q-item clickable v-ripple tag="a" size="15px" href="http://localhost:8080/#/desativar">

                <q-item-section> <p>Desativar conta</p> </q-item-section>

              </q-item>

              <q-item clickable v-ripple tag="a" href="http://localhost:8080/#/deletar">

                <q-item-section> <p>Deletar conta</p> </q-item-section>

              </q-item>

              <q-item clickable v-ripple tag="a" href="http://localhost:8080/#/senha">

                <q-item-section> <p>Mudar senha</p> </q-item-section>

              </q-item>

              <q-item clickable v-ripple tag="a" href="http://localhost:8080/#/atualizar">

                <q-item-section> <p>Atualizar dados pessoais</p> </q-item-section>

              </q-item>

            </q-list>

          </q-expansion-item>

          <q-separator/>

          <q-item clickable v-ripple tag="a" href="http://localhost:8080/#/sobre">

            <q-item-section> <q-icon name="contact_support" /> </q-item-section>
            <q-item-section><p> Sobre </p></q-item-section>

          </q-item>

          <q-separator/>

          <q-item clickable v-ripple tag="a" href="http://localhost:8080/#/tema">

            <!-- @click="$router.replace('/tema')" -->

            <q-item-section> <q-icon name="palette" /> </q-item-section>
            <q-item-section><p> Tema </p></q-item-section>

          </q-item>

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

.titulo_config{

  font-family:'titulinho1';
  text-align: center;

}

// h1 {
//   color: #ffffff;
//   text-align: center;
//   font-size: 50px;
//   font-family: Arial, Helvetica, sans-serif;
//   text-shadow: 2px 2px 4px #000000;
// }

</style>
