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
                <input type="password" class="form-input" id="inputPassword" placeholder="Password"
                    v-model="userData.password">
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

        <div class="loader">
            <div class="race-by" id="loader_race_by"></div>
        </div>
    </div>
</template>

<script lang="ts">
import axios from 'axios'
import { RaceBy } from '@uiball/loaders'
RaceBy({
    size: 80,
    lineWeight: 5,
    speed: 1.4,
    color: 'black'
})


export default {
    name: "Register",
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
                const inputName = document.getElementById("inputName") as HTMLElement
                const inputEmail = document.getElementById("inputEmail") as HTMLElement
                const inputPassword = document.getElementById("inputPassword") as HTMLElement
                const inputConfirmPassword = document.getElementById("inputConfirmPassword") as HTMLElement

                const color: string = "#D34242"
                let inputs: Array<HTMLElement> = [inputName, inputEmail, inputPassword, inputConfirmPassword]

                for (let input of inputs) {
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

.race-by {
    --uib-size: 100px;
    --uib-speed: 1.4s;
    --uib-color: #8257E5;
    --uib-line-weight: 5px;

    display: none;
    align-items: center;
    justify-content: center;
    height: var(--uib-line-weight);
    width: var(--uib-size);
    border-radius: calc(var(--uib-line-weight) / 2);
    overflow: hidden;
    transform: translate3d(0, 0, 0);
}

.race-by::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--uib-color);
    opacity: 0.1;
}

.race-by::after {
    content: '';
    height: 100%;
    width: 100%;
    border-radius: calc(var(--uib-line-weight) / 2);
    animation: raceBy var(--uib-speed) ease-in-out infinite;
    transform: translateX(-100%);
    background-color: var(--uib-color);
}

@keyframes raceBy {
    0% {
        transform: translateX(-100%);
    }

    100% {
        transform: translateX(100%);
    }
}
</style>