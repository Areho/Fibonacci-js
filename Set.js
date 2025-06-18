// Set
i = 5
f = 20

function fibonacciset(inicio, fin) {     
    let a = inicio;                      
    let b = inicio + 1;                   
    let resultado = new Set();  

    while (a <= fin) {                    
        resultado.add(a);               
        [a, b] = [b, a + b];            
    }
    return resultado;       
}
console.log(fibonacciset(i,f));       