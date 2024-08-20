document.getElementById('contactForm').addEventListener('submit', function(event) {
    let valid = true;

    // Crear variables de error vacías
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('subjectError').textContent = '';
    document.getElementById('messageError').textContent = '';

    // Validar nombre
    const name = document.getElementById('name').value;
    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'El nombre no puede estar vacío';
        valid = false;
    }

    // Validar email
    const email = document.getElementById('email').value;
    if (email.trim() === '') {
        document.getElementById('emailError').textContent = 'El email no puede estar vacío';
        valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Escriba un correo válido';
        valid = false;
    }

    // Validar mensaje
    const message = document.getElementById('message').value;
    if (message.trim() === '') {
        document.getElementById('messageError').textContent = 'Debe escribir un mensaje de contacto';
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
    }
});