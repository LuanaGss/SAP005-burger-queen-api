const dbOrders = require("../db/models")

class ordersController {
    static async getOrders(req, res) {
        const orders = await dbOrders.Orders.findAll()
        res.status(200).json(orders);
    }

    static async postOrders(req, res) {
        const orders = await req.body
        const result = await dbOrders.Orders.create(orders);
        res.status(200).json(result);
    }

    static async getOrdersById(req, res) {
        const id = req.params.id
        const orders = await dbOrders.Orders.findOne({
            where: { id: id },
            attributes: {
                exclude: ['password']
            }
        });
        if (orders == null) {
            res.status(404).json("Usúario não encontrado!")
        } else {
            res.status(200).json(orders)
        }
    }

    static async updateOrders(req, res) {
        const id = req.params.id
        const order = await req.body
        const orders = await dbOrders.Orders.update(order, { where: { id: id } })
        res.status(200).json(orders)
    }

    static async deleteOrders(req, res) {
        const id = req.params.id
        const orders = await dbOrders.Orders.destroy({ where: { id: id } })
        res.status(201).json(orders)
    }
};

module.exports = ordersController