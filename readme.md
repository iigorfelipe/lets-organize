### Contexto:
A empresa Ebytr está passando por problemas de produtividade/controle porque as pessoas colaboradoras vêm tendo dificuldade na organização de suas tarefas individuais. Por esse motivo, a diretora de produto Carolina Bigonha decidiu implantar uma nova forma de organizar as tarefas.

Você foi a pessoa contratada para desenvolver um sistema capaz de auxiliar as pessoas colaboradoras a se organizar e ter mais produtividade.
Na Ebytr o time de desenvolvimento utiliza a Stack MySQL, Express, React e Node para criar suas aplicações. Foi combinado com a Ebytr que você utilizará essa mesma Stack para resolver o problema de organização e produtividade da empresa.

### Requisitos técnicos:
- Front-End em React;
- Back-End em NodeJS, com MySQL;
- Arquitetura em camadas;

### Funcionalidades:
- Visualizar a lista de tarefas;
- Esta lista deve ser ordenável por ordem alfabética, data de criação ou por status;
- Inserir uma nova tarefa na lista;
- Remover uma tarefa da lista;
- Atualizar uma tarefa da lista;
- A tarefa deve possuir um status editável: pendente, em andamento ou pronto;

-----
## Projeto em produção
Estou adicionando commits com frequência, caso queira conferir a minha evolução é só visitar esse repositório. </br>
No momento só estou querendo fazer funcionar mas pretendo atualizar tudo para TypeScript em breve. </br>

## Instalação

```git clone git@github.com:iigorfelipe/lets-organize.git```

- Frontend

```cd lets-organize/app/frontend```

```npm install```

```npm start```

- Backend

```cd lets-organize/app/backend```

```npm install```

```npm run dev```

## Testes

- Frontend

```cd lets-organize/app/frontend```

```npm run test```

## Tecnologias usadas

- Git
- JavaScript
- React
- Hooks
- Jest
- CSS
- Context API
- NodeJS
- Express
- MySQL
- Axios

## Como usar

1. Adicionar uma tarefa:
    - Digite algo no campo "Digite uma tarefa" para habilitar o botão de adicionar.
    - Clica nele para adicionar sua tarefa.

2. Editar uma tarefa:
    - Acima do icone da lixeira, tem um icone de edição, clicar nele abrirá um campo "Edite sua tarefa" no final da lista.
    - Digite sua nova alteração nesse campo e confirma no icone de check à direta.

3. Remover uma ou várias tarefas:
    - Clique no icone da lixeira correspondente a tarefa caso deseje remover apenas uma.
    - Selecionar várias tarefas faz aparecer um novo icone (listinha com 'x') no topo.
    - Clicar nesse icone irá remover todas as tarefas selecionadas.

4. Adicionar status à sua tarefa:
    - Os status ficam abaixo do campo de "Edite sua tarefa".
    - São eles da esquerda pra direita: em andamento, em progresso e pronto.
    - Clicar em um deles fará sua tarefa ter o mesmo icone.

5. Ordenar sua lista de tarefas:
    - Clique em "Data de criação" no topo da lista para ver todas as opções.
    - Escolha entre: Data de criação, alfabetica ou status.

#### Observação
  O botão "Salvar lista" salva o estado atual da lista no banco de dados, quero futuramente implementar um login para quando um usuário logar recuperar somente as tarefas corretas desse usuário, mas por enquanto o botão só salva e não recupera os dados de volta, por isso não adicionei a instrução de como usar no passo a passo.

----

[ <source src="https://user-images.githubusercontent.com/87145566/177356559-05cf20ab-afb7-498c-a97b-7c5c305c7bd1.mp4" type="video/mp4">](https://user-images.githubusercontent.com/87145566/177356559-05cf20ab-afb7-498c-a97b-7c5c305c7bd1.mp4)

----
Caso queira conferir, acesse: https://iigorfelipe.github.io/lets-organize
