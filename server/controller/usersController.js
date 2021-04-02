const dbUsers = require("../db/models")

class userController {
    static async getUsers(req, res) {
        const users = await dbUsers.Users.findAll()
        res.status(200).json(users);
    }

    static async postUsers(req, res) {
        const user = await req.body
        const result = await dbUsers.Users.create(user);
        res.status(200).json(result);
    }

    static async getUserById(req, res) {
        const id = req.params.id
        const users = await dbUsers.Users.findOne({
            where: { id: id },
            attributes: {
                exclude: ['password']
            }
        });
        if (users == null) {
            res.status(404).json("Usúario não encontrado!")
        } else {
            res.status(200).json(users)
        }
    }

    static async updateUsers(req, res) {
        const id = req.params.id
        const user = await req.body
        const users = await dbUsers.Users.update(user, { where: { id: id } })
        res.status(200).json(users)
    }

    static async deleteUser(req, res) {
        const id = req.params.id
        const users = await dbUsers.Users.destroy({ where: { id: id } })
        res.status(201).json(users)
    }
};

module.exports = userController

