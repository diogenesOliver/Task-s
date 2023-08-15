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

            <ul>
                <li><a href="/login">Login</a></li>
                <li><a href="/sign-in" class="get-started">Sign in</a></li>
            </ul>
        </nav>

        <div class="main-div">
            <div class="informations">
                <h1>Create, share and <br> control all your tasks</h1>
                <p>Take control of all your tasks and <br>
                    improve your day-to-day performance with better organization
                </p>

                <button class="get-started-button">Get started</button>
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

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    background-image: linear-gradient(to bottom, rgb(132, 59, 181), rgba(253, 29, 29, 1), rgba(252, 176, 69, 1));
    background-clip: text;
    color: black;
}

.right-nav{
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

.get-started-button {
    height: 2.3rem;
    width: 13rem;

    border-radius: 5px;
    border: none;

    text-align: center;
    color: white;
    background: linear-gradient(90deg, hsl(276, 51%, 47%) 0%, rgba(253, 29, 29, 1) 65%, rgba(252, 176, 69, 1) 100%);

    border-radius: 2rem;
    cursor: pointer;
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
    margin-top: 10rem;

    text-align: center;
}

.informations{
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
