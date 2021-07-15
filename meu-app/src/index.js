import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App';
// import App2 from './components/App2';
// import App3 from './components/App3';
// import App4 from './components/App4';
// import App5 from './components/App5';
import Lista from './components/Lista';



import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App2 title="Título">
    Conteúdo
    </App2> */}

    {/* 
    <App2 title="Título2"> {/* Possibilita a reutilização do código 
    Conteúdo2
    </App2> 
    */}
     {/*
    <App3/> Chamar as aplicações */}

    {/* <App4/> */}

    {/* <App5/> */}

    <Lista/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
