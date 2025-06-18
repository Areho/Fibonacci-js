function Array(inicio, fin) { 
    let a = inicio;           
    let b = inicio + 1;       
    let resultado = [];       // Declara un arreglo vacío llamado 'resultado' para almacenar los resultados.

    while (a <= fin) {        // Mientras 'a' sea menor o igual que 'fin', ejecuta el siguiente bloque.
        resultado.push(a);    // Agrega el valor actual de 'a' al arreglo 'resultado'.
        [a, b] = [b, a + b];  // Actualiza 'a' y 'b': 'a' toma el valor de 'b', y 'b' toma el valor de 'a + b'.
    }

    return resultado;         // Devuelve el arreglo 'resultado' con los valores generados.
}

console.log(Array(5, 20));    // Llama a la función con los valores 5 y 20, e imprime el resultado en consola.

