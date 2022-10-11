const divElement = document.getElementsByClassName('div-teste')

async function consumindoApi() {

    const response = await fetch('/api/all-tasks')
    const data = await response.json()

    console.log(data)

    data.forEach(element => {

        const createCommunityElement = `
        
            <p>${element._id}</p>
            <p>${element.title}</p>
            <p>${element.difficulty}</p>

        `

        document.querySelector('.div-teste').innerHTML += createCommunityElement

    });

}

consumindoApi()