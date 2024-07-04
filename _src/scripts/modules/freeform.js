export default function freeform() {

    const form = document.querySelector('form')

    if (form) {

        // Handle Form error message
        form.addEventListener('freeform-render-form-errors', function (event) {
            event.preventDefault()
            
            const formTitle = form.querySelector('[data-form-title]')
            console.log('formTitle', formTitle)

            var success = document.createElement('div')
            success.classList.add('freeform-form-has-errors')
            success.appendChild(document.createTextNode(form.getAttribute('data-error-message')))

            formTitle.appendChild(success)
        })

        form.addEventListener('freeform-render-success', function (event) {
            event.preventDefault()
            
            const formTitle = form.querySelector('[data-form-title]')
            console.log('formTitle', formTitle)

            var success = document.createElement('div')
            success.classList.add('freeform-form-has-success')
            success.appendChild(document.createTextNode(form.getAttribute('data-success-message')))

            formTitle.appendChild(success)
        })

        // Remove messages
        form.addEventListener('freeform-remove-messages', function () {
            event.preventDefault()
        
            form.querySelectorAll('.freeform-form-has-errors').forEach(function (element) { element.remove() })
        });
    }

}