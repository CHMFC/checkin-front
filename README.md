# Check-In App 🚀

Um aplicativo móvel simples, desenvolvido com React Native e Expo, para facilitar o processo de check-in em eventos, locais ou compromissos.

## 📝 Descrição

O **CheckIN** é um aplicativo móvel que une a descoberta inteligente de lugares com uma experiência social conectada. O projeto nasceu da convergência de duas visões complementares sobre experiências urbanas mediadas por tecnologia.

A plataforma combina:
* **Descoberta de Lugares:** Recomendações contextuais e inteligentes de "rolês", considerando a localização do usuário, suas preferências e o momento.
* **Conexão Social:** Funcionalidades que permitem ao usuário saber onde seus amigos estão, facilitando encontros e promovendo interações sociais com base na presença geográfica.

O resultado é uma solução que responde não apenas *"aonde ir?"*, mas também *"com quem?"*. A filosofia do projeto é usar **lugares como destino e pessoas como ponte**, transformando a maneira como descobrimos a cidade e nos conectamos com nossa rede social.

## ✨ Funcionalidades

* 🗺️ Descoberta de lugares com base em localização, contexto e preferências.
* 📍 Visualização da localização de amigos em tempo real (com permissão).
* 📅 Facilitação de encontros e criação de eventos.
* 📲 Check-in em locais para compartilhar sua presença.
* 👤 Perfis de usuário e gerenciamento de amizades.
* 📜 Histórico de locais visitados e encontros.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes tecnologias:

* [**React Native**](https://reactnative.dev/) - Framework para desenvolvimento de aplicativos móveis multiplataforma.
* [**Expo**](https://expo.dev/) - Plataforma e conjunto de ferramentas para construir e rodar apps React Native.
* [**JavaScript**](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem de programação.
* [**React Navigation**](https://reactnavigation.org/) - Para o gerenciamento de rotas e navegação.
* [**Expo Camera**](https://docs.expo.dev/versions/latest/sdk/camera/) - Para a funcionalidade de leitura de QR Code.

## 📸 Telas do Aplicativo

## ⚙️ Como Rodar o Projeto

Siga os passos abaixo para executar o projeto em seu ambiente de desenvolvimento local.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina:
* [Node.js](https://nodejs.org/en/) (versão LTS recomendada)
* [Git](https://git-scm.com/)
* [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
* O aplicativo **Expo Go** no seu smartphone (disponível na [App Store](https://apps.apple.com/us/app/expo-go/id982107779) e [Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&gl=US))

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/CHMFC/checkin-front.git](https://github.com/CHMFC/checkin-front.git)
    ```

2.  **Acesse a pasta do projeto:**
    ```bash
    cd Check-In
    ```

3.  **Instale as dependências:**
    ```bash
    # Se você usa NPM
    npm install

    # Ou se você usa Yarn
    yarn install
    ```

4.  **Inicie o servidor de desenvolvimento do Expo:**
    ```bash
    npx expo start
    ```

5.  **Teste o aplicativo:**
    * Após o comando acima, um QR Code será exibido no seu terminal.
    * Abra o aplicativo **Expo Go** no seu celular e escaneie o QR Code.
    * O aplicativo "Check-In" será carregado no seu dispositivo para testes.

    Alternativamente, você pode executar o app em um emulador/simulador pressionando `a` (para Android) ou `i` (para iOS) no terminal onde o Expo está rodando.

## 🤝 Contribuição

Contribuições são o que tornam a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1.  Faça um *Fork* do projeto
2.  Crie uma *Branch* para sua feature (`git checkout -b feature/AmazingFeature`)
3.  Faça o *Commit* de suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4.  Faça o *Push* da sua Branch (`git push origin feature/AmazingFeature`)
5.  Abra um *Pull Request*

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
