//Declaracion de variables
var nombre = document.querySelector('#nombre');
var correo = document.querySelector('#correo');
var mensaje = document.querySelector('#mensaje');
var btnEnviar = document.querySelector('#enviar');

//Eventos
btnEnviar.addEventListener('click', enviar);

//Funciones

function enviar(e)
{
    e.preventDefault();

    if(validacion(nombre))
    {
        if(validacion(correo))
        {
            if(validacion(mensaje))
            {
                setTimeout( () => {
                    alertas(1, 'Se envió correctamente');
                },500);

                setTimeout( () => {
                    nombre.value = '';
                    correo.value = '';
                    mensaje.value = '';
                }, 1000); 
            }
            else
            {
                alertas(2, 'Ingrese el mensaje');
            }
        }
        else
        {
            alertas(2, 'Ingrese una dirección de correo electrónico valido');
        }
    }
    else
    {
        alertas(2, 'Ingrese su nombre completo');
    }
}

//Funcion para validar los inputs
function validacion(input)
{
    if(input.type == "email")
    {
        let regExp = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;//Expresion regular para el email
        return regExp.test( input.value );
    }
    else
    {
        if( input.value === "" || input.value.trim().length == 0)
        {
            return false
        }
        else
        {
            return true;
        }
    }
}

//Funcion para mostrar los mensajes
function alertas(tipo, mensaje)
{
    var icon = '';

    //parametro tipo solo recibe dos datos. 1- si la acción es exitosa, 2- si existe una advertencia
    switch(tipo)
    {
        case 1:
            icon = 'success';
            break;
        case 2:
            icon = 'warning';
            break;
    }


    Swal.fire({
        icon: icon,
        title: mensaje,
        timer: 2000,
        timerProgressBar: true
    });
}