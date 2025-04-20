// ---------------------- ARRAY ---------------------- //

// sintaxe para um array de números
const numeros: number[] = [2, 3, 5];

// sintaxe para um array de strings
const nomes: string[] = ['davi', 'ramon', 'pedrao'];

// Usando o atributo READONLY para algo imutável
const nomesFixos: readonly string[] = ['davi'];
// nomesFixos.push('novo') // ❌ vai dar erro: não é possível modificar um array readonly

console.log('Nomes:', nomes);
console.log('Números:', numeros);

// ---------------------- TUPLA ---------------------- //
    // passo tipos fixos da qual o array deve seguir 
const tupla: [string, number] = ['davi', 2];
console.log('Tupla:', tupla);
