import React from 'react';

/* Aula 11 - Formulários */
class Formulario extends React.Component{
    constructor(props){
        /* Estado inicial da aplicação */
        super(props);
        this.state = {nome: '', linguagem: 'JavaScript', tipo: 'programador', dedico: true, bio: ''};
     
        this.handleSubmit = (event)=>{
            event.preventDefault();
            /* Para saber quais as informações inseridas no form */
            console.log(this.state);
        }

        this.changeName = (event)=>{
            this.setState({nome: event.target.value})/* Captura o nome inserido no input de nome */
        }

        this.changeSelect = (event)=>{
            this.setState({linguagem: event.target.value})
        } 

        this.changeRadio = (event)=> {
            this.setState({tipo: event.target.value})
        }

        this.changeCheckbox = (event)=> {
            this.setState({dedico: event.target.checked})
        }

        this.changeBio = (event)=>{
            this.setState({bio: event.target.value})
        }
    }

    render(){
        return(
            <div>
                <form onSubmit = {(e)=> {this.handleSubmit(e)}} /* Comportamento de envio das inserções */ >
                    <label>
                        Nome: <input type= "text" value={this.state.nome} onChange={(e)=>{this.changeName(e)}}/> {/* Modificação do input. indica o método a ser executado */}
                    </label>
                    <br/>
                    <label>
                        Linguagem favorita
                        <select value={this.state.linguagem} onChange={(e)=>{this.changeSelect(e)}}>
                            <option>JavaScript</option>
                            <option>Python</option>
                            <option>C++</option>
                        </select>
                    </label>
                    <br/>
                    <label>
                        Sou: 
                        <input type="radio" checked={this.state.tipo === "Programador"} onChange={(e)=>{this.changeRadio(e)}} value="Programador"/>Programador
                        <input type="radio" checked={this.state.tipo === "Estudante"} onChange={(e)=>{this.changeRadio(e)}} value="Estudante"/>Estudante
                    </label>
                    <br/>
                    <label>
                        <input type="checkbox" checked={this.state.dedico} onChange={(e)=>{this.changeCheckbox(e)}}/> Dedico 8h semanais aos estudos
                    </label>
                    <br/>
                    <label>
                        Bio:
                        <textarea cols = '50' value={this.state.bio} onChange={(e)=>{this.changeBio(e)}}/>
                    </label>
                    <br/>
                    <input type="submit" value="Salvar"/>
                </form>
            </div>
        );
    }
}

export default Formulario;