<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <Transition name="fade" mode="out-in">
    <RouterView />
  </Transition>
</template>

<style scoped>
html{
  scroll-behavior: smooth;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(-2em);
}
.fade-enter-active,
.fade-leave-active {
  transition: all 200ms ease;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
