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

function díaSemanal(numDía)
let numDía = Number(prompt('Escriba un número del 1 al 7 y le diré de qué día de la semana estamos hablando. '))
{
    if (numDía == 1)
    {
        alert('Estamos hablando de Lunes. ')
    }
    else if (numDía == 2)
    {
        alert('Estamos hablando de Martes. ')
    }
    else if (numDía == 3)
    {
        alert('Estamos hablando de Miercoles. ')
    }
    else if (numDía == 4)
    {
        alert('Estamos hablando de Jueves. ')
    }
    else if (numDía == 5)
    {
        alert('Estamos hablando de Viernes. ')
    }
    else if (numDía == 6)
    {
        alert('Estamos hablando de Sabado. ')
    }
    else if (numDía == 7)
    {
        alert('Estamos hablando de Domingo. ')
    }
}

function igualdadCadenas (texto1, texto2)
let texto1 = prompt('Escriba una palabra cualquiera. ')
let texto2 = prompt('Escriba otra palabra cualquiera (puede ser la misma palabra anterior). ')
{
    if (texto1 == texto2)
    {
        alert('Las cadenas de texto son iguales entre si. ')
    }
    else 
    {
        alert('Las cadenas de texto no son iguales entre si. ')
    }
}

function calculadoraEdad (edadUsuario, añoActual)
let añoActual = Number(prompt('Ingrese el año actual. '))
let edadUsuario = Number(prompt('Ingrese su año de nacimiento. Voy a averiguar cuántos años tiene usted. '))
{
    if (añoActual == 2023)
    {
        alert('Su edad es '+ 2023 - edadUsuario + 'años. ')
    }
    else if (añoActual == 2024)
    {
        alert('Su edad actual es '+ 2024 - edadUsuario + 'años. ')
    }
}
