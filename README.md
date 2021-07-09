# TUDUApplication

### Instruções:
- Foi criado um banco tipo mock para realizar uma simulação de uma api, que encontra-se na pasta DB. Para usar é necessário entrar na pasta e digitar o seguinte comando:
```
json-server --watch DB.json
```
- Foi colocado o baseUrl no arquivo environment.
- Para poder rodar o projeto é necessário rodar o seguinte comando:
```
npm start
```
### Algumas explicações:
- Ao logar no sistema o mesmo grava o id do membro como se fosse um token, como não tenho um token vindo de uma requisição, decidi gravar no localstorage o id mesmo do membro para realizar esta simulação.
- Foi colocado o guard nas rotas, justamente para proteção das mesmas para não acessarem sem estar logado.
- Na parte de pesquisa do Planner é só clicar em uma data e clicar no botão para pesquisar as tarefas cadastradas com aquele prazo.
- Resolvi criar uma tela de membros que lista membros cadastrados.
- Esta tendo notificações seja de sucesso ou de erro.

### Este projeto será atualizado no github
```

```