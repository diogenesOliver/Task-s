<template>
  <router-link to="/">
    <img class="button-back" src="../assets/angulo-esquerdo.png" />
  </router-link>

  <h1>Sign-in on plataform</h1>
  <p>The first step to improving your productivity and <br> having better control of your activities</p>

  <div class="sign-in">
    <form>
      <input type="text" class="form-input" id="inputName" placeholder="Name" v-model="userData.name">
      <input type="email" class="form-input" id="inputEmail" placeholder="Email" v-model="userData.email">

      <div class="passwords">
        <input type="password" class="form-input" id="inputPassword" placeholder="Password" v-model="userData.password">
        <input type="password" class="form-input" id="inputConfirmPassword" placeholder="Confirm Password"
          @keyup.enter="createUser()" v-model="userData.confirm_password">
      </div>
    </form>

    <button class="sign-in-button" @click.prevent="createUser()">Continue</button>
    <small>Or Sign In Using</small>
    <button class="login-with-google">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" />
      Sign in with Google
    </button>

    <router-link to="/login" class="login-buttons">
      <a class="link">Already a member?</a>
    </router-link>

    <LoaderComponent />
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

import LoaderComponent from '../components/LoaderComponent.vue';

export default {
  name: "Register",
  components: {
    LoaderComponent
  },
  data() {
    return {
      userData: {
        name: "",
        email: "",
        password: "",
        confirm_password: ""
      }
    }
  },
  methods: {
    async createUser() {
      try {
        const loader = document.getElementById("loader_race_by") as HTMLElement
        loader.style.display = "flex"

        await axios.post("http://localhost:8080/api/register", this.userData).then(res => {
          const getFirstName: string[] = res.data.name.split(" ")[0].toLowerCase()
          this.$router.push(`/task-s/${getFirstName}/${res.data.id}`)
        })
      } catch (e) {
        toast.error('ERROR - Invalid field', {
          autoClose: 3000,
          theme: 'dark'
        })

        const elementIds: string[] = ["inputName", "inputEmail", "inputPassword", "inputConfirmPassword"];
        const elements: HTMLElement[] = elementIds.map(
          id => document.getElementById(id) as HTMLElement
        );

        const color: string = "#D34242"
        for (let input of elements) {
          input.style.borderColor = color
        }
      }
    }
  }
}
</script>

<style>
.sign-in {
  height: 30rem;
  width: 40rem;
}

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

.sign-in-button,
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

.sign-in small {
  margin-left: 17rem;
  margin-top: 3rem;
}

.link {
  color: #EBEBEBA3;
}

.login-buttons:hover {
  background-color: transparent;
}

.sign-in-button {
  outline: none;
  border: none;
  cursor: pointer;

  background: #8257E5;
  color: white;

  border-radius: .5rem;
  transition: .3s;
}

.button-back {
  height: 1.8rem;

  position: absolute;
  left: 2rem;
  top: 2rem;
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