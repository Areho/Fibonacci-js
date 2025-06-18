//Array
i = 0;
f = 200

const fionacciarray = (inicio, fin) => { 
    let a = inicio;           
    let b = inicio + 1;       
    let resultado = [];       

    while (a <= fin) {        
        resultado.push(a);   
        [a, b] = [b, a + b];  
    }

    return resultado;       
}

// Mostrar resultados
console.log("-Array")
console.log(fionacciarray(i, f));   




// Map

const fibonaccimap = (inicio,fin) => {    
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
console.log("-Map")
console.log(fibonaccimap(i,f))

// Set


const fibonacciset = (inicio,fin) => {  
    let a = inicio;                      
    let b = inicio + 1;                   
    let resultado = new Set();  

    while (a <= fin) {                    
        resultado.add(a);               
        [a, b] = [b, a + b];            
    }
    return resultado;       
}

// Mostrar resultados
console.log("--Set")
console.log(fibonacciset(i,f)); 
