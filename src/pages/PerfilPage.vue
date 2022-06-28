<template>

    <div class="q-pa-md">

        <q-img class="tema" src="https://scontent.fcgh3-1.fna.fbcdn.net/v/t1.6435-9/39944374_1923701544362403_1430590122385997824_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_ohc=Sx2ltq5e43kAX_6EECC&_nc_ht=scontent.fcgh3-1.fna&oh=00_AT-ezFzVLwbV89B5dQjSFkogCdDbbygaQukbQwcTZ7C_LA&oe=62DF8022" style="height: 180px">
            <q-menu touch-position="touch-position" context-menu="context-menu">
                <q-list dense="dense" style="min-width: 180px">
                    <q-item clickable="clickable" v-close-popup="v-close-popup">
                        <q-item-section>Open...</q-item-section>
                    </q-item>
                    <q-item clickable="clickable" v-close-popup="v-close-popup">
                        <q-item-section>New</q-item-section>
                    </q-item>
                    <q-separator/>
                    <q-item clickable="clickable">
                        <q-item-section>Preferences</q-item-section>
                        <q-item-section side="side">
                            <q-icon name="keyboard_arrow_right"/>
                        </q-item-section>

                        <q-menu anchor="top end" self="top start">
                            <q-list>
                                <q-item v-for="n in 3" :key="n" dense="dense" clickable="clickable">
                                    <q-item-section>Submenu Label</q-item-section>
                                    <q-item-section side="side">
                                        <q-icon name="keyboard_arrow_right"/>
                                    </q-item-section>
                                    <q-menu auto-close="auto-close" anchor="top end" self="top start">
                                        <q-list>
                                            <q-item v-for="n in 3" :key="n" dense="dense" clickable="clickable">
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

        <q-item-section avatar="avatar" style="margin-left:38%; margin-top: -8%;">
            <q-avatar size="100px">
                <img src="https://i.pinimg.com/originals/36/3f/e3/363fe367184cacc4e7cdba0094510a9a.png"></q-avatar>
            </q-item-section>

            <div class="av" style="margin-top:-1%; margin-left:19%;">
                <p>
                    Carlos Gomes Barbosa, 22 </p>
                </div>

              <div class="sobre" style="margin-top:-12%; margin-left:6%;">
            <p class="sobre">" Tenho 15 anos, Gosto de aventuras e de um melhor aprendizado"</p>

            </div>

</div>





        <section>
        <q-item clickable class="card" v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://i.pinimg.com/originals/36/3f/e3/363fe367184cacc4e7cdba0094510a9a.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Você bateu um novo recorde!</q-item-label>
          <q-item-label caption lines="2">
            <span class="text-weight-bold">Pontuação: 4090</span>

          </q-item-label>
        </q-item-section>

        <q-item-section side down>
          1 min ago
        </q-item-section>
      </q-item>
      </section>

<section>
        <q-item clickable class="doiscar" v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://i.pinimg.com/originals/36/3f/e3/363fe367184cacc4e7cdba0094510a9a.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Você bateu um novo recorde!</q-item-label>
          <q-item-label caption lines="2">
            <span class="text-weight-bold">Pontuação: 4090</span>

          </q-item-label>
        </q-item-section>

        <q-item-section side down>
          30 min ago
        </q-item-section>
      </q-item>
      </section>









    </template>

    <script>

        import {ref} from 'vue'

        export default {
            setup() {
                return {estrela: ref(true)}
            }
        }
    </script>

    <style lang="scss">
        body {
            background-color: #1b76eed2;
        }

        h1 {
            color: #d42e2e;
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

        .q-card {
            background-color: #d9d9d9;
            font-family: Arial;
        }

        .av{

            font-family: redondinho;
            border-radius: 5px;


            margin-right: 1%;
            border-radius: 30px;
            padding: 2%;
            margin-bottom: 10%

        }

        .card{
            background-color: 	#ff9a00;
            margin-top:130px;
            margin-left: 2%;
            margin-right: 1%;
            border-radius: 10px;
            padding: 5%;
            margin-bottom: 10%;
        }
        .sobre{
        background-color: 	#e5eef0f6;
        border-radius: 40px;
        font-size: 12px;
        margin-right: -1%;

        padding: -20%


        }
        .doiscar{
            background-color: 	#ff9a00;
            margin-top:40px;
            margin-left: 2%;
            margin-right: 1%;
            border-radius: 10px;
            padding: 5%;
            margin-bottom: 10%;


        }
    </style>

