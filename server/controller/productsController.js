const dbProducts = require("../db/models")

class productsController {
    static async getProducts(req, res) {
        const products = await dbProducts.Products.findAll()
        res.status(200).json(products);
    }

    static async postProducts(req, res) {
        const products = await req.body
        const result = await dbProducts.Products.create(products);
        res.status(200).json(result);
    }

    static async getProductsById(req, res) {
        const id = req.params.id
        const products = await dbProducts.Products.findOne({
            where: { id: id },
            attributes: {
                exclude: ['password']
            }
        });
        if (products == null) {
            res.status(404).json("Usúario não encontrado!")
        } else {
            res.status(200).json(products)
        }
    }

    static async updateProducts(req, res) {
        const id = req.params.id
        const product = await req.body
        const products = await dbProducts.Products.update(product, { where: { id: id } })
        res.status(200).json(products)
    }

    static async deleteProducts(req, res) {
        const id = req.params.id
        const products = await dbProducts.Products.destroy({ where: { id: id } })
        res.status(201).json(products)
    }
};

module.exports = productsController