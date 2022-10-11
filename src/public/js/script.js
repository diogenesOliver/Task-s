/* async function apiTeste(){

    fetch('/api/all-tasks').then(res => {

        res.json().then(data => {

            console.log(data)

        }).catch(err => { console.log(err) })

    }).catch(e => {
        console.log(e)
    })


}

apiTeste() */

async function consumindoApi(){

    const response = await fetch('/api/all-tasks')
    const data = await response.json()
    
    console.log(data)

}

consumindoApi()