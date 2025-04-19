const nome: string = 'davi';
const idade: number = 19;
const cursando: boolean = true; // or false

            // to tipando os parametros e o retorno
// como sao dois numeros ele ja entende que result retorna number, o ts é inteligente 
function soma(x: number, y: number):number {
    return x + y;
}

// tenho duas formas de fazer 
    // -- assim -- //
console.log(soma(2, 2));

// ou assim
const result = soma(7,6);
console.log(result);