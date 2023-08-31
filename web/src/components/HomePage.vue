<template>
    <div class="main">
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
                    <button class="button-from-login">Login</button>
                </router-link>

                <router-link to="/sign-in" class="link">
                    <button class="button-from-signin">Sign In</button>
                </router-link>
            </div>
        </nav>

        <div class="main-div">
            <div class="informations">
                <h1>Create, share and <br> control all your tasks</h1>
                <p>Take control of all your tasks and <br>
                    improve your day-to-day performance with better organization
                </p>
                <router-link to="/sign-in" class="link">
                    <button class="get-started-button">Get started</button>
                </router-link>
            </div>
        </div>

    </div>
</template>

<script>

</script>

<style>
.main {
    height: 100vh;
    width: 75rem;
}

ul,
nav {
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

.right-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
}

ul {
    gap: 5rem;
}

ul li {
    list-style: none;
    cursor: pointer;
}

.buttons-to-logs{
    display: flex;
    gap: 2rem;
}

.button-from-login,
.button-from-signin,
.get-started-button{
    text-align: center;
    color: white;
    background: #8257E5;
    
    border-radius: .3rem;
    border: none;

    cursor: pointer;
}

.button-from-signin{
    background-color: transparent;
    border: solid 1px #8257E5;

    transition: .3s;
}

.button-from-signin:hover{
    background-color: #8257E5;
}

.get-started-button {
    height: 2.3rem;
    width: 13rem;
}

.button-from-login,
.button-from-signin{
    height: 2.5rem;
    width: 8rem;
}

.button-from-login{
    background: transparent;
    border: none;
}

li a {
    color: #EBEBEBA3;
}

li a:hover {
    background-color: transparent;
}

.get-started {
    color: white;
}

.main-div {
    width: 100%;
    margin-top: 15rem;

    text-align: center;
}

.informations {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    align-items: center;

    height: 13rem;
}

.informations h1 {
    font-size: 2rem;
    line-height: 2.5rem;
}

.informations p {
    margin-top: 1rem;
    margin-bottom: 1rem;
}
</style>
