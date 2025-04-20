type Online = 'sim' | 'nao';

const Status: Online = 'nao'

// exercicio

type statusPedido = 'pendente' | 'enviado' | 'entregue' | 'cancelado';

interface Pedido  {
    id: number,
    produto: string,
    status: statusPedido;
}

const pedidos:Pedido[] = [
    {id: 1, produto: 'MAD ENLATADOS', status: 'cancelado'},
    {id: 2, produto: 'CIENA', status: 'entregue'},
    {id: 3, produto: 'RENNER', status: 'pendente'},
    {id: 4, produto: 'RX 6600', status: 'enviado'}
]

function filtrarPedidos(pedidos: Pedido[], status: statusPedido){
    return pedidos.filter(pedido => pedido.status ===  status)
}

console.log('LISTA DE PEDIDOS\n', pedidos)

console.log('FILTRANDO PEDIDOS ');
console.log(filtrarPedidos(pedidos, 'entregue'));

// ------------------------------------------- //


type User = 'admin' | 'user';

interface Padrao {
    nome: string,
    user: User;
}

const people: Padrao = {
    nome:  'davi',
    user: 'admin'
}

console.log(people)