<script setup lang="ts">
import ButtonComponent from './ButtonComponent.vue';
</script>

<template>
  <h1>Login on plataform</h1>
  <p>Keep managing and organizing your tasks in the best possible way.<br> Enter the platform and see how your tasks are
    progressing</p>

  <div class="login">
    <form>
      <input type="email" class="form-input" placeholder="Email">
      <input type="password" class="form-input" placeholder="Password">
    </form>

    <ButtonComponent msg="Login" class="login-button" />
    <small>Or Login In Using</small>
    <button class="login-with-google">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" />
      Login with Google
    </button>

    <router-link to="/sign-in" class="link">
      <p>Not a member? <a class="link">Create a user</a> </p>
    </router-link>
  </div>
</template>

<style>
.login {
  height: 30rem;
  width: 40rem;

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

.login-button,
.login-with-google {
  margin-top: 2rem;
  margin-bottom: 1rem;

  height: 2.5rem;
  width: 100%;
}

.login-with-google {
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

.login-with-google img {
  height: 1.5rem;
}

.login small {
  margin-left: 17rem;
  margin-top: 3rem;
}

.link {
  color: #EBEBEBA3;
}

.link:hover {
  background: transparent;
}
</style>