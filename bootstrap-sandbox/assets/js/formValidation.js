const form = document.querySelector('.need-validation')

form.addEventListener('submit', (e) => {
    (!form.checkValidity()) && e.preventDefault()
    form.classList.add('was-validated')
})