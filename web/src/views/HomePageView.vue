<template>
    <div class="main">
        <NavbarComponent/>

        <div class="main-div">
            <div class="informations">
                <h1>Create, share and <br> control all your tasks</h1>
                <p>Take control of all your tasks and <br>
                    improve your day-to-day performance with better organization
                </p>
                <router-link to="/sign-in" class="link">
                    <button class="get-started-button">
                        Get started
                        <img src="../assets/seta-para-a-direita.png">
                    </button>
                </router-link>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
    import NavbarComponent from '../components/NavbarComponent.vue';
    
    export default{
        name: 'Home',
        components: {
            NavbarComponent
        }
    }
</script>

<style>
.main {
    height: 100vh;
    width: 75rem;
}

.main-div {
    width: 100%;
    margin-top: 15rem;

    text-align: center;
}

.get-started-button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    
    height: 2.3rem;
    width: 13rem;

    color: white;
    background: #8257E5;

    padding-inline: 3rem;
    border-radius: .3rem;
    border: none;

    text-align: center;
    cursor: pointer;

    transition: .3s;
}

.get-started-button:hover {
    background-color: #5d34bd;
}

.get-started-button img {
    height: 1rem;
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
