# Order API

API REST desenvolvida em Node.js para gerenciamento de pedidos.

## Tecnologias utilizadas

- Node.js
- Express
- MongoDB Atlas
- Mongoose

## Funcionalidades

A API permite gerenciar pedidos com as seguintes operações:

- Criar um novo pedido
- Buscar um pedido pelo número
- Listar todos os pedidos
- Atualizar um pedido
- Deletar um pedido

## Endpoints

### Criar pedido
POST /order

### Buscar pedido por ID
GET /order/:orderId

Exemplo:
GET /order/v10089015vdb

### Listar pedidos
GET /order/list

### Atualizar pedido
PUT /order/:orderId

### Deletar pedido
DELETE /order/:orderId

## Exemplo de requisição

```json
{
  "numeroPedido": "v10089015vdb-01",
  "valorTotal": 10000,
  "dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
  "items": [
    {
      "idItem": "2434",
      "quantidadeItem": 1,
      "valorItem": 1000
    }
  ]
}
