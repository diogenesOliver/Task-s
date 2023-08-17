<template>
    <div class="wrapper">
        <div class="nav-div">
            <div class="infoir">
                <h1>These are your Task-s! {{ userInfo.name }}</h1>
            </div>
            <button class="new-task">New Task</button>
        </div>

        <div class="msg-from-0-tasks" id="taskCounter">
            <h1>You don't have any tasks created. <br> Create a new task and view it on this screen</h1>
        </div>

    </div>
</template>

<script lang="ts">
import axios from 'axios'

export default {
    name: "Tasks",
    data() {
        return {
            userInfo: {
                name: "",
                email: "",
                password: "",
                confirm_password: "",
                Task: [],
            }
        }
    },
    methods: {
        async gettingUserData(userId: string) {
            await axios.get(`http://localhost:8080/api/all/users/${userId}`).then(res => {
                this.userInfo = res.data
                this.userInfo.name = res.data.name.split(" ")[0]

                if (this.userInfo.Task.length > 0) {
                    var taskCounter = document.getElementById('taskCounter') as HTMLElement
                    taskCounter.style.display = 'none'
                }
            })
        }
    },
    mounted() {
        this.gettingUserData(this.$route.params.id as string)
    }
}
</script>

<style>
.wrapper {
    width: 70rem;
    height: 95vh;
}

.nav-div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    align-items: center;

    width: 100%;
    margin-top: .5rem;
}

h1 {
    font-size: 1.5rem
}

.new-task {
    height: 2.3rem;
    width: 8rem;


    text-align: center;
    color: white;
    background: linear-gradient(90deg, hsl(276, 51%, 47%) 0%, rgba(253, 29, 29, 1) 65%, rgba(252, 176, 69, 1) 100%);

    border-radius: .5rem;
    border: none;

    cursor: pointer;
}

.msg-from-0-tasks {
    text-align: center;
    margin-top: 20rem;

    color: rgba(128, 128, 128, 0.589);
}
</style>