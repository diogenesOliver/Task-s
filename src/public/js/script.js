const divElement = document.getElementsByClassName('div-teste')

async function consumindoApi() {

    const response = await fetch('/api/all-tasks')
    const data = await response.json()

    console.log(data)

    data.forEach(element => {

        const createCommunityElement = `

        <div class="card-task">
            <div class="top-card">
                
            </div>

            <div class="informations">

                <h3>${element.title}</h3>
                <p>${element.description}</p>

                <p>Dificuldade: ${element.difficulty}</p>

            </div>
        </div>

        `

        document.querySelector('.tasks-style-card').innerHTML += createCommunityElement

    });

}

consumindoApi()