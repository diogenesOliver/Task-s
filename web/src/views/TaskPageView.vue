 <template>
  <div class="wrapper">
      <div class="nav-div">

          <div class="infoir">
              <h3>Welcome, {{ userInfo.name }}!</h3>
              <h1> You have {{ tasksDetails.taskLength }} pending tasks!</h1>
          </div>
          <button class="new-task" @click.prevent="openModal()">
              <img src="../assets/mais.png">
              <p>New Task</p>
          </button>

      </div>

      <div class="modal-wrapper" id="modalWrapper">
          <div class="modal" id="modal">
              <div class="icon-close-modal">

                  <h3>New Task</h3>

                  <svg @click.prevent="closeModal()" width="40" height="40" viewBox="0 0 40 40" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M30 10L10 30M10 10L30 30" stroke="white" stroke-width="2" stroke-linecap="round"
                          stroke-linejoin="round" />
                  </svg>
              </div>

              <div class="task-input">
                  <form>
                      <div class="form-control">
                          <label for="title">Title</label>
                          <input name="title" type="text" class="form-input" id="taskTitle" placeholder="Enter a title..."
                              v-model="tasksInfo.title">
                      </div>

                      <div class="form-control">
                          <label for="desc">Description</label>
                          <input name="desc" type="text" class="form-input" id="taskDescription"
                              placeholder="Enter a description..." v-model="tasksInfo.description">
                      </div>

                      <div class="forms">
                          <div class="form-control">
                              <label for="diff">Difficulty</label>
                              <input name="diff" type="number" class="form-input" id="taskDifficulty"
                                  placeholder="Add difficulty..." v-model="tasksInfo.difficulty">
                          </div>

                          <div class="form-control">
                              <label for="something">Ends Date</label>
                              <input type="date" class="form-input form-date" id="inputDate"
                                  v-model="tasksInfo.endsDate" />
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
          <div class="message">
              <img src="../assets/chart-simple-horizontal.png" alt="">
              <h2>No task created</h2>
              <p>You don´t have any task created yet. Start by creating one</p>

              <button class="new-task button-msg-from-0-task" @click.prevent="openModal()">
                  <img src="../assets/mais.png">
                  New Task
              </button>
          </div>
      </div>

      <div class="tasks-card">
          <div v-for="task in userInfo.Task" class="cards">
              <div class="top-card">
                  <div class="title-logo">
                      <h3>Task-s</h3>
                      <small id="difficultyLevel"> Level: {{ task.difficulty }}</small>
                  </div>
                  <button>
                      <img src="../assets/icon_configuration.png">
                  </button>
              </div>

              <div class="body_of_card">
                  <h3>{{ task.title }}</h3>
                  <p>{{ task.description }}</p>
              </div>

              <div class="complements_informations">
                  <small>Created at {{ task.createdAt.split('T')[0] }}</small>
                  <small id="showStatus">Pending</small>
              </div>

              <div class="buttons-from-actions">
                  <button @click="deleteTask(task.id)">Finish task</button>
                  <button>
                      <img src="../assets/editar.png" alt=""> Edit
                  </button>
              </div>

          </div>
      </div>

  </div>
</template>

<script lang="ts">
import axios from 'axios'

import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

export default {
  name: "Tasks",
  data() {
      return {
          userInfo: {
              name: "",
              email: "",
              password: "",
              confirm_password: "",
              Task: [
                  {
                      id: "",
                      title: "",
                      description: "",
                      difficulty: "",
                      status: "",
                      createdAt: ""
                  }
              ],
          },
          tasksInfo: {
              title: "",
              description: "",
              difficulty: "",
              endsDate: "",
              authorId: parseInt(this.$route.params.id as string),
          },
          tasksDetails: {
              taskLength: 0
          }
      }
  },
  methods: {
      async gettingUserData(userId: string) {
          await axios.get(`http://localhost:8080/api/all/users/${userId}`).then(res => {

              for (let data of res.data.Task) {
                  const initialDate: Date | string | number = new Date(data.createdAt)
              }

              this.userInfo = res.data
              this.userInfo.name = res.data.name.split(" ")[0]

              if (this.userInfo.Task.length > 0) {
                  var taskCounter = document.getElementById('taskCounter') as HTMLElement
                  taskCounter.style.display = 'none'

                  return this.tasksDetails.taskLength = this.userInfo.Task.length
              }
          })
      },
      async createTask() {
          try {
              await axios.post('http://localhost:8080/api/create/task', this.tasksInfo).then(res => {
                  const second = 1000;
                  const minute = second * 60;
                  const hour = minute * 60;
                  const day = hour * 24;

                  function countDays() {
                      let date_ini = new Date(res.data.createdAt);
                      let date_end = new Date(res.data.endsDate);

                      return res.data.endsDate = Math.floor(
                          (date_end.getTime() - date_ini.getTime()) / day
                      );
                  }

                  countDays()
              })
              toast.success('Task created successfully 🎉', {
                  autoClose: 3000,
                  theme: 'dark'
              })

              this.closeModal()
          } catch (e) {
              toast.error('ERROR - Invalid field', {
                  autoClose: 3000,
                  theme: 'dark'
              })

              const taskTitle = document.getElementById('taskTitle') as HTMLElement
              const taskDescription = document.getElementById('taskDescription') as HTMLElement
              const taskDifficulty = document.getElementById('taskDifficulty') as HTMLElement
              const inputDate = document.getElementById('inputDate') as HTMLElement

              const inputs: HTMLElement[] = [taskTitle, taskDescription, taskDifficulty, inputDate]
              for (let input of inputs) {
                  input.style.borderColor = '#930000'
              }
          }
      },
      async deleteTask(taskId: string) {
          axios.delete(`http://localhost:8080/api/delete/task/${taskId}`).then(res => {
              toast.success('Task deleted successfully', {
                  autoClose: 3000,
                  theme: 'dark'
              })
          })
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

  gap: 30rem;

  align-items: center;

  height: 10rem;

  width: 100%;
  margin-top: .5rem;
}

h1 {
  font-size: 1.5rem
}

.new-task,
.create-task,
.cancel-task {
  height: 3rem;
  width: 10rem;

  text-align: center;
  color: white;
  background: #8257E5;

  border-radius: .5rem;
  border: none;

  cursor: pointer;
}

.new-task {
  padding-inline: 2rem;

  display: flex;
  justify-content: space-around;
  align-items: center;

  transition: .3s;
}

.new-task:hover,
.create-task:hover {
  background-color: #5d34bd;
}

.new-task img {
  height: .9rem;
}

.msg-from-0-tasks,
.message {
  display: flex;
  flex-direction: column;

  align-items: center;
}

.msg-from-0-tasks {
  border: 1px solid #ebebeb6c;
  border-style: dashed;
  border-radius: 1rem;

  height: 33rem;
  margin-top: 5rem;
}

.message {
  margin-top: 11rem;
  gap: .7rem;
}

.message h2 {
  color: #a0a0a0;
}

.message p {
  color: #ebebeb6c;
}

.button-msg-from-0-task {
  background-color: transparent;
  border: solid 1px #FFFFFF;

  height: 2.5rem;
}

.button-msg-from-0-task:hover {
  background-color: transparent;
}

.message button img {
  height: .9rem;
}

.msg-from-0-tasks img {
  height: 2.5rem;
}

.modal {
  display: none;
  flex-direction: column;
  align-items: center;

  gap: 3rem;
  padding: 1rem;

  background-color: #181818;

  border-radius: 1rem;
  padding-inline: 2rem;

  width: 35rem;
  height: 33.5rem;

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
  height: 2rem;
}

.form-date {
  width: 18rem;
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
  width: 20rem;

  transition: .3s;
}

.cancel-task {
  background: transparent;
  border: 1px solid grey;
}

.top-card,
.tasks-card,
.buttons-from-actions {
  display: flex;
  flex-direction: row;
}

.title-logo {
  display: flex;
  align-items: center;

  gap: .1rem;
}

.title-logo h3 {
  width: 5rem;
}

.title-logo small {
  padding-inline: .2rem;

  text-align: center;

  background-color: #5d34bdab;
  border: solid 1px #8150f5;

  width: 60%;
  border-radius: 1rem;
}

.tasks-card {
  gap: 2rem;

  margin-top: 3.5rem;
}

.cards {
  gap: 1rem;
  padding: .3rem;

  height: 21rem;
  width: 18rem;

  background-color: #252525;
  border-radius: .5rem;
}

.top-card {
  justify-content: space-around;
  align-items: center;

  gap: 5rem;
}

.top-card h3 {
  color: #8454f3;
}

.top-card button {
  background-color: transparent;

}

.top-card button,
.top-card button img {
  height: 1.3rem;
  width: 1.3rem;

  border: none;
  cursor: pointer;
}

.body_of_card {
  display: flex;
  flex-direction: column;

  padding-inline: .5rem;

  gap: 1rem;

  height: 10rem;

  margin-bottom: .5rem;
  margin-top: 2rem;
}

.body_of_card h3 {
  font-size: 1.5rem;
}

.body_of_card p {
  margin-top: 1.5 rem;
}

.complements_informations {
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 1.5rem;
}

.complements_informations small {
  margin-left: .5rem;
  color: #a0a0a0;
}

/* .complements_informations small:nth-child(2){
  background-color: rgba(1, 158, 1, 0.486);
  
  border: solid 1px rgb(2, 182, 2);
  border-radius: 1rem;
  
  color: white;

  padding-inline:.5rem;
} */

.complements_informations small:nth-child(2) {
  background-color: rgba(255, 255, 0, 0.562);

  border: solid 1px yellow;
  border-radius: 1rem;

  color: white;

  padding-inline: .5rem;
}

.buttons-from-actions {
  margin-top: 1.2rem;
  justify-content: space-around;

  margin-top: 2rem;

  gap: 6rem;
}

.buttons-from-actions button {
  cursor: pointer;
}

.buttons-from-actions button:nth-child(1) {
  background-color: #8257E5;
  color: white;

  border: none;
  border-radius: 2rem;

  transition: .3s;

  width: 10rem;
  height: 2.3rem;
}

.buttons-from-actions button:nth-child(1):hover {
  background-color: #5d34bd;
}

.buttons-from-actions button:nth-child(2) {
  display: flex;
  align-items: center;

  gap: .5rem;

  color: #a0a0a0;

  background-color: transparent;
  border: none;
}

.buttons-from-actions button img {
  height: 1.5rem;
}

@media (max-width: 1100px) {
  .wrapper {
      width: 22rem;
      ;
  }

  .nav-div {
      gap: 10rem;
      padding-inline: 1rem;
  }

  .infoir {
      text-align: center;
  }

  .msg-from-0-tasks {
      margin-top: 3.5rem;
  }

  .message {
      text-align: center;
      gap: 1rem;

      margin-top: 9rem;
  }

  .nav-div .new-task {
      position: absolute;
      border-radius: 50%;

      width: 4rem;
      height: 4rem;

      margin-top: 85rem;
      margin-left: 18rem;
  }

  .nav-div .new-task p {
      display: none;
  }

  .nav-div .new-task img {
      height: 1rem;
  }

  .modal {
      width: 25rem;
      margin-top: 10rem;
  }

  .form-date {
      width: 10rem;
  }
}
</style>