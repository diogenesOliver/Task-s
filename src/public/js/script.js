/* const divElement = document.getElementsByClassName('div-teste')

async function consumindoApi() {

    const response = await fetch('/api/all-tasks')
    const data = await response.json()

    console.log(data)

    data.forEach(element => {

        const createCommunityElement = `
            <hr>

            <h2>${element._id}</h2>
            <h2>${element.title}</h2>
            <h2>${element.difficulty}</h2>

            <hr>

        `

        document.querySelector('.div-teste').innerHTML += createCommunityElement

    });

}

consumindoApi() */