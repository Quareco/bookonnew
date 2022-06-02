<template>
  <div class="q-pa-md">
    <q-parallax :height="250" :speed="0.5"    >



      <template v-slot:media>
        <img src="https://cdn.quasar.dev/img/parallax1.jpg">
      </template>


    </q-parallax>

  <q-expansion-item>
        <template v-slot:header>
          <q-item-section avatar>
            <q-avatar size="140px"  font-size="100px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>


          <q-item-section>
          <h1 style="font-weight:bold; font-size:15px">Carlos Gomes Barbosa </h1>
          </q-item-section>


        </template>

        <q-card>
          <q-card-section>
            Gosto muito de aventuras e de Assistir os Jovens Titãs, Shipo muito a Ravena e o Mutano.
            Além de Assistir Apenas um Show.
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-badge color="green" rounded class="q-mr-sm" />Online



  <div class="q-pa-md q-gutter-sm">

  </div>

  </div>
</template>

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

.q-input{
  background-color: #ffffff;
}

.q-btn{
  border-radius: 10px;
}

.q-card{
  background-color: #d9d9d9;
  font-family: Arial;
}


</style>

