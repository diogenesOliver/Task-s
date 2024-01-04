<template>
    <form>
        <input type="email" class="form-input" placeholder="Email" id="inpuEmail" v-model="userData.email">
        <input type="password" class="form-input" placeholder="Password" id="inputPassword" @keyup.enter="userLogin()" v-model="userData.password">
    </form>

    <button class="login-button" @click.prevent="userLogin()">Login</button>
</template>

<script lang="ts">
import LoaderComponent from './LoaderComponent.vue';

import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'

export default {
    name: 'Input',
    components: {
        LoaderComponent
    },
    data() {
        return {
            userData: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        async userLogin() {
            try {
                const loader = document.getElementById('loader_race_by') as HTMLElement
                loader.style.display = 'flex'

                await axios.post("http://localhost:8080/api/user/sign-up", this.userData).then(res => {
                    const getFirstName: string[] = res.data.name.split(" ")[0].toLowerCase()

                    this.$router.push(`/task-s/${getFirstName}/${res.data.id}`)
                    this.getUserData(res.data.id)
                })
            } catch (e: any) {
                toast.error('ERROR - Invalid password or email', {
                    autoClose: 3000,
                    theme: 'dark'
                })

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

.login-button {
  outline: none;
  border: none;
  cursor: pointer;

  background: #8257E5;
  color: white;

  border-radius: .5rem;
  transition: .3s;
}
</style>