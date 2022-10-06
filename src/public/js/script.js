async function apiTeste(){

    fetch('/api/all-tasks')
        .then(res => {

            console.log(res)

        }).catch(err => {
            console.log(err)
        })

}

apiTeste()