<template>
  <router-link to="/">
    <img class="button-back" src="../assets/angulo-esquerdo.png" />
  </router-link>

  <h1>Login on plataform</h1>
  <p>Keep managing and organizing your tasks in the best possible way.<br> Enter the platform and see how your tasks are
    progressing</p>

  <div class="login">
    <SignUpInputComponent/>

    <small>Or Login In Using</small>
    <button class="login-with-google">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" />
      Login with Google
    </button>

    <router-link to="/sign-in" class="link">
      <p>Not a member? <a class="link">Create a user</a></p>
    </router-link>

    <LoaderComponent />
  </div>
</template>

<script lang="ts">
import LoaderComponent from '../components/LoaderComponent.vue';
import SignUpInputComponent from '../components/SignUpInputComponent.vue';

export default {
  name: "Login",
  components: {
    LoaderComponent,
    SignUpInputComponent
  }
}
</script>

<style>
.login {
  height: 30rem;
  width: 40rem;

  border-radius: .5rem;
}

.passwords input {
  width: 80%;
}

.passwords input:nth-child(2) {
  margin-left: .5rem;
}

.passwords,
.login-with-google {
  display: flex;
  flex-direction: row;
}

.passwords {
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

.button-back {
  height: 1.8rem;

  position: absolute;
  left: 2rem;
  top: 2rem;
}

.loader {
  padding-inline: 18rem;
  width: 100%;

  margin-top: 3rem;
}

@keyframes pulse {

  0%,
  100% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.5);
  }
}
</style>