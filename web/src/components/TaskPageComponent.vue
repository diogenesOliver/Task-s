<template>
    <div class="wrapper">
        <div class="nav-div">
            <div class="infoir">
                <h1>Welcome to the Task-s, {{ userInfo.name }}!</h1>
            </div>
            <button class="new-task" @click.prevent="openModal()">New Task</button>
        </div>

        <div class="modal-wrapper" id="modalWrapper">
            <div class="modal" id="modal">
                <div class="icon-close-modal">

                    <h3>New Task</h3>

                    <svg @click.prevent="closeModal()" width="40" height="40" viewBox="0 0 40 40" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 10L10 30M10 10L30 30" stroke="grey" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>

                <div class="task-input">
                    <form>
                        <div class="form-control">
                            <label for="title">Title</label>
                            <input name="title" type="text" class="form-input" id="taskTitle" placeholder="Title"
                                v-model="tasksInfo.title">
                        </div>

                        <div class="form-control">
                            <label for="desc">Description</label>
                            <input name="desc" type="text" class="form-input" id="taskDescription" placeholder="Description"
                                v-model="tasksInfo.description">
                        </div>

                        <div class="forms">
                            <div class="form-control">
                                <label for="diff">Difficulty</label>
                                <input name="diff" type="number" class="form-input" id="taskDifficulty"
                                    placeholder="Difficulty" v-model="tasksInfo.difficulty">
                            </div>

                            <div class="form-control">
                                <label for="something">Something</label>
                                <input name="something" type="email" class="form-input" placeholder="Difficulty">
                            </div>

                        </div>
                    </form>
                </div>

                <div class="buttons">
                    <button class="create-task" @click="createTask()">Create</button>
                    <button class="cancel-task" @click="closeModal()">Cancel</button>
                </div>
            </div>
        </div>

        <div class="msg-from-0-tasks" id="taskCounter">
            <h1>You don't have any tasks created. <br> Create a new task and view it on this screen</h1>
        </div>

        <div class="tasks-card">
            <p>{{ userInfo.Task }}</p>
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
            },
            tasksInfo: {
                title: "",
                description: "",
                difficulty: "",
                authorId: parseInt(this.$route.params.id as string)
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
        },
        async createTask() {
            try {
                await axios.post('http://localhost:8080/api/create/task', this.tasksInfo).then(res => {
                    console.log(res.data)
                })
            } catch (e) {
                const taskTitle = document.getElementById('taskTitle') as HTMLElement
                const taskDescription = document.getElementById('taskDescription') as HTMLElement
                const taskDifficulty = document.getElementById('taskDifficulty') as HTMLElement

                const inputs: HTMLElement[] = [taskTitle, taskDescription, taskDifficulty]
                for (let input of inputs) {
                    input.style.borderColor = '#930000'
                }
            }
        },
        async openModal() {
            const modalDiv = document.getElementById('modalWrapper') as HTMLElement
            const modal = document.getElementById('modal') as HTMLElement

            modalDiv.style.display = 'flex'
            modal.style.display = 'flex'
        },
        async closeModal() {
            const modalDiv = document.getElementById('modalWrapper') as HTMLElement
            const modal = document.getElementById('modal') as HTMLElement

            modalDiv.style.display = 'none'
            modal.style.display = 'none'
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

.new-task,
.create-task,
.cancel-task {
    height: 2.3rem;
    width: 8rem;


    text-align: center;
    color: white;
    background: linear-gradient(90deg, hsl(276, 51%, 47%) 0%, rgba(253, 29, 29, 1) 65%, rgba(252, 176, 69, 1) 100%);

    border-radius: .3rem;
    border: none;

    cursor: pointer;
}

.msg-from-0-tasks {
    text-align: center;
    margin-top: 20rem;

    color: #80808096;
}

.modal {
    display: none;
    flex-direction: column;
    align-items: center;

    gap: 3rem;
    padding: 1rem;

    background-color: #181818;

    border-radius: .2rem;
    padding-inline: 2rem;

    width: 35rem;
    height: 34rem;

    margin-inline: auto;
    margin-top: 10%;

    animation: modal-animation .3s;
}

.modal-wrapper {
    background: rgba(0, 0, 0, .5);
    display: none;

    position: fixed;

    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    z-index: 100;
}

@keyframes modal-animation {
    0% {
        opacity: 0;
        transform: scale(.2);
    }

    100% {
        opacity: 1;
        transform: scale(1);
    }
}

.icon-close-modal,
.task-input,
.buttons {
    width: 100%;
}

input[type=number]::-webkit-inner-spin-button {
    -webkit-appearance: none;

}

input[type=number] {
    -moz-appearance: textfield;
    appearance: textfield;

}

.task-input form {
    display: flex;
    flex-direction: column;

    gap: 2rem;
}

.icon-close-modal {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    align-items: center;
}

svg {
    cursor: pointer;
    height: 2.3rem;
}

.form-control label {
    position: absolute;
}

.cancel-task {
    color: #ebebeb6c;
}

.cancel-task,
.form-control input {
    border-color: #ebebeb6c;
}

.form-control input {
    margin-top: 1.8rem;
}

.task-inpput {
    height: 85%;
}

.forms {
    display: flex;
    flex-direction: row;

    gap: 2rem;
}

.buttons {
    display: flex;
    flex-direction: row-reverse;

    gap: 2rem;
}

.cancel-task,
.create-task {
    width: 10rem;
}

.cancel-task {
    background: transparent;
    border: 1px solid grey;
}
</style>