const urlAPIByCompletedTasks = '/api/task-completed'
const urlAPIByUncompletedTasks = '/api/task-uncompleted'
const urlAPIByAllTasks = '/api/all-tasks'

const buttonFilter = document.getElementById('buttonFilter')

function dropdownFunction(p) {

    let elementInput = document.getElementsByClassName('dropDown')[0]
    let stylingAttributes = ['block', 'none']

    elementInput.style.display = stylingAttributes[p]

    let dropDownTransition = ['0px', '0px, -10px']

    setTimeout(() => {
        elementInput.style.transform = `translate(${dropDownTransition[p]})`
    }, 0)

}

function filteringTask(p) {

    let gettingValueOfItem = document.getElementById('item-' + p).innerHTML

    document.getElementsByTagName('input')[0].value = gettingValueOfItem

}