const urlAPIByCompletedTasks = '/api/task-completed'
const urlAPIByUncompletedTasks = '/api/task-uncompleted'
const urlAPIByAllTasks = '/api/all-tasks'

async function gettingTasksCompleted(){

    const res = await fetch(urlAPIByUncompletedTasks)
    const data = await res.json()

    console.log(data)

}

gettingTasksCompleted()