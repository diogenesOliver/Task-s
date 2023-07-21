<script setup lang="ts">
defineProps<{
    msg: string
}>()
</script>

<template>
    <button>{{ msg }}</button>
</template>

<style scoped>
button {
    outline: none;
    border: none;
    cursor: pointer;

    background: linear-gradient(90deg, hsl(276, 51%, 47%) 0%, rgba(253,29,29,1) 65%, rgba(252,176,69,1) 100%);
    color: white;

    height: 2rem;
    width: 10rem;

    margin-top: 1rem;
    border-radius: .2rem;
    transition: .3s;
}

button:hover{
    border-radius: .5rem;
}
</style>