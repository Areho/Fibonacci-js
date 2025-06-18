i =0;
f = 20


// Map
function fibonaccimap(inicio, fin) {      
    let a = inicio;                    
    let b = inicio + 1;                   
    let i = 0;                     
    let resultado = new Map();          
    while (a <= fin) {                
        resultado.set(i, a);            
        [a, b] = [b, a + b];             
        i++;                              
    }

    return resultado;                     
}

// Mostrar resultados
console.log(fibonaccimap(i,f))