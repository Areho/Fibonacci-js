function fibonacci(tipo, inicio, fin) {
    let a = inicio;
    let b = inicio + 1;
    let resultado;

    if (tipo === 'array') {
        resultado = [];
        while (a <= fin) {
            resultado.push(a);
            [a, b] = [b, a + b];
        }
        return resultado;
    } else if (tipo === 'map') {
        resultado = new Map();
        let i = 0;
        while (a <= fin) {
            resultado.set(i, a);
            [a, b] = [b, a + b];
            i++;
        }
        return resultado;
    } else if (tipo === 'set') {
        resultado = new Set();
        while (a <= fin) {
            resultado.add(a);
            [a, b] = [b, a + b];
        }
        return resultado;
    } else {
        throw new Error("Tipo no soportado. Usa 'array', 'map' o 'set'.");
    }
}

// Ejemplos de uso:
console.log('Array:', fibonacci('array', 5, 20));
console.log('Map:');
fibonacci('map', 5, 20).forEach((valor, clave) => {
    console.log(`Index ${clave}: ${valor}`);
});
console.log('Set:', fibonacci('set', 0, 20));