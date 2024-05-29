\# Curso de Programação Web Front-End: To-Do-List

\## Introdução

Bem-vindo ao curso de Programação Web Front-End! Este curso foi projetado para te ensinar a construir um site do zero, utilizando HTML, CSS e JavaScript. Vamos guiá-lo passo a passo, desde a configuração do ambiente de desenvolvimento até a criação de um site de lista de tarefas (to-do-list). Além das videoaulas, você encontrará textos de apoio e dicas valiosas para programar com eficiência e boas práticas.

\## Objetivos do Curso

1. Baixar e configurar as IDEs.
1. Aprender HTML.
1. Aprender CSS.
1. Aprender JavaScript.
1. Construir um site completo de lista de tarefas (to-do-list).

\## Estrutura do Curso

O curso está dividido em módulos, cada um focado em uma etapa específica do desenvolvimento web. Abaixo, você encontra os detalhes de cada módulo, com explicações teóricas para apoiar seu aprendizado.

\### Conteúdo do Curso

\#### Configuração das IDEs

1. \*\*O que são IDEs e por que usá-las\*\*
- IDEs, ou Ambientes de Desenvolvimento Integrado, são ferramentas essenciais para programadores. Elas combinam várias funções necessárias para o desenvolvimento de software em uma única interface. As principais vantagens de usar uma IDE incluem:
- \*\*Realce de Sintaxe:\*\* As IDEs destacam diferentes partes do código com cores específicas, ajudando a identificar erros de sintaxe rapidamente e tornando o código mais legível.
- \*\*Autocompletar:\*\* Esta funcionalidade sugere e completa automaticamente palavras-chave e variáveis enquanto você digita, economizando tempo e reduzindo erros.
- \*\*Debugging:\*\* As IDEs oferecem ferramentas integradas para depuração, permitindo que você execute o código passo a passo, examine variáveis e encontre bugs de forma eficiente.
- \*\*Controle de Versão:\*\* Muitas IDEs integram sistemas de controle de versão como Git, facilitando a gestão de versões do código e a colaboração com outros desenvolvedores.
- \*\*Interface Unificada:\*\* Com uma IDE, você tem acesso a um ambiente de trabalho coeso onde todas essas ferramentas estão disponíveis sem a necessidade de alternar entre diferentes programas.

- \*\*Analogia para Entender IDEs:\*\*
- Tentar programar sem uma IDE é como construir uma casa com apenas um martelo e pregos. Usar uma IDE é como ter uma caixa de ferramentas completa, onde cada ferramenta está facilmente acessível para a tarefa correta.

2\. \*\*Instalando e navegando na IDE\*\*

- \*\*Passo a Passo da Instalação e Navegação na IDE:\*\* Começar com uma IDE envolve baixá-la do site oficial e seguir as instruções de instalação. Após instalado, aprender a navegar pela interface é crucial. Você aprenderá a criar novos projetos, organizar arquivos em pastas e configurar preferências. Por exemplo, ao criar um projeto, a IDE pedirá o nome do projeto e onde salvá-lo. Saber como abrir, editar e salvar arquivos é essencial para aproveitar todos os recursos da IDE.

- \*\*Responsável:\*\* Gustavo

\#### HTML

1. \*\*Criando arquivos HTML, CSS e JavaScript\*\*
- \*\*Fundamentos de Arquivos Web\*\*
- A criação de arquivos HTML, CSS e JavaScript é a base de qualquer site. Cada tipo de arquivo desempenha um papel específico:
- \*\*HTML (HyperText Markup Language):\*\* Define a estrutura do conteúdo da página. Ele cria a espinha dorsal do site, organizando o conteúdo em elementos como parágrafos, cabeçalhos, listas e links.
- \*\*CSS (Cascading Style Sheets):\*\* Cuida da aparência e do layout da página. Ele estiliza o conteúdo HTML, definindo cores, fontes, espaçamentos e posicionamentos.
- \*\*JavaScript:\*\* Adiciona interatividade ao site. Ele permite criar comportamentos dinâmicos, como responder a cliques de botões, validar formulários e manipular elementos da página.

- Manter esses arquivos separados é uma prática importante que melhora a organização e a manutenção do código. Ao separar o conteúdo (HTML), a apresentação (CSS) e a lógica (JavaScript), você pode atualizar e modificar cada aspecto do site de forma independente e eficiente.

- \*\*Referenciando CSS e JavaScript no HTML:\*\*
- Para conectar os arquivos CSS e JavaScript ao HTML, usamos as tags `<link>` e `<script>`:
- \*\*CSS:\*\* Para adicionar um arquivo CSS, usamos a tag `<link>` dentro do `<head>` do HTML.

\```html

<link rel="stylesheet" href="styles.css">

\```

- \*\*JavaScript:\*\* Para adicionar um arquivo JavaScript, usamos a tag `<script>`, geralmente no final do `<body>` para garantir que o HTML seja carregado antes de qualquer script.

\```html

<script src="scripts.js"></script>

\```

2\. \*\*Elementos básicos do HTML\*\*

- Os elementos HTML são como blocos de construção que definem a estrutura e o conteúdo da sua página web. Aqui estão alguns dos elementos mais comuns e suas funções:

- \*\*Cabeçalhos (<h1> a <h6>):\*\* Usados para títulos e subtítulos. `<h1>` é o cabeçalho mais importante e `<h6>` o menos importante.

\```html

<h1>Este é um Título Principal</h1>

<h2>Este é um Subtítulo</h2>

\```

- \*\*Parágrafos (<p>):\*\* Usados para blocos de texto.

\```html

<p>Este é um parágrafo de exemplo.</p>

\```

- \*\*Listas Não Ordenadas (<ul>) e Ordenadas (<ol>):\*\* Usadas para agrupar itens em uma lista. Os itens são definidos com a tag `<li>`.

\```html

<ul>

<li>Item da lista não ordenada</li>

<li>Outro item</li>

</ul>

<ol>

<li>Item da lista ordenada</li>

<li>Outro item</li>

</ol>

\```

- \*\*Links (<a>):\*\* Usados para criar hyperlinks que navegam para outras páginas ou sites.

\```html

<a href="https://www.exemplo.com">Clique aqui para visitar um site</a>

\```

- \*\*Imagens (<img>):\*\* Usadas para incorporar imagens na página.

\```html

<img src="imagem.jpg" alt="Descrição da imagem">

\```

- \*\*Histórico do HTML e CSS:\*\*
- Antes da introdução do CSS, os estilos eram aplicados diretamente nos elementos HTML usando atributos como bgcolor, font, align, etc. Isso resultava em um código HTML muito confuso e difícil de manter. Com o CSS, a apresentação do conteúdo foi separada da estrutura, permitindo um código HTML mais limpo e semântico.

3\. \*\*Construção inicial do to-do-list\*\*

- \*\*Construção da Estrutura HTML:\*\* Começaremos a construir a estrutura do to-do-list. Isso inclui criar um formulário para adicionar novas tarefas e uma lista onde as tarefas serão exibidas. Usaremos elementos como `<form>`, `<input>`, `<button>` e `<ul>` ou `<ol>`. Um HTML bem estruturado é fundamental para uma página semântica e acessível.

- \*\*Responsável:\*\* Gustavo

\#### CSS

1. \*\*Estilizando a lista de tarefas\*\*
- \*\*Introdução ao CSS:\*\* CSS controla a aparência visual da página. Começaremos estilizando a lista de tarefas, definindo estilos para listas ordenadas (ol) e não ordenadas (ul). CSS permite ajustar margens, espaçamentos, bordas, fontes e tamanhos de texto. Por exemplo, para estilizar uma lista, podemos definir propriedades como `list-style-type`, `margin`, `padding` e `font-family`.

2\. \*\*Estilizando itens da lista\*\*

- \*\*Estilização Detalhada de Itens:\*\* Cada item da lista (li) pode ser estilizado individualmente. Utilizamos propriedades CSS como `margin`, `padding`, `border`, `background-color`, `font-size` e `color`. Isso inclui espaçamentos entre itens, cores de fundo alternadas e fontes personalizadas.

3\. \*\*Estilizando caixas de seleção\*\*

- \*\*Estilização de Elementos Interativos:\*\* Caixas de seleção permitem marcar tarefas como concluídas. Utilizamos propriedades como `appearance`, `background-color`, `border`, e pseudo-classes como `:checked` para definir estilos diferentes para caixas marcadas e não marcadas. Efeitos de hover e foco melhoram a experiência do usuário.

4\. \*\*Estilizando botões de ação\*\*

- \*\*Design de Botões:\*\* Botões de ação são fundamentais para a interatividade do site. Utilizamos CSS para definir cores, tamanhos, bordas, e efeitos de hover e foco. Propriedades como `background-color`, `border-radius`, `padding` e `cursor` ajudam a criar botões funcionais e atraentes.

5\. \*\*Estilizando a entrada de texto\*\*

- \*\*Customização de Campos de Entrada:\*\* A entrada de texto para adicionar novas tarefas deve ser estilizada. Utilizamos propriedades CSS para definir o tamanho, margens, bordas, e fontes. Propriedades como `width`, `height`, `border`, `padding`, e `font-family` garantem que a entrada de texto seja esteticamente agradável e fácil de usar.

6\. \*\*Estilizando barra de progresso ou contador de tarefas\*\*

- \*\*Feedback Visual com CSS:\*\* Barras de progresso ou contadores de tarefas fornecem feedback visual sobre o progresso do usuário. Utilizamos CSS para definir a aparência desses elementos, ajustando cores, tamanhos e posicionamento.

7\. \*\*Estilizando layout responsivo\*\*

- \*\*Design Responsivo com CSS:\*\* Um layout responsivo se ajusta a diferentes tamanhos de tela. Utilizamos media queries (`@media`) para aplicar estilos específicos a diferentes resoluções de tela, ajustando tamanhos de fonte, espaçamentos, e reorganizando elementos para garantir funcionalidade em qualquer dispositivo.

8\. \*\*Estilizando animações e transições\*\*

- \*\*Animações e Transições Suaves:\*\* Animações e transições melhoram a experiência do usuário. Utilizamos propriedades CSS como `transition`, `animation`, `keyframes`, e `transform` para criar efeitos suaves ao adicionar, remover ou completar tarefas.

9\. \*\*Estilizando outros elementos\*\*

- \*\*Personalização de Elementos Adicionais:\*\* Outros elementos, como etiquetas de prioridade, notas ou datas, podem ser estilizados para melhorar a funcionalidade do to-do-list. Utilizamos CSS para ajustar cores, tamanhos e posicionamento.

- \*\*Responsáveis:\*\* Luiza e Tami

\#### JavaScript

1. \*\*Introdução ao JavaScript\*\*
- \*\*História e Importância do JavaScript:\*\* JavaScript é essencial para adicionar interatividade a sites. Criado em 1995, ele evoluiu para se tornar uma das linguagens mais populares. Permite a manipulação do DOM (Document Object Model), resposta a eventos do usuário, e comunicação assíncrona com servidores.

2\. \*\*Lógica do to-do-list: adição e remoção de tarefas\*\*

- \*\*Implementação da Lógica com JavaScript:\*\* Implementar a lógica do to-do-list envolve a manipulação de elementos HTML. Isso inclui adicionar novas tarefas e remover tarefas existentes. Utilizamos métodos como `document.querySelector`, `addEventListener`, `createElement` e `appendChild`.

3\. \*\*Estilização dinâmica com JavaScript\*\*

- \*\*Estilização Dinâmica e Personalização:\*\* JavaScript permite a aplicação de estilização dinâmica, respondendo a eventos do usuário como cliques e hover. Utilizamos métodos como `classList.add`, `classList.remove`, e `setAttribute` para alterar classes e atributos de elementos HTML dinamicamente.

- \*\*Responsável:\*\* Clara

\### Boas Práticas de Programação

- \*\*Importância das Boas Práticas de Programação:\*\* Seguir boas práticas de programação é fundamental para garantir que o código seja fácil de entender, manter e expandir. A clareza e a legibilidade do código permitem que outros desenvolvedores compreendam e colaborem no projeto. Comentários e documentação são cruciais para explicar a lógica e os detalhes técnicos. Estruturar e modularizar o código facilita a manutenção e a escalabilidade, permitindo que novas funcionalidades sejam adicionadas sem comprometer a estabilidade do sistema.

- \*\*Clareza e legibilidade do código:\*\* Escrever código fácil de ler e entender por outros desenvolvedores. Utilize indentação, nomes de variáveis descritivos e mantenha o código limpo e organizado.
- \*\*Comentários e documentação:\*\* Inclua comentários que expliquem partes complexas do código e mantenha uma documentação adequada.
- \*\*Estruturação e modularização do código:\*\* Divida o código em módulos e funções bem definidos. Cada módulo ou função deve ter uma responsabilidade específica.
- \*\*Manutenção e escalabilidade:\*\* Escreva código fácil de manter e escalar. Evite duplicação de código e utilize padrões de design apropriados.

\## Conclusão

Este curso proporcionará a você uma compreensão abrangente de como construir um site do zero utilizando as tecnologias web mais importantes. Ao final do curso, você será capaz de planejar, desenvolver e estilizar um site funcional, seguindo as melhores práticas de programação e utilizando ferramentas modernas de desenvolvimento web.

Boa sorte e bons estudos!
