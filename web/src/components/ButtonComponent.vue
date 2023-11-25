<template>
    <button>
        {{ lable }}
        <img :src="src">
    </button>
</template>

<script lang="ts">
export default {
    name: 'Button',
    props: {
        lable: {
            type: String,
            require: true
        },
        src: {
            type: String,
            required: false
        }
    }
}
</script>

<style scoped>
button {
    display: flex;
    justify-content: space-around;
    align-items: center;

    height: 2.3rem;
    width: 13rem;

    color: white;
    background: #8257E5;

    padding-inline: 3rem;
    border-radius: .3rem;
    border: none;

    text-align: center;
    cursor: pointer;

    transition: .3s;
}

button:hover {
    background-color: #5d34bd;
}

button img {
    height: 1rem;
}
</style>