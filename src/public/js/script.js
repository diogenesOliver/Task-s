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

    data.forEach(element => {
        
        console.log(`Temos esse ID ${element._id} que correspondea esse titulo ${element.title}`)

    });

}

consumindoApi()