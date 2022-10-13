const divElement = document.getElementsByClassName('div-teste')

async function consumindoApi() {

    const response = await fetch('/api/all-tasks')
    const data = await response.json()

    console.log(data)

    data.forEach(element => {

        const createCommunityElement = `
            
            <div class="card-task">
                <p>${element._id}</p>
                <p>${element.title}</p>
                <p>${element.difficulty}</p>
            </div>
           

        `

        document.querySelector('.tasks-style-card').innerHTML += createCommunityElement

    });

}

consumindoApi()