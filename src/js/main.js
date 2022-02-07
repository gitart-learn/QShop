import '../styles/main.scss'

const cartBtnEl = document.querySelector('#cartBTN')
const modalLayerEl = document.querySelector('.modal-overlay')
const modalCartEl = document.querySelector('#modalCart')
const toCartPageBtnEl = document.querySelector('#toCartPage')

cartBtnEl.addEventListener('click', function () {
    modalLayerEl.style.display = 'block'
    modalCartEl.style.display = 'flex'

    document.addEventListener('click', function ({ target }) {
        if (target.dataset.close || target.classList.contains('modal-overlay')) {
            modalLayerEl.style.display = ''
            modalCartEl.style.display = ''
        }
    })
    toCartPageBtnEl.addEventListener('click', () => window.open('./index2.html'))
})