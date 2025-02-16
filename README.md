# 📞 Contact Search Project

Este projeto é uma aplicação simples que permite buscar contatos por nome e exibir seu número de telefone. Ele utiliza JavaScript puro para manipulação do DOM e lógica de busca.

## 📌 Funcionalidades

- Buscar um contato pelo nome digitado no campo de entrada.
- Exibir o número de telefone correspondente caso o contato seja encontrado.
- Informar ao usuário caso o contato não esteja na lista.
- Implementação de busca utilizando `for` e `for...of`.

## 🛠️ Tecnologias Utilizadas

- HTML
- CSS
- JavaScript (DOM Manipulation)

## 🚀 Como Rodar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/dkzinn98/contact-search.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd contact-search
   ```
3. Abra o arquivo `index.html` no seu navegador.

## 📜 Estrutura do Código

### `script.js`

O código possui uma estrutura simples para buscar contatos dentro de um array predefinido:

- **Lista de contatos:**
  - Um array de objetos `contacts`, onde cada contato contém um `name` e um `number`.

- **Função `search()`**:
  - Percorre a lista de contatos usando `for` ou `for...of`.
  - Compara o nome digitado no input com os nomes cadastrados, convertendo ambos para lowercase para evitar problemas com diferenciação de maiúsculas e minúsculas.
  - Exibe o contato encontrado ou uma mensagem de erro caso não exista.

- **Manipulação do DOM**:
  - A busca é realizada ao clicar em um botão, e o resultado é exibido em um elemento `<p>` na tela.

## 📌 Melhorias Futuras

- Adicionar suporte para adicionar novos contatos dinamicamente.
- Implementar um sistema de armazenamento local (`localStorage`) para salvar contatos.
- Melhorar o design da interface do usuário.
- Criar uma versão com ReactJS.

## 📝 Licença

Este projeto está sob a licença MIT. Para mais detalhes, consulte o arquivo [LICENSE](LICENSE).

---

Feito com ❤️ por [Deryk Silva](https://github.com/dkzinn98) 🚀
