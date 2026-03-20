// ejercicio 1 - numeros primos del 1 al 50
// un numero primo solo se divide entre 1 y el mismo

for (let numero = 2; numero <= 50; numero++) {
  let esPrimo = true

  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      esPrimo = false
    }
  }

  if (esPrimo === true) {
    console.log(numero)
  }
}


// ejercicio 2 - tabla de multiplicar del 7
let n = 7

for (let i = 1; i <= 12; i++) {
  console.log(n + " x " + i + " = " + n * i)
}


// ejercicio 3 - cajero automatico
let saldo = 500000

let retiro1 = 100000
let retiro2 = 200000
let retiro3 = 300000

if (retiro1 <= saldo) {
  saldo = saldo - retiro1
  console.log("retiro: " + retiro1 + " | saldo: " + saldo)
} else {
  console.log("saldo insuficiente")
}

if (retiro2 <= saldo) {
  saldo = saldo - retiro2
  console.log("retiro: " + retiro2 + " | saldo: " + saldo)
} else {
  console.log("saldo insuficiente")
}

if (retiro3 <= saldo) {
  saldo = saldo - retiro3
  console.log("retiro: " + retiro3 + " | saldo: " + saldo)
} else {
  console.log("saldo insuficiente")
}


// ejercicio 4 - promedio de un estudiante
let nota1 = 4.5
let nota2 = 3.8
let nota3 = 3.2

let promedio = (nota1 + nota2 + nota3) / 3

if (promedio >= 3.0) {
  console.log("promedio: " + promedio.toFixed(2) + " - Aprobado")
} else {
  console.log("promedio: " + promedio.toFixed(2) + " - Reprobado")
}


// ejercicio 5 - tienda, descuento si supera 100000
let precio1 = 30000
let precio2 = 45000
let precio3 = 25000

let total = precio1 + precio2 + precio3

if (total > 100000) {
  total = total * 0.90
  console.log("total con descuento: $" + total)
} else {
  console.log("total: $" + total)
}


// ejercicio 6 - adivinador
let secreto = 13
let intento = 10

if (intento === secreto) {
  console.log("adivinaste!")
} else if (intento < secreto) {
  console.log(intento + " es muy bajo, busca mas arriba")
} else {
  console.log(intento + " es muy alto, busca mas abajo")
}