import '../styles/main.scss'

const modalLayerEl = document.querySelector('.modal-overlay')
const modalCartEl = document.querySelector('#modal-cart')
const toCartPageBtnEl = document.querySelector('#to-cart-page')
const modalContactsEl = document.querySelector('#modal-contacts')

document.addEventListener('click', function ({ target }) {
    if (target.dataset.id === 'cart-btn' || target.id === 'modal-contacts-btn') {
        modalLayerEl.style.display = 'block'
        if (target.dataset.id === 'cart-btn') {
            modalCartEl.style.display = 'flex'
        }
        else if (target.id === 'modal-contacts-btn') {
            modalContactsEl.style.display = 'block'
        }

        document.addEventListener('click', function ({ target }) {
            if (target.dataset.close || target.classList.contains('modal-overlay')) {
                modalContactsEl.classList.add('animate__fadeOut')
                modalCartEl.classList.add('animate__fadeOut')
                modalLayerEl.classList.add('animate__fadeOut')
                
                setTimeout(() => {
                    modalContactsEl.style.display = ''
                    modalLayerEl.style.display = ''
                    modalCartEl.style.display = ''
                    modalContactsEl.classList.remove('animate__fadeOut')
                    modalCartEl.classList.remove('animate__fadeOut')
                    modalLayerEl.classList.remove('animate__fadeOut')
                }, 700)
            }
        })
    }

})
toCartPageBtnEl.addEventListener('click', () => { window.open('./index2.html') })

