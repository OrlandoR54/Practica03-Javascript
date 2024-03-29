//Declaracion de variables como booleno
var ide = false;
var name = false;
var lastname = false;
var phone = false;
var address = false;
var fecha = false;
var email = false;
var clave = false;

//Funcion para validar que los campos esten llenos
function validar() {
    var boolean = true;
    fecha = false;
    address = false;
    for (let i = 0; i < document.forms[0].elements.length; i++) {
        var elemento = document.forms[0].elements[i];
        if (elemento.value == "" && elemento.type == "text") {
            if (elemento.id == "cedula") {
                document.getElementById("mensajeCedula").innerHTML =
                    "<br>La cedula esta vacia";
            }
            if (elemento.id == "nombre") {
                document.getElementById("mensajeNombre").innerHTML =
                    "<br>El nombre esta vacia";
            }
            if (elemento.id == "apellido") {
                document.getElementById("mensajeApellido").innerHTML =
                    "<br>El Apellido esta vacia";
            }
            if (elemento.id == "direccion") {
                document.getElementById("mensajeDireccion").innerHTML =
                    "<br>La direccion esta vacia";
            }
            if (elemento.id == "telefono") {
                document.getElementById("mensajeTelefono").innerHTML =
                    "<br>El telefono esta vacia";
            }
            if (elemento.id == "fecha") {
                document.getElementById("mensajeFecha").innerHTML =
                    "<br>La fecha esta vacia";
            }
            if (elemento.id == "email") {
                document.getElementById("mensajeEmail").innerHTML =
                    "<br>El mail esta vacio";
            }
            if (elemento.id == "password") {
                document.getElementById("mensajePassword").innerHTML =
                    "<br>La contraseña esta vacia";
            }

            elemento.style.border = "2px red solid";
            elemento.className = "error";
            boolean = false;
        } else {
            if (elemento.id == "direccion") {
                document.getElementById("mensajeDireccion").innerHTML = "";
                address = true;
            }
            if (elemento.id == "telefono") {
                document.getElementById("mensajeTelefono").innerHTML = "";
                phone = true;
            }
        }
        if (elemento.value == "" && elemento.type == "password") {
            elemento.style.border = "2px red solid";
            elemento.className = "error";
            boolean = false;
        }
    }
    if (!boolean) {
        alert("Falta datos");
        return boolean;
    }
}

//Funcion para validar la cedula
function validarCedula() {
    ide = false;
    let elemento = document.getElementById("cedula");
    let array = [];
    if (elemento.value.length == 10) {
        for (let i = 0; i < elemento.value.length; i++) {
            array[i] = parseInt(elemento.value.charAt(i));
        }
        if (array[2] <= 6 && array[2] >= 0) {
            let comprobar = [2, 1, 2, 1, 2, 1, 2, 1, 2];
            var suma = 0;
            for (i = 0; i < comprobar.length; i++) {
                array[i] *= comprobar[i];
                if (array[i] >= 10) {
                    array[i] -= 9;
                }
                suma += array[i];
            }
            suma += array[i];
            suma %= 10;
            if (suma == 0) {
                ide = true;
                document.getElementById("mensajeCedula").innerHTML = "";
                
                return true;
            } else {
                ide = false;
                
                document.getElementById("mensajeCedula").innerHTML =
                    "<br>Numero de cedula invalida";
            }
        }
    } else {
        ide = false;
        
        document.getElementById("mensajeCedula").innerHTML =
            "<br>Numero de cedula invalida";
    }
    return false;
}

//Valida que solo sea numero en la cedula
function validarNumero(evt) {
    var caracter = evt.which ? evt.which : event.keyCode;
    if (!(caracter >= 48 && caracter <= 57)) {
        alert("Ingrese solo numeros.");
        return false;
    }
    return true;
}

//Valida que se ingrese solo caracteres
function validarTexto(evt) {
    evt = evt ? evt : event;
    var caracter = evt.caracter
        ? evt.charCode
        : evt.keyCode
            ? evt.keyCode
            : evt.which
                ? evt.which
                : 0;
    if (
        caracter > 32 &&
        (caracter < 65 || caracter > 90) &&
        (caracter < 97 || caracter > 122)
    ) {
        alert("Ingrese solo caracteres alfabeticos.");
        return false;
    }
    return true;
}

//Valida que se ingrese al menos un nombre
function validarNombre() {
    name = false;
    var elemento = document.getElementById("nombre");
    if (elemento.value.length > 2) {
        name = true;
        document.getElementById("mensajeNombre").innerHTML = "";
        
        return true;
    } else {
        
        document.getElementById("mensajeNombre").innerHTML =
            "<br>Ingrese nombre valido";
    }
    return false;
}

//Valida que se ingrese al menos un apellido
function validarApellido() {
    lastname = false;
    var elemento = document.getElementById("apellido");
    if (elemento.value.length > 2) {
        lastname = true;
        document.getElementById("mensajeApellido").innerHTML = "";
        
        return true;
    } else {
        
        document.getElementById("mensajeApellido").innerHTML =
            "<br>Ingrese apellido valido";
    }
    return false;
}

function checkDate(evt) {
    var charCode = evt.which ? evt.which : event.keyCode;
    if (!(charCode >= 47 && charCode <= 57)) {
        alert("Ingrese solo numeros.");
        return false;
    }
}

function validarFecha() {
    fecha = false;
    var elemento = document.getElementById("fecha");
    var fecha = elemento.value.split("/");
    if (elemento.value.length != 10) {
        document.getElementById("mensajeFecha").innerHTML =
            "<br>Ingrese fecha valida: 04/11/1990";
        return false;
    } else {
        document.getElementById("mensajeFecha").innerHTML = "";
    }
    try {
        if (fecha.length == 3 && fecha[2].length == 4) {
            var dia = fecha[0];
            var mes = fecha[1];
            var year = fecha[2];
            var dmax;
            if (year < 1000 || year > new Date().getFullYear()) {
                alert("error año");
                if (year > new Date().getFullYear())
                    document.getElementById("mensajeFecha").innerHTML =
                        "<br>El año no debe ser mayor al actual";
                return false;
            }
            if (dia.length == 2 && mes.length == 2 && year.length == 4) {
                switch (parseInt(mes)) {
                    case 1:
                        dmax = 31;
                        break;
                    case 2:
                        if (year % 4 == 0) dmax = 29;
                        else dmax = 28;
                        break;
                    case 3:
                        dmax = 31;
                        break;
                    case 4:
                        dmax = 30;
                        break;
                    case 5:
                        dmax = 31;
                        break;
                    case 6:
                        dmax = 30;
                        break;
                    case 7:
                        dmax = 31;
                        break;
                    case 8:
                        dmax = 31;
                        break;
                    case 9:
                        dmax = 30;
                        break;
                    case 10:
                        dmax = 31;
                        break;
                    case 11:
                        dmax = 30;
                        break;
                    case 12:
                        dmax = 31;
                        break;
                    default:
                        alert("error mes");
                        document.getElementById("mensajeFecha").innerHTML =
                            "<br>El mes ingresado no existe";
                        return false;
                }
                if (dia < 1 || dia > dmax) {
                    alert("error dia");
                    document.getElementById("mensajeFecha").innerHTML =
                        "<br>El dia ingresado no existe";
                    return false;
                }
            } else {
                alert("Error fechas");
                estado = false;
            }
        }
        if (
            (fecha.length != 3 || fecha[2].length < 4) && elemento.value.length == 10) {
            alert("Error fecha");
            document.getElementById("mensajeFecha").innerHTML =
                "<br>Ingrese fecha valida: 04/11/1990";
            return false;
        }
    } catch (err) {
        alert("Error fechas");
        return false;
    }
    fecha = true;
    
    return true;
}

//Valida que el corre tenga su dominio
function validarCorreo() {
    email = false;
    var elemento = document.getElementById("email");
    var correo = elemento.value.split("@");
    if (correo.length == 2) {
        if (correo[0].length < 3) {
            document.getElementById("mensajeEmail").innerHTML =
                "<br>Direccion no valido @ups.edu.ec <br>Direccion no valido @est.ups.edu.ec";
            return false;
        }
        if (correo[1].localeCompare("est.ups.edu.ec") == "0" || correo[1].localeCompare("ups.edu.ec") == "0") {
            document.getElementById("mensajeEmail").innerHTML = "";
        } else {
            document.getElementById("mensajeEmail").innerHTML =
                "<br>@ups.edu.ec <br> @est.ups.edu.ec";
            return false;
        }
    } else {
        document.getElementById("mensajeEmail").innerHTML =
            "<br>Direccion no valido @ups.edu.ec <br>Direccion no valido @est.ups.edu.ec";
        return false;
    }
    email = true;
    
    return true;
}

//Valida que la clave cumpla las especificaciones
function validarPassword() {
    clave = false;
    var elemento = document.getElementById("password");
    if (elemento.value.length >= 8) {
        document.getElementById("mensajePassword").innerHTML = "";
        let booChar = false;
        let booMayus = false;
        let booMinus = false;
        for (var i = 0; i < elemento.value.length; i++) {
            var codigo = elemento.value.charCodeAt(i);
            if ((codigo == 95 || codigo == 64 || codigo == 36) && !booChar)
                booChar = true;
            else if (codigo > 64 && codigo < 91 && !booMayus) booMayus = true;
            else if (codigo > 96 && codigo < 123 && !booMinus) booMinus = true;
        }
        if (!booChar)
            document.getElementById("mensajePassword").innerHTML =
                "<br>Debe contener un caracter especial #$@";
        if (!booMayus)
            document.getElementById("mensajePassword").innerHTML =
                "<br>Debe contener Mayusculas";
        if (!booMinus)
            document.getElementById("mensajePassword").innerHTML =
                "<br>Debe contener una minuscula";
    } else {
        document.getElementById("mensajePassword").innerHTML =
            "<br>Contraseña debe tener minimo 8 caracteres";
        return false;
    }
    if (booChar && booMayus && booMinus) clave = true;
    
    return true;
}

function limpiar() {
    location.reload();
}