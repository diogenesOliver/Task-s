<script setup lang="ts">
import ButtonComponent from './ButtonComponent.vue';
</script>

<template>
    <h1>Sign-in on plataform</h1>
    <p>The first step to improving your productivity and <br> having better control of your activities</p>

    <div class="sign-in">
        <form>
            <input type="text" class="form-input" placeholder="Name">
            <input type="email" class="form-input" placeholder="Email">
            <div class="passwords">
                <input type="password" class="form-input" placeholder="Password">
                <input type="password" class="form-input" placeholder="Confirm Password">
            </div>
        </form>

        <ButtonComponent msg="Sign-in" class="sign-in" />

    </div>
</template>

<style>
.sign-in {
    height: 30rem;
    width: 25rem;

    border-radius: .5rem;
}

.form-input {
    font-size: 1rem;

    font-weight: 400;
    width: 100%;

    margin-top: 3rem;

    line-height: inherit;

    padding: 0.75rem 1.25rem;

    border-radius: .5rem;
    border: 1px solid #fff;
    background: transparent;

    color: white;

    transition: all 0.2s ease-in-out;
}

.passwords input {
    width: 80%;
}

.passwords input:nth-child(2) {
    margin-left: .5rem;
}

.passwords {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>