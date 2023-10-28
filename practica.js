//TRABAJO PRACTICO//

function saludar (nombre)
let nombre = prompt('Escribe tu nombre normal') 
{
    if (nombre == Nahuel || nombre == Santino)
    {
        alert('Hola. ')
    }
    else
    {
        alert('Bienvenido amigo/a 👋')
    }
}

function mayorMenorEdad (edadUsuario)
let edadUsuario = Number(prompt('Ingrese su edad '))
{
    if (edadUsuario <= 18)
    {
        alert('Sos mayor de edad. ')
    }
    else
    {
        alert('Sos menor de edad. ')
    }
}

function etapaEdad (etapaUsuario)
let etapaUsuario = Number(prompt('Ingrese su edad para saber en qué etapa de su vida se encuentra... '))
{
    if (etapaUsuario <= 1 && etapaUsuario >= 6)
    {
        alert('Sos menor a un niño. ')
    }
    else if (etapaUsuario <=6 && etapaUsuario > 12)
    {
        alert('Sos un/a niño/a común y corriente. ')
    }
    else if (etapaUsuario <=13 && etapaUsuario > 18)
    {
        alert('Sos un/a adolescente. ')
    }
    else if (etapaUsuario <= 19 && etapaUsuario > 26)
    {
        alert('Sos un/a joven. ')
    }
    else if (etapaUsuario <= 27 && etapaUsuario > 59)
    {
        alert('Sos un adulto. 👍')
    }
    else if (etapaUsuario <= 60)
    {
        alert('Sos una persona adulta mayor. ')
    }
}

function laborableFinde (díaActual)
let diaActual = prompt('¿Qué día es hoy?')
{
    if (díaActual == sábado || díaActual == domingo)
    {
        alert('Hoy es finde. Que lindo!!! ')
    }
    else
    {
        alert('Hoy hay que laburar :( ')
    }
}

function seguridad (contraseña)
let contraseña = prompt('Para continua, ingrese la contraseña ')
{
    if (contraseña == secreto)
    {
        alert('Acceso concedido')
    }
    else
    {
        alert('Acceso denegado')
    }
}

function descuento (edadUsuario, precioProducto)
let edadUsuario = prompt('Ingrese su edad por favor')
let precioProducto = Number(prompt('Ingrese el precio del producto'))
{
    if (edadUsuario <= 65)
    {
        alert('El precio del producto con un 10% de descuento es: '+ ((precioProducto * 10)/100) - precioProducto + '$')
    }
    else
    {
        alert('el precio del producto sin el descuento es de: '+ precioProducto + '$')
    }
}

function categotíaNotas (calificaion)
let calificacion = Number(prompt('Escriba la calificacion de un examen (del 0 al 100)'))
{
    if(calificacion <= 80 && calificacion > 100)
    {
        alert('Tu categoría es un MS')
    }
    else if(calificacion <= 60 && calificacion > 79)
    {
        alert('Tu categoría es un S')
    }
    else if(calificacion <= 0 && calificacion > 59)
    {
        alert('Tu categoría es un EP')
    }
}
