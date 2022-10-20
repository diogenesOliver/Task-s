/* if(element.difficulty >= 7){
            console.log('Alto')
        }else if(element.difficulty < 7 && element.difficulty > 4){
            console.log('Medio')
        }else{
            console.log('Baixo')
        }
*/

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

                <p id='difficultyId'>Dificuldade: ${element.difficulty}</p>

            </div>

            <button id=${element._id}> Concluído </button>

        </div>

        `

        document.querySelector('.tasks-style-card').innerHTML += createCardTask

    });

    data.forEach(element => {

        const doneButton = document.getElementById(element._id)

        doneButton.addEventListener('click', () => {
            console.log(element)
        })

    })

}

creatingCardsOnScreen()