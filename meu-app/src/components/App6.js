import React, {useState} from 'react';
/* Aula 02 - Hook de Estado */
export default function App(){
    const [nome, setNome] = useState(''); //Escreva o nome do estado e utilize set com o nome do estado. // Se chama desestruturação
    /* const [pessoa, setPessoa] = useState({nome: 'Verena', idade: 25}) */
    /* const onClick = ()=> setNome/* setPessoa ({nome:'Luis'}) */ //Ele sobrescreve todo o estado, se fosse um objeto ele seria sobrescrito
    console.log(nome);
    
    return (/* {<h1 onClick={onClick}>{pessoa.nome}</h1>} */
        <div>
            Nome: <input type="text" value={nome} onChange={(event)=>setNome(event.target.value)}/> <br/>
            Olá {nome}
        </div>
        
        );
}