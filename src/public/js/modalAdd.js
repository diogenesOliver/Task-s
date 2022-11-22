const buttonAdd = document.getElementById('buttonAdd')
const buttonCloseModal = document.getElementById('closeModal')
const cancelButton = document.getElementById('cancelButton')

const modalAdd = document.getElementById('modalAdd')
const modalWrapper = document.getElementById('modalWrapper')

function openModal() {
    modalAdd.style.display = 'block'
}

function closeModal() {
    modalAdd.style.display = 'none'
}

function darkenScreenByOpenModal(darkScreen){
    darkScreen.classList.add('modal-wrapper')
}

function removingDarkTheScreenByCloseModal(removeDarkScreen){
    removeDarkScreen.classList.remove('modal-wrapper')
}

buttonCloseModal.addEventListener('click', () => {
    closeModal()
    removingDarkTheScreenByCloseModal(modalWrapper)
})

cancelButton.addEventListener('click', () => {
    closeModal()
    removingDarkTheScreenByCloseModal(modalWrapper)
})

buttonAdd.addEventListener('click', () => {
    openModal()
    darkenScreenByOpenModal(modalWrapper)
})