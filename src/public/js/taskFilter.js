const urlAPIByCompletedTasks = '/api/task-completed'
const urlAPIByUncompletedTasks = '/api/task-uncompleted'
const urlAPIByAllTasks = '/api/all-tasks'

const buttonFilter = document.getElementById('buttonFilter')

const allTaks = document.getElementById('allTasks')
const taskConcluded = document.getElementById('taskConcluded')
const unconcludedTask = document.getElementById('unconcludedTask')

buttonFilter.addEventListener('click', () => {

    console.log(allTaks.value)
    console.log(taskConcluded.value)
    console.log(unconcludedTask.value)

})

/* async function gettingTasksCompleted(){

    const res = await fetch(urlAPIByUncompletedTasks)
    const data = await res.json()

    console.log(data)

}

gettingTasksCompleted() */