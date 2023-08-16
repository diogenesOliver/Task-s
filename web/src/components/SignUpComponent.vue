<template>
  <h1>Login on plataform</h1>
  <p>Keep managing and organizing your tasks in the best possible way.<br> Enter the platform and see how your tasks are
    progressing</p>

  <div class="login">
    <form>
      <input type="email" class="form-input" placeholder="Email" id="inpuEmail" v-model="userData.email">
      <input type="password" class="form-input" placeholder="Password" id="inputPassword" v-model="userData.password">
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
  </div>
</template>

<script lang="ts">
import axios from 'axios'

export default {
  name: "Login",
  data() {
    return { userData: { email: "", password: "" } }
  },
  methods: {
    async userLogin() {
      try {
        await axios.post("http://localhost:8080/api/user/sign-up", this.userData).then(res => {
          const getFirstName: string[] = res.data.name.split(" ")[0]

          this.$router.push(`/user/task-s?name=${getFirstName}&id=${res.data.id}`)
          this.getUserData(res.data.id)

        })
      } catch (e) {
        const inputEmail = document.getElementById("inpuEmail") as HTMLElement
        const inpuPassword = document.getElementById("inputPassword") as HTMLElement
        const color: string = "#930000"

        inputEmail.style.borderColor = color
        inpuPassword.style.borderColor = color
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

.login-button {
  outline: none;
  border: none;
  cursor: pointer;

  background: linear-gradient(90deg, hsl(276, 51%, 47%) 0%, rgba(253, 29, 29, 1) 65%, rgba(252, 176, 69, 1) 100%);
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
</style>