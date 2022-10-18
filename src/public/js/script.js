async function creatingCardsOnScreen() {

    const response = await fetch('/api/all-tasks')
    const data = await response.json()

    data.forEach(element => {

        if(element.difficulty >= 7){
            console.log('Alto')
        }else if(element.difficulty < 7 && element.difficulty > 4){
            console.log('Medio')
        }else{
            console.log('Baixo')
        }

        const createCardTask = `

        <div class="card-task">
            <div class="top-card">
                
            </div>

            <div class="informations">

                <h3>${element.title}</h3>
                <p>${element.description}</p>

                <p id='difficultyId'>Dificuldade: ${element.difficulty}</p>

            </div>

            <button id="doneButton"> Concluído </button>

        </div>

        `

        document.querySelector('.tasks-style-card').innerHTML += createCardTask

    });

}

creatingCardsOnScreen()