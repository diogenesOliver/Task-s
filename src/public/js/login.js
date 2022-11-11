const buttonLogin = document.getElementById('buttonLogin')

const userName = document.getElementById('userName')
const userAge = document.getElementById('userAge')
const userEmail = document.getElementById('userEmail')
const userPassword = document.getElementById('userPassword')

const apiURL = '/api/auth'

async function createANewUser() {

    const response = await fetch(apiURL, { method: 'POST' })
    const data = await response.json()

    console.log(data)

}

buttonLogin.addEventListener('click', () => {

    createANewUser()

})