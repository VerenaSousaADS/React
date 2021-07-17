## React  - Componentes Tipo Classe

## React - Componentes Funcionais

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

<p>
Aula 08 - Ciclo de Vida

O método componentDidMount é executado logo após a criação do componente.
Lembrando que alguns métodos serão depreciados do React, ou seja, não serão mais utilizado em versões posteriores

Nessa aula com a utilização do componentDidMount, buscamos as informações salvas nos coockies do navegador, e caso a existência da informação retorne true, é retornada o que está prensente no estado da aplicação.

Essa informação é salva na função persistTxtNome no cache do navegador.
</p>

<h3> Módulo 04 - React _ Componentes Funcionais </h3>

<p> <strong> Aula 01 - Introdução a Componentes Funcionais </strong> 

<blockquote>
Os componentes funcionais eram considerados os "componentes burros" do React, eles eram componentes simplificados que só tinham props e renderizavam html na tela. Eles não eram capazes de ter estado, e portanto de realizar alterações de estado. Não tinham os métodos de ciclo de vida, o que não permitia que coletassem dados externamente, o que chamamos na programação funcional de efeitos colaterais (side effects).

E por esses motivos eram usados apenas para coisas mais simples no React. No entanto, nas últimas atualizações da biblioteca, eles foram revistos e o React introduziu o conceito de Hooks, os hooks permitem aos componentes funcionais terem estado, efeitos, modificar seu estado e uma série de outras capacidades.
</blockquote>

</p>

<p> <strong>Aula 02 - Hook de Estado</strong> 

<blockquote cite="https://pt-br.reactjs.org/docs/hooks-overview.html">

Hooks são uma nova adição no React 16.8. Eles permitem que você use o state e outros recursos do React sem escrever uma classe.

</blockquote>
<blockquote>

<q>
O hook de estado é chamado de useState() precisamos importá-lo de dentro do React antes de poder utilizá-lo em nossos componentes.

useState é uma função que produz um vetor, na primeira posição vem uma referência ao estado que você acabou de criar. Na segunda posição vem uma função que permite modificar o estado. Se desejar um valor padrão inicial, ele pode ser passado por parâmetro na chamada do useState.

nunca faça atribuições ao estado diretamente, sempre utilize a função. Senão o React não atualizará o componente para mostrar a mudança na tela.
Para garantir que esse erro não aconteça, sempre use const antes de desestruturar o useState nunca use let.
</q>

</blockquote>
</p>