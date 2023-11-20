<template>
    <nav>
        <div class="right-nav">
            <h1>Task-s</h1>
            <ul>
                <li>Feature</li>
                <li>About</li>
                <li>Resources</li>
            </ul>
        </div>

        <div class="buttons-to-logs">
            <router-link to="/Login" class="link">
                <button class="button-from-login">
                    <img src="../assets/do-utilizador.png" alt="">
                    Login
                </button>
            </router-link>

            <router-link to="/sign-in" class="link">
                <button class="button-from-signin">Sign In</button>
            </router-link>
        </div>
    </nav>
</template>

<script lang="ts">
export default {
    name: "navbar"
}
</script>

<style scoped>
ul,
nav,
.right-nav {
    display: flex;
    flex-direction: row;
}

nav {
    justify-content: space-between;
    align-items: center;

    gap: 25rem;
    width: 100%;
    height: 3rem;
}

nav h1 {
    font-size: 2rem;
    color: #8257E5;
    background-clip: text;
}

.right-nav { align-items: center; }

ul { gap: 3rem; }

ul li {
    list-style: none;
    cursor: pointer;
}

.buttons-to-logs {
    display: flex;
    gap: 2rem;
}

.button-from-login,
.button-from-signin{
    text-align: center;
    color: white;
    background: #8257E5;

    border-radius: .3rem;
    border: none;

    cursor: pointer;
    transition: .3s;
}

.button-from-signin {
    background-color: transparent;
    border: solid 1px #8257E5;
}

.right-nav ul li {
    transition: .3s;
}

.right-nav ul li:hover {
    color: #8257e5c7;
}

.button-from-login:hover {
    background-color: #8257e53d;
}

.button-from-signin:hover {
    background-color: #8257E5;
}

.button-from-login,
.button-from-signin {
    height: 2.5rem;
    width: 8rem;
}

.button-from-login {
    display: flex;
    justify-content: space-around;
    align-items: center;

    padding-inline: 1.5rem;

    background: transparent;
    border: none;
}

.button-from-login img { height: 1rem; }

</style>