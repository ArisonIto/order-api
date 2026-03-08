const mapOrderPayload = (payload) => {
  return {
    orderId: payload.numeroPedido.split('-')[0],
    value: payload.valorTotal,
    creationDate: new Date(payload.dataCriacao),
    items: payload.items.map((item) => ({
      productId: Number(item.idItem),
      quantity: item.quantidadeItem,
      price: item.valorItem
    }))
  };
};

module.exports = { mapOrderPayload };