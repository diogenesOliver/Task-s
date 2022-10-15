async function creatingCardsOnScreen() {

    const response = await fetch('/api/all-tasks')
    const data = await response.json()

    data.forEach(element => {

        const createCardTask = `

        <div class="card-task">
            <div class="top-card">
                
            </div>

            <div class="informations">

                <h3>${element.title}</h3>
                <p>${element.description}</p>

                <p>Dificuldade: ${element.difficulty}</p>

            </div>

            <button id="doneButton"> Concluído </button>

        </div>

        `

        document.querySelector('.tasks-style-card').innerHTML += createCardTask

    });

}

creatingCardsOnScreen()