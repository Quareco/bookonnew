<template>

    <div class="q-pa-md">

        <q-img src="../assets/gaming.jpeg" style="height: 180px">
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
                <img src="https://cdn.quasar.dev/img/boy-avatar.png"></q-avatar>
            </q-item-section>

            <div class="av" style="margin-top:-8%; margin-left:0%;  ;  font-size:4px;">
                <h6>
                    Carlos Gomes Barbosa, 22
                    <q-item-section side="side" top="top"></q-item-section>
                </h6>

                <q-item-section>

                    <q-item-label caption="caption">Sobre Mim: Gosto de aventuras e de um melhor aprendizado.
                    </q-item-label>
                </q-item-section>

            </div>

        </div>
        <section>
        <q-item clickable class="card" v-ripple>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label lines="1">Você bateu um novo recorde !</q-item-label>
          <q-item-label caption lines="2">
            <span class="text-weight-bold">Pontuação: 4090</span>

          </q-item-label>
        </q-item-section>

        <q-item-section side down>
          1 min ago
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
            background-color: #3fc0d3;
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

        .q-card {
            background-color: #d9d9d9;
            font-family: Arial;
        }

        .av{
            background-color: 	#e6e9ee;
            border-radius: 10px;
        }

        .card{
            background-color: 	#e6e9ee;
            margin-top: 20px;
            margin-left: 2%;
            margin-right: 1%;
            border-radius: 10px;
            padding: 5%;
            margin-bottom: 10%;
        }
    </style>

