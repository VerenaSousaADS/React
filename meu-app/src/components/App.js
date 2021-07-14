import React from 'react';

class App extends React.Component{

  render(){ //Necessáriamente precisa de pelo menos um método render para dar retorno em tela
    return (
    <div> {/* Precisa de uma tag raíz para inserção de vários elementos em um único elemento */}
      <p>Meu primeiro parágrafo em React.</p>
      <p>Meu segundo parágrafo em React</p>
      <div>
        <pre>Cansei de parágrafos...</pre>
      </div>
      <p>{ new Date().toLocaleDateString("pt-BR")}</p> {/* Usando JavaScript como JSX, precisa ser posto dentro de chaves */}
    </div>
    )
  }

}



export default App;
