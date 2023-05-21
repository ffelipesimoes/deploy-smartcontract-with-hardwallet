**[English below]**
# Deploy Smart Contract With Hard Wallet

Este projeto mostra como implantar um contrato inteligente Ethereum usando uma carteira (wallet) de hardware. Ele utiliza a Truffle Suite e o Truffle Dashboard.

## Pré-requisitos

- Node.js instalado (versão 16 ou superior)
- Truffle instalado (`npm install -g truffle`)
- [MetaMask](https://metamask.io/)
- Uma carteira de hardware compatível (por exemplo, Ledger, Trezor) 
- Uma wallet criada na metamask usando sua hardwallet. [Veja como fazer](https://support.ledger.com/hc/pt-br/articles/4404366864657-Conectar-sua-Ledger-%C3%A0-MetaMask?docs=true)
- Conexão com uma ou mais redes Ethereum 

## Configuração do Projeto

1. Clone o repositório:

   ```
   git clone https://github.com/ffelipesimoes/deploy-smartcontract-with-hardwallet.git
   ```

2. Entre no diretório do projeto:

   ```
   cd deploy-smartcontract-with-hardwallet
   ```

3. Instale as dependências do projeto:

   ```
   npm install
   ```

4. Renomeie o arquivo `.env.example` para `.env` e preencha-o com as informações necessárias, incluindo as variáveis de ambiente relacionadas à sua API Key(caso queria verificar o contrato na rede da Polygon)

   ```
   POLYGONSCAN_API_KEY="sua api key do polygonscan"
   ```

## Passos para implantar o contrato inteligente

1. Verifique se o contrato inteligente está correto e configurado no arquivo `contracts/lock.sol`.

2. Execute o comando `npx hardhat compile` para compilar o contrato:

   ```
   npx hardhat compile
   ```

3. Abra um novo terminal e rode o truffle dashboard. Ele roda por padrão em http://localhost:24012/rpcs:

   ```
   truffle dashboard
   ```
  
4. No primeiro terminal, faça o deploy do contrato utilizando o truffle dashboard:

  ```
  npx hardhat deploy --network truffle-dashboard
  ```

   **É aqui onde acontece a interação com a hardwallet e metamask. Abra a URL http://localhost:24012/rpcs no navegador que possui a metamask com a conta integrada com hardwallet. . O deploy será feito na rede que a metamask estiver definida, que pode ser `polygon`, `ethereum`, ou outra definida no na metamask.**

4. Após a implantação ser concluída, você pode acessar o endereço do contrato implantado e verificar os eventos e transações. 

## Interagindo com o Contrato

Para interagir com o contrato implantado, você pode usar o [hardhat-ethers](https://github.com/nomiclabs/hardhat/tree/master/packages/hardhat-ethers) plugin, o [MyEtherWallet](https://www.myetherwallet.com/), o [MetaMask](https://metamask.io/) ou uma interface personalizada.

## Contribuições e Problemas

Este projeto é um exemplo prático e um ponto de partida para implantar contratos inteligentes usando hardwallets.

Sinta-se à vontade para contribuir ou relatar problemas encontrados no projeto, criando uma nova [Issue](https://github.com/ffelipesimoes/deploy-smartcontract-with-hardwallet/issues) ou [Pull Request](https://github.com/ffelipesimoes/deploy-smartcontract-with-hardwallet/pulls).

**[Português acima]**

## Deploy Smart Contract With Hard Wallet

This project demonstrates how to deploy an Ethereum smart contract using a hardware wallet. It utilizes the Truffle Suite and the Truffle Dashboard.

## Prerequisites

- Node.js installed (version 16 or higher)
- Truffle installed (`npm install -g truffle`)
- [MetaMask](https://metamask.io/)
- A compatible hardware wallet (e.g., Ledger, Trezor)
- A wallet created in MetaMask using your hardware wallet. [See how to do it](https://support.ledger.com/hc/en-us/articles/4404366864657-Connect-your-Ledger-to-MetaMask?docs=true)
- Connection to one or more Ethereum networks

## Project Setup

1. Clone the repository:

   ```
   git clone https://github.com/ffelipesimoes/deploy-smartcontract-with-hardwallet.git
   ```

2. Enter the project directory:

   ```
   cd deploy-smartcontract-with-hardwallet
   ```

3. Install the project dependencies:

   ```
   npm install
   ```

4. Rename the `.env.example` file to `.env` and fill it with the necessary information, including the environment variables related to your API Key (if you want to verify the contract on the Polygon network):

   ```
   POLYGONSCAN_API_KEY="your polygonscan api key"
   ```

## Steps to deploy the smart contract

1. Check if the smart contract is correct and configured in the `contracts/lock.sol` file.

2. Run the `npx hardhat compile` command to compile the contract:

   ```
   npx hardhat compile
   ```

3. Open a new terminal and run the truffle dashboard. It runs by default on http://localhost:24012/rpcs:

   ```
   truffle dashboard
   ```

4. In the first terminal, deploy the contract using the truffle dashboard:

  ```
  npx hardhat deploy --network truffle-dashboard
  ```

   **This is where the interaction with the hard wallet and MetaMask takes place. Open the URL http://localhost:24012/rpcs in the browser with the MetaMask connected to the hardware wallet account. The deployment will be performed on the network set in MetaMask, which could be `polygon`, `ethereum`, or any other defined in MetaMask.**

4. After deployment is complete, you can access the deployed contract address and check events and transactions.

## Interacting with the Contract

To interact with the deployed contract, you can use the [hardhat-ethers](https://github.com/nomiclabs/hardhat/tree/master/packages/hardhat-ethers) plugin, [MyEtherWallet](https://www.myetherwallet.com/), [MetaMask](https://metamask.io/) or a custom-built interface.

## Contributions and Issues

This project is a practical example and a starting point for deploying smart contracts using hardware wallets.

Feel free to contribute or report any issues found in the project by creating a new [Issue](https://github.com/ffelipesimoes/deploy-smartcontract-with-hardwallet/issues) or [Pull Request](https://github.com/ffelipesimoes/deploy-smartcontract-with-hardwallet/pulls).