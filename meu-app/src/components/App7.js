import React, {useState, useEffect} from 'react';
/* Aula 02 - Hook de Efeito */
export default function App7(){
    const [nome, setNome] = useState(undefined); //Escreva o nome do estado e utilize set com o nome do estado. // Se chama desestruturação
    /* const [pessoa, setPessoa] = useState({nome: 'Verena', idade: 25}) */
    /* const onClick = ()=> setNome/* setPessoa ({nome:'Luis'}) */ //Ele sobrescreve todo o estado, se fosse um objeto ele seria sobrescrito
   
    useEffect(()=>{ 
        // console.log('Effect', nome);
        if(nome === undefined){
            setNome(sessionStorage.getItem('nome') || ""); /// Caso não ache nos coockies um nome então ele retorna uma string vazia 
        }else{
            sessionStorage.setItem('nome', nome);
        }


    }, [nome]);
    return (/* {<h1 onClick={onClick}>{pessoa.nome}</h1>} */
        <div>
            Nome: <input type="text" value={nome} onChange={(event)=>setNome(event.target.value)}/> <br/>
            Olá {nome}
        </div>
        
        );
}