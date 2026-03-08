const Order = require('../models/Order');
const { mapOrderPayload } = require('../utils/mapper');

const createOrder = async (req, res) => {
  try {
    const mappedOrder = mapOrderPayload(req.body);

    const existingOrder = await Order.findOne({ orderId: mappedOrder.orderId });

    if (existingOrder) {
      return res.status(409).json({
        message: 'Pedido já cadastrado'
      });
    }

    const order = await Order.create(mappedOrder);

    return res.status(201).json({
      message: 'Pedido criado com sucesso',
      data: order
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Erro ao criar pedido',
      error: error.message
    });
  }
};

const getOrderById = async (req, res) => {
  try {
    const { orderId } = req.params;

    const order = await Order.findOne({ orderId });

    if (!order) {
      return res.status(404).json({
        message: 'Pedido não encontrado'
      });
    }

    return res.status(200).json(order);
  } catch (error) {
    return res.status(500).json({
      message: 'Erro ao buscar pedido',
      error: error.message
    });
  }
};

const listOrders = async (req, res) => {
  try {
    const orders = await Order.find();

    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({
      message: 'Erro ao listar pedidos',
      error: error.message
    });
  }
};

const updateOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    const mappedOrder = mapOrderPayload(req.body);
    mappedOrder.orderId = orderId;

    const updatedOrder = await Order.findOneAndUpdate(
      { orderId },
      mappedOrder,
      { new: true }
    );

    if (!updatedOrder) {
      return res.status(404).json({
        message: 'Pedido não encontrado'
      });
    }

    return res.status(200).json({
      message: 'Pedido atualizado',
      data: updatedOrder
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Erro ao atualizar pedido',
      error: error.message
    });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    const deleted = await Order.findOneAndDelete({ orderId });

    if (!deleted) {
      return res.status(404).json({
        message: 'Pedido não encontrado'
      });
    }

    return res.status(200).json({
      message: 'Pedido removido'
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Erro ao deletar pedido',
      error: error.message
    });
  }
};

module.exports = {
  createOrder,
  getOrderById,
  listOrders,
  updateOrder,
  deleteOrder
};