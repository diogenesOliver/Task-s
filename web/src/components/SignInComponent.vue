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

        <ButtonComponent msg="Continue" class="sign-in-button" />
        <small>Or Sign In Using</small>
        <button class="login-with-google">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" />
            Login with Google
        </button>

        <a href="">Already a member?</a>

    </div>
</template>

<style>
.sign-in {
    height: 30rem;
    width: 30rem;

    border-radius: .5rem;
}

.form-input {
    font-size: 1rem;

    font-weight: 400;
    width: 100%;

    margin-top: 1.5rem;

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

.sign-in-button, .login-with-google {
    margin-top: 2rem;
    margin-bottom: 1rem;

    height: 2.5rem;
    width: 100%;
}

.login-with-google{
    display: flex;
    flex-direction: row;
    justify-content: center;

    gap: 1rem;

    margin-top: 1rem;

    align-items: center;

    border-radius: .5rem;
    border: none;

    cursor: pointer;
}

.login-with-google img{
    height: 1.5rem;
}

small {
    margin-left: 12rem;
    margin-top: 3rem;
}
</style>