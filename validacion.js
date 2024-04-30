//Haz tú validación en javascript acá
function validarDatos(){
    window.event.preventDefault();

    if(document.form.nombre.value == "") {
        alert("Campo nombre obligatorio");
        document.form.nombre.focus();
    }else if (document.form.email.value == "") {
        alert("Campo E-mail obligatorio");
        document.form.email.focus();
    } else if (document.form.asunto.value == "") {
        alert("Campo asunto obligatorio");
        document.form.asunto.focus();
    } else if (document.form.email.value.indexOf("@") == -1 || document.form.email.value.indexOf(".") == -1) {
       alert("email es invalido");
       document.form.email.focus();
    } else if (document.form.mensaje.value == "" || document.form.mensaje.length <=50) {
        alert("campo mensaje obligatorio y debe tener maximo 50 caracteres");
        document.form.mensaje.focus();
    }
}

document.querySelector("form").addEventListener("submit", validarDatos);