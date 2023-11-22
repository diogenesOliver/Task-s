<template>
    <input class="form-input" :placeholder="placeholderValue" :id="idValue">
</template>

<script lang="ts">
export default {
    name: 'input',
    props: ["placeholderValue", "idValue"]
}
</script>

<style scoped>
.form-input {
    font-size: 1rem;

    font-weight: 400;
    width: 100%;

    margin-top: 1.5rem;

    line-height: inherit;

    padding: 0.75rem 1.25rem;

    border-radius: .5rem;
    border: 1px solid #ebebeb6c;
    background: transparent;

    color: white;

    transition: all 0.2s ease-in-out;
}

.form-input:focus {
    outline: none;
}
</style>