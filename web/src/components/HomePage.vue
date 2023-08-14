<template>
    <div class="main">
        <nav>
            <h1>Task-s</h1>

            <ul>
                <li>Feature</li>
                <li>About</li>
                <li><a href="/login">Login</a></li>
                <li><a href="/sign-in" class="get-started">Get started</a></li>
            </ul>
        </nav>
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
    justify-content: space-around;
    align-items: center;

    gap: 25rem;
    width: 100%;
    height: 3rem;
}

h1{
    font-size: 2rem;

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    background-image: linear-gradient(to bottom, rgb(132, 59, 181), rgba(253, 29, 29, 1), rgba(252, 176, 69, 1));
    background-clip: text;
    color: black;
}

ul {
    gap: 5rem;
}

ul li {
    list-style: none;
    cursor: pointer;
}

li:nth-child(4) {
    height: 1.8rem;
    width: 8rem;
    border-radius: 5px;

    text-align: center;
    color: white;
    background: linear-gradient(90deg, hsl(276, 51%, 47%) 0%, rgba(253, 29, 29, 1) 65%, rgba(252, 176, 69, 1) 100%);
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
</style>
