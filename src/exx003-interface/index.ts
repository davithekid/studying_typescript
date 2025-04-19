// INTERFACE //


// AQUI ESTOU DEFININDO O FORMATO PARA UM OBJETO
interface Usuario{
    nome: string;
    email: string;
    senha: string;
}

// pessoa deve seguir Usuario, um atributo a mais ou menos, daria erro no código
const pessoa: Usuario = {
    nome: 'davi',
    email: 'davi@gmail.com',
    senha: '123'
};

// tipos de saida

// console.log(Usuario) isso não existe!!
console.log('SAIDA INTERFACE')
console.log(pessoa)
console.log(pessoa.nome)

// ----------------------------------------------- //

// TYPE //
type Client = {
    name: string;
    address: string;
}

const pessoa2: Client = {
    name: 'drk',    
    address: 'davi@gmail.com',
};

console.log('\nSAIDA TYPE')
console.log(pessoa2 )
console.log(pessoa2.address)

// FORMATO FUNCTIONS
interface Add {
    (num1: number, num2: number): number;
}

const somar: Add = (a, b) => {
    return a+ b;
}

console.log('\nSAIDA FUNCTION WITH INTERFACE READY')
console.log(somar(2,3))


