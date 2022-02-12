const modalLayerEl = document.querySelector('.modal-overlay')
const modalCartEl = document.querySelector('#modal-cart')
const toCartPageBtnEl = document.querySelector('#to-cart-page')
const modalContactsEl = document.querySelector('#modal-contacts')

document.addEventListener('click', function ({ target }) {
    if (target.dataset.id === 'cart-btn' || target.id === 'modal-contacts-btn') {
        modalLayerEl.style.display = 'block'

        if (target.dataset.id === 'cart-btn') {
            toCartPageBtnEl.addEventListener('click', () => { window.open('./index2.html') })

            modalCartEl.style.display = 'flex'

            document.addEventListener('click', function ({ target }) {
                if (target.dataset.close || target.classList.contains('modal-overlay')) {
                    modalCartEl.classList.add('animate__fadeOut')
                    modalLayerEl.classList.add('animate__fadeOut')

                    setTimeout(() => {
                        modalLayerEl.style.display = ''
                        modalCartEl.style.display = ''
                        modalCartEl.classList.remove('animate__fadeOut')
                        modalLayerEl.classList.remove('animate__fadeOut')
                    }, 700)
                }
            })
        }

        else if (target.id === 'modal-contacts-btn') {
            modalContactsEl.style.display = 'block'

            document.addEventListener('click', function ({ target }) {
                if (target.dataset.close || target.classList.contains('modal-overlay')) {
                    modalLayerEl.style.display = ''
                    modalContactsEl.style.display = ''
                }
            })
        }
    }
})