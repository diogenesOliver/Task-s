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
                    <ButtonComponent :lable="lable" :src="imageURL"/>
                </router-link>
            </div>
        </div>

    </div>
</template>

<script lang="ts">
    import NavbarComponent from '../components/NavbarComponent.vue';
    import ButtonComponent from '../components/ButtonComponent.vue';
    
    import { computed } from 'vue';

    export default{
        name: 'Home',
        data(){
            return {
                lable: 'Get Started',
                imageURL: computed(
                    () => new URL('../assets/seta-para-a-direita.png', import.meta.url).href
                )
            }
        },
        components: {
            NavbarComponent,
            ButtonComponent
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
