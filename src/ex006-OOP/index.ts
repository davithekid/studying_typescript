interface UsuarioProps {
    id: number;
    nome: string;
    email: string;
    password: string;
}

class Usuario {
    public readonly id: number;
    public nome: string;
    public email: string;
    private password: string;
    static contador: number = 0;

    constructor({ id, nome, email, password }: UsuarioProps) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.password = password + Math.floor(Math.random() * 3000);
        Usuario.contador++;
    }
    mostrarInfo() {
        console.log(`Nome: ${this.nome}, Email: ${this.email}, Id: ${this.id}`);
    }

}                                                                    // só atribuindo senha mesmo
const user = new Usuario({ id: 1, nome: 'Davi', email: '@gmail.com' , password: '123456' });
user.mostrarInfo();
const user2 = new Usuario({ id: 2, nome: 'ramon', email: '@gmail.com', password: '123456' });
user2.mostrarInfo();
const user3 = new Usuario({ id: 3, nome: 'Pedrao', email: '@gmail.com', password: '123456' });
user3.mostrarInfo();
console.log(Usuario.contador);