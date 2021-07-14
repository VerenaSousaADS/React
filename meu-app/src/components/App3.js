import React from 'react';

class App3 extends React.Component{
    constructor(props){
        super(props);
        this.state = {nome : ""}
        this.changeNome = this.changeNome.bind(this); //é preciso dizer para função changeNome que ela está apontando para si mesma, do contrário não tem como os métodos this ler/modificar o estado ou as props funcionar
    }
    changeNome = function(evt){
        this.setState({nome : evt.target.value}); //função para receber por parâmetro o objeto evt e pegar de dentro o target, que é o elemento HTML que gerou o evento 
    }

    render(){
        return(

            <div>
                Nome : <input type="text" value={this.state.nome} onChange={()=>this.changeNome}></input> {/* Precisa instaciar a função, nesse caso com arrow function */}
                <p>Olá {this.state.nome}</p>
            </div>
        );
    }
}

export default App3;