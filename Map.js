// Map
function Map(inicio, fin) {      // Define una función llamada fibonacciMap con dos parámetros: inicio y fin.
    let a = inicio;                       // Declara la variable 'a' y la inicializa con el valor de 'inicio'.
    let b = inicio + 1;                   // Declara la variable 'b' y la inicializa con 'inicio + 1'.
    let i = 0;                            // Declara la variable 'i' para usar como índice, inicializada en 0.
    let resultado = new Map();            // Crea un nuevo objeto Map llamado 'resultado'.

    while (a <= fin) {                    // Mientras 'a' sea menor o igual que 'fin', ejecuta el bucle.
        resultado.set(i, a);              // Agrega al Map el par clave-valor: índice 'i' y valor 'a'.
        [a, b] = [b, a + b];              // Actualiza 'a' y 'b': 'a' toma el valor de 'b', 'b' toma el valor de 'a + b'.
        i++;                              // Incrementa el índice 'i' en 1.
    }

    return resultado;                     // Devuelve el Map con la secuencia generada.
}

// Mostrar resultados
let fibMap = Map(5, 25);        // Llama a la función con 5 y 100, y guarda el resultado en 'fibMap'.
fibMap.forEach((valor, clave) => {        // Recorre cada elemento del Map usando forEach.
    console.log(`Index ${clave}: ${valor}`); // Imprime en consola el índice y el valor de cada elemento.
});