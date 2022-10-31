const buttonAdd = document.getElementById('buttonAdd')

function openModal(){
    
    const modalAdd = document.getElementById('modalAdd')

    modalAdd.style.display = 'block'

}

buttonAdd.addEventListener('click', () => {
    openModal()
})