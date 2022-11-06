<template>
    <div>
        <IntroductionComponent/>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import IntroductionComponent from "./IntroductionComponent.vue";
export default defineComponent({
    name: "NavBar",
    components: {
        IntroductionComponent
    }
});
</script>
<style>

</style>