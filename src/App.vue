<template>
  <NavBarVue />
  <div class="content">
    <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBarVue from './components/NavBar.vue';

export default defineComponent({
  name: 'App',
  components: {
    NavBarVue
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


.content {
  padding-top: 100px;
}

html {
  background-color: #1F1F24;
}

#app {
  background-color: #1F1F24;
  color: white;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}

@keyframes fade-in {
  0% {
    opacity: 0
  }

  100% {
    opacity: 1
  }
}

@keyframes fade-out {
  0% {
    opacity: 1
  }

  50% {
    opacity: 0
  }

  100% {
    opacity: 0;
  }
}

html,
#app {
  background-color: #141422;
}
</style>
