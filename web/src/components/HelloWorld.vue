<script setup lang="ts">
import ButtonComponent from './ButtonComponent.vue';

defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="gradient">{{ msg }}</h1>
    <h3>
      Task-s! is an easy and intuitive tool <br>
      sou you can have control over all you duties
    </h3>
    <ButtonComponent msg="Get Started" class="information-button" />
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;

  position: relative;
}

.gradient {
  background-image: linear-gradient(to bottom, rgb(132, 59, 181), rgba(253, 29, 29, 1), rgba(252, 176, 69, 1));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: black;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

.information-button {
  height: 2rem;
  width: 10rem;

  margin-top: 2rem;
}

@media (min-width: 1024px) {

  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
