import React from 'react';

/* Aula 07 - Renderização Condicional */

class App4 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            nome: undefined, /* Renderizar apenas depois de salvo o nome */
            txtNome: ''
        }
    }

    changeTxtNome = (event) => {
        this.setState({ txtNome: event.target.value});
        console.log(event)
    }

    persistTxtNome = () => {
        this.setState({ nome: this.state.txtNome}); /* Mantém o estado atual de changeTxtNome */
        console.log(this.state.txtNome)
    }

    render(){
        const renderForm = () => { /* Renderização especifica do formulário */
            return (
                <div>
                    Nome: <input type='text' onChange = {(e) => {this.changeTxtNome(e)}}/> {/* Captura as mudanças de estado. Lembrar de mandar o evento para onChange, isso foi feito através do parametro (e) */}
                    <button onClick ={() => this.persistTxtNome()}>Salvar</button> {/* Captura o click no botão salvar. Lembrar de instanciar tanto a função persistTxtNome como a changeTxtNome */}
                </div>
            )
        };
        const renderText = () => (<p>Olá {this.state.nome}</p>);

        return !this.state.nome ? renderForm() : renderText();
    }
}

export default App4;