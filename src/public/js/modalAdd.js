const buttonAdd = document.getElementById('buttonAdd')

const buttonCloseModal = document.getElementById('closeModal')
const cancelButton = document.getElementById('cancelButton')

const modalAdd = document.getElementById('modalAdd')

function openModal() {

    modalAdd.style.display = 'block'

}

function closeModal() {
    modalAdd.style.display = 'none'
}

buttonCloseModal.addEventListener('click', () => {
    closeModal()
})

cancelButton.addEventListener('click', () => {
    closeModal()
})

buttonAdd.addEventListener('click', () => {
    openModal()
})