// Set
function Set(inicio, fin) {     
    let a = inicio;                      
    let b = inicio + 1;                   
    let resultado = new Set();     
    while (a <= fin) {                    
        resultado.add(a);               
        [a, b] = [b, a + b];            
    }
    return Array.from(resultado);         // Convierte el Set a un arreglo y lo retorna.
}
console.log(Set(0, 20));       