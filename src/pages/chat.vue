<template>
    <q-page>

        <q-list>
            <q-item class="chat">
            <q-item-section >
                <input type="text" placeholder="Mensagem" class="text">
            </q-item-section>
            <q-item-section>
                <input type="button" value="Enviar" class="btn-enviar">
            </q-item-section>
            </q-item>
        </q-list>

    </q-page>
</template>

<script>

</script>

<style lang="scss">
    .chat{
        margin-top: 790px;
        margin-left: 390px;
    }

    .text{
        width: 1000px;
    }

    .btn-enviar{
        width: 100px;
        margin-left: 280px;
    }

</style>