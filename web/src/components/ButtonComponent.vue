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

    background-color: #00bd7e;
    color: white;

    height: 2rem;
    width: 10rem;

    border-radius: .3rem;
    margin-top: 1rem;

    transition: .3s;
}

button:hover{
    background-color: #018d5e;
}
</style>