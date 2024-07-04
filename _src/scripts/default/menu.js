export default function menu() {
    const hamburger = document.querySelector('[data-hamburger]')
    const menu = document.querySelector('[data-menu]')

    if (hamburger) {
        
        hamburger.addEventListener('click', () => {
            if (hamburger.getAttribute('data-hamburger') === 'closed') {
                hamburger.setAttribute('data-hamburger', 'open')
                menu.setAttribute('data-menu', 'open')
            } else {
                hamburger.setAttribute('data-hamburger', 'closed')
                menu.setAttribute('data-menu', 'closed')
            }
        })
    }
}