async function apiTeste(){

    fetch('/api/all-tasks').then(res => {

        res.json().then(data => {

            console.log(data)

        }).catch(err => { console.log(err) })

    }).catch(e => {
        console.log(e)
    })


}

apiTeste()