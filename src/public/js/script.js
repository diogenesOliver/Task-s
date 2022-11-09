const urlAPI = '/api/all-tasks'

async function creatingCards(){

    const response = await fetch(urlAPI)
    const data = await response.json()

    data.forEach(element => {

        const createCardTask = `

        <div class="card-task">
            <div class="top-card" id=${element.createdAt}>
                
            </div>

            <div class="informations" id=${element.updatedAt}>

                <h3 class="title-cards">${element.title}</h3>
                <p class="desc-cards">${element.description}</p>

                <p class="level-cards" id='difficultyId'>Dificuldade: ${element.difficulty}</p>

            </div>

            <button id=${element._id}> Concluir </button>

        </div>

        `

        document.querySelector('.tasks-style-card').innerHTML += createCardTask

    });

}

async function getById(){

    const response = await fetch(urlAPI)
    const data = await response.json()

    data.forEach(element => {

        const doneButton = document.getElementById(element._id)
        const topCardAnimation = document.getElementById(element.createdAt)

        doneButton.addEventListener('click', () => {
            topCardAnimation.classList.add('task-completed')
            doneButton.classList.add('task-completed')
        })

    })

}

creatingCards()
getById()