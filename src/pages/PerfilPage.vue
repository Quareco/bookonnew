<template>


  <div class="q-pa-md">


    <q-img src="https://cdn.quasar.dev/img/parallax1.jpg" style="height: 180px">
      <q-menu touch-position context-menu>
        <q-list dense style="min-width: 180px">
          <q-item clickable v-close-popup>
            <q-item-section>Open...</q-item-section>
          </q-item>
          <q-item clickable v-close-popup>
            <q-item-section>New</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable>
            <q-item-section>Preferences</q-item-section>
            <q-item-section side>
              <q-icon name="keyboard_arrow_right" />
            </q-item-section>

            <q-menu anchor="top end" self="top start">
              <q-list>
                <q-item v-for="n in 3" :key="n" dense clickable>
                  <q-item-section>Submenu Label</q-item-section>
                  <q-item-section side>
                    <q-icon name="keyboard_arrow_right" />
                  </q-item-section>
                  <q-menu auto-close anchor="top end" self="top start">
                    <q-list>
                      <q-item v-for="n in 3" :key="n" dense clickable>
                        <q-item-section>3rd level Label</q-item-section>
                      </q-item>
                    </q-list>
                  </q-menu>
                </q-item>
              </q-list>
            </q-menu>

          </q-item>

        </q-list>

      </q-menu>
    </q-img>



    <q-item-section avatar style="margin-left:38%; margin-top: -8%;">
      <q-avatar size="100px">
        <img src="https://cdn.quasar.dev/img/boy-avatar.png">
      </q-avatar>
    </q-item-section>

    <div style="margin-top:-8%; margin-left:25%;  ;  font-size:4px;">
      <h6>
        Carlos Gomes Barbosa, 22 <q-item-section side top>
          <q-badge label="10k" />
        </q-item-section>
      </h6>

      <q-item-section>


        <q-item-label caption>Tenho 22 ano// Brasileiro (a) // Estudo na Camargo Aranha </q-item-label>
      </q-item-section>



    </div>





  </div>
</template>

<script>

import { ref } from 'vue'

export default {
  setup() {
    return {
      estrela: ref(true)
    }
  }
}



</script>

<style lang="scss">
body {
  background-color: #add8e6;
}

h1 {
  color: #ffffff;
  text-align: center;
  font-size: 50px;
  font-family: Arial, Helvetica, sans-serif;
  text-shadow: 2px 2px 4px #000000;
}


p {
  font-family: verdana;
  font-size: 20px;
}

.q-input {
  background-color: #ffffff;
}

.q-btn {
  border-radius: 10px;
}

.q-card {
  background-color: #d9d9d9;
  font-family: Arial;
}
</style>

