import React from 'react';

/* Aula 08 - Ciclo de Vida */

class App5 extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                nome: undefined,
                txtNome: ''
            }
        }
        componentDidMount = () =>{
            const nome = sessionStorage.getItem('nome'); /* Buscar as informações nos coockies */
            if(nome) this.setState({nome}); /* Apenas se a informação existir, atualizar a informação do estado */
        }

        changeTxtNome = (event) => {
            this.setState({ txtNome: event.target.value});
        }

        persistTxtNome = () => {
            this.setState({nome: this.state.txtNome});
            sessionStorage.setItem('nome', this.state.txtNome); /* Salva a informação dentro do cache do navegador */
        }

        render(){
            const renderForm = () =>{
                return(
                    <div>
                        Nome: <input type='text' onChange = {(e) => {this.changeTxtNome(e)}}/>
                        <button onClick={ () => {this.persistTxtNome()}}>Salvar</button>
                    </div>
                )
            };
            const renderText = () => (<p>Olá {this.state.nome}</p>);

            return !this.state.nome ? renderForm() : renderText();
    }
}

export default App5; 