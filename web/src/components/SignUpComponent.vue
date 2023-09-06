<template>
  <router-link to="/">
    <img class="button-back" src="../assets/angulo-esquerdo.png" />
  </router-link>

  <h1>Login on plataform</h1>
  <p>Keep managing and organizing your tasks in the best possible way.<br> Enter the platform and see how your tasks are
    progressing</p>

  <div class="login">
    <form>
      <input type="email" class="form-input" placeholder="Email" id="inpuEmail" v-model="userData.email">
      <input type="password" class="form-input" placeholder="Password" id="inputPassword" @keyup.enter="userLogin()"
        v-model="userData.password">
    </form>

    <button class="login-button" @click.prevent="userLogin()">Login</button>
    <small>Or Login In Using</small>
    <button class="login-with-google">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" />
      Login with Google
    </button>

    <router-link to="/sign-in" class="link">
      <p>Not a member? <a class="link">Create a user</a> </p>
    </router-link>

    <div class="loader">
      <div class="dot-pulse" id="loader_race_by">
        <div class="dot-pulse__dot"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import { DotPulse } from '@uiball/loaders'

DotPulse({
  size: 100,
  speed: 1.4,
  color: 'black'
})

export default {
  name: "Login",
  data() {
    return { userData: { email: "", password: "" } }
  },
  methods: {
    async userLogin() {
      try {
        const loader = document.getElementById("loader_race_by") as HTMLElement
        loader.style.display = "flex"

        await axios.post("http://localhost:8080/api/user/sign-up", this.userData).then(res => {
          const getFirstName: string[] = res.data.name.split(" ")[0].toLowerCase()

          this.$router.push(`/task-s/${getFirstName}/${res.data.id}`)
          this.getUserData(res.data.id)

        })
      } catch (e) {
        const inputEmail = document.getElementById("inpuEmail") as HTMLElement
        const inpuPassword = document.getElementById("inputPassword") as HTMLElement

        const color: string = "#D34242"
        let inputs: Array<HTMLElement> = [inputEmail, inpuPassword]

        for (let input of inputs) {
          input.style.borderColor = color
        }
      }
    },
    async getUserData(userId: number) {
      axios.get(`http://localhost:8080/api/all/users/${userId}`).then(res => {
        console.log(res.data)
      })
    }
  }
}
</script>

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
  border: 1px solid #ebebeb6c;
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

.login-button {
  outline: none;
  border: none;
  cursor: pointer;

  background: #8257E5;
  color: white;

  border-radius: .5rem;
  transition: .3s;
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

.dot-pulse {
  --uib-size: 40px;
  --uib-speed: 1.3s;
  --uib-color: #8257E5;

  position: relative;
  display: none;
  align-items: center;
  justify-content: space-between;
  width: var(--uib-size);
  height: calc(var(--uib-size) * 0.27);
}

.dot-pulse__dot,
.dot-pulse::before,
.dot-pulse::after {
  content: '';
  display: block;
  height: calc(var(--uib-size) * 0.18);
  width: calc(var(--uib-size) * 0.18);
  border-radius: 50%;
  background-color: var(--uib-color);
  transform: scale(0);
}

.dot-pulse::before {
  animation: pulse var(--uib-speed) ease-in-out infinite;
}

.dot-pulse__dot {
  animation: pulse var(--uib-speed) ease-in-out
    calc(var(--uib-speed) * 0.125) infinite both;
}

.dot-pulse::after {
  animation: pulse var(--uib-speed) ease-in-out
    calc(var(--uib-speed) * 0.25) infinite;
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