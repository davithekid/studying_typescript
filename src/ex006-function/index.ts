export type Usuario = {
    nome: string
    online: boolean
}

export const usuario: Usuario = {
    nome: 'davi',
    online: true
}

function verificarStatus(usuario: Usuario) {
   if(usuario.online){
    console.log(`${usuario.nome} está online`)
   } else {
    console.log(`${usuario.nome} está offline`)
   }
}

verificarStatus(usuario)

// ACABEI DE VER QUE EXISTE ESSA FORMA ABAIXO TAMBEM!!!


// export type Usuario = {
//     nome: string;
//     online: boolean;
//   };
  
//   export const usuario: Usuario = {
//     nome: 'Davi',
//     online: true,
//   };
  
//   function verificarStatus(usuario: Usuario): string {
//     return usuario.online
//       ? `${usuario.nome} está online ✅`
//       : `${usuario.nome} está offline ❌`;
//   }
  
//   const status = verificarStatus(usuario);
//   console.log(status);
  
