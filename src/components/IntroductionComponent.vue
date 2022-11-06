<template>
    <div class="intro">
        <div class="center">
            <img class="logo" src="@/assets/logo.png" alt="">
        </div>
        <div class="center">
            <p class="title">Angelillo15</p>
        </div>
        <div class="center">
            <p class="subtitle">If you are searching support join my discord</p>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "IntroductionComponent"
});
</script>

<style>
    .logo {
        border-radius: 50%;
        width: 120px;
        margin: 50px 100px;
        display: inline;
    }
    .title {
        font-family: Source Sans Pro, Open Sans, sans-serif;
        font-weight: bold;
        letter-spacing: 0px;
        text-align: center;
    }

    .subtitle {
        text-align: left;
        margin-top: -100px;
        margin-left: 450px !important;
    }

    .intro {
        background-color: #0F0F15;
        padding-bottom: 50px;
    }

    .center {
        display: flex;
        justify-content: center;
    }
</style>