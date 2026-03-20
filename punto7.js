//almacenamiento de numeros y suma
let suma = 0; //acumulador para la suma de los números
let numeroInterrupcion = 0; //variable para almacenar el número en el que se interrumpe el ciclo
let interrumpido = false; //bandera para indicar si el ciclo se interrumpió o no
// Bucle para sumar los números del 1 al 100
for (let i = 1; i <= 100; i++) {
    // Condición: mayor a 90 y par
    if (i > 90 && i % 2 == 0) {
        // Si se cumple la condición, se interrumpe el ciclo
        numeroInterrupcion = i;
        // Se establece la bandera de interrupción a true
        interrumpido = true;
        break; // Sale del bucle inmediatamente
    }
    
    suma += i;// Suma el número actual al acumulador
    console.log("Sumando: " + i + " | Suma parcial: " + suma);// Muestra el número que se está sumando y la suma parcial en cada iteración
}

console.log("\n-----");// Muestra el resultado final después de salir del bucle
if (interrumpido) { // Si el ciclo se interrumpió, muestra el número en el que se interrumpió
    console.log("EL CICLO SE INTERRUMPIÓ en el número: " + numeroInterrupcion); //
}
console.log("LA SUMA FINAL ES: " + suma);
console.log("-----");
