function validar(){
    var email = document.getElementById('email').value.trim().length;
    var passwd = document.getElementById('password').value.trim().length;
    var mail = document.getElementById('email').value.trim();
    var arroba = mail.indexOf('@');
    var punto = mail.indexOf('.');
    if (email == 0){
        alert("Debe introducir un correo");
        document.getElementById('email').focus();
        return false;
    }
    if (arroba == -1 || punto == -1 || punto < arroba) {
        alert("Escriba un correo válido");
        document.getElementById('email').focus();
        return false;
    }
    if (passwd < 5){
        alert("La contraseña debe tener mínimo 5 caracteres");
        document.getElementById('password').focus();
        return false;
    }
    return true;
}