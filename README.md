## React  - Componentes Tipo Classe

<p> Bolsa Santander Let's Code </p>

<p> Aula 01 - Introdução ao React 

 Aparece o contexto de SPA - Single Page Applications (Aplicação de Página Única), que utiliza apenas uma página HTML modificada conforme a interação com o usuário ou eventos para um sistema inteiro. 

É nesse contexto em que surge o React, hoje ele é a principal biblioteca de frontend para a produção de SPA. 

O React também inaugura o conceito de programação reativa em frontend. Que basicamente é a reconstrução da página sempre que houver mudança nos dados. Iso é feito de uma forma muito inteligente pois ele é capaz de renderizar apenas as partes da página que são dependentes dos dados que foram modificados e não o todo, tendo por resultado um ótimo desempenho.

Para isso, o React usa uma arquitetura de componentes. Grande parte da programação em React está em saber dividir bem uma página em componentes e fazê-los de forma reutilizável e que admita composição com outros componentes.
</p>

<p> Aula 02 - Indtrodução aos Componentes 

Componentes podem ser entendidos como as "partes" de uma página e podem ser compostos por outros componentes.

Componentes podem ser criados de duas formas:
1 - Por funções, chamados de componentes funcionais
2 - Por classes, que chamaremos de "componentes tipo classe" 

</p>

<p> Aula 03 - Instalação 

Para a aplicação funcionar é preciso startala direto na página do projeto, para isso use os seguintes comandos

cd pagina_do_projeto/  ///Utilize o comando cd e logo após insira o nome da página do projeto

yarn start   /// Esse comando inicializa o  servidor

</p>

<p>
Aula 04 - Componentes Simples
</p>

<p>
Aula 05 - Props
</p>

<p>
Aula 06 - Estado

Estado era o termo utilizado para denominar as máquinas precursoras do computador moderno. 

Exemplo de estado: um interruptor possui dois estados ligado e desligado

Em computação existem extensa variedade de estados, não precisamos pensar na quantidade de estados, mas sim em modificar e armazenar o estado atual do componente.

Todas as modificações no estado devem ser feitas pelo método setState.

Para inserir ou modificar informações é preciso usar o método onChange, não se esquecendo de instanciá-lo.

Capturamos o evento HTML pelo target
</p>

<p>

Aula 07 - Renderização Condicional

A variável nome na aplicação se torna undefined para que seja atribuído um valor a ela apenas depois de clicar no botão salvar.
Em txtNome é gravada as alterações no campo nome.
A função changeTxtNome altera o valor inicial da variável nome para o valor digitado no input, já a função persistTxtNome mantém esse valor alterado dentro da variavel nome.

Finalmente é feito o retorno condicional.


</p>