const { User, Post } = require("../models/index.js");

const UserController = {
  create(req, res) {
    req.body.role = "user";
    User.create({ ...req.body })
      .then((user) =>
        res.status(201).send({ message: "Usuario creado con éxito", user })
      )
      .catch(console.error);
  },
  getAll(req, res) {
    User.findAll({
      include: [Post],
    })
      .then((users) => res.send(users))
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message: "Ha habido un problema al cargar las publicaciones",
        });
      });
  },
  async delete(req, res) {
    try {
      await User.destroy({
        where: {
          id: req.params.id,
        },
      });
      await Post.destroy({
        where: {
          UserId: req.params.id,
        },
      });
      res.send("Erradicado. Con éxito.");
    } catch (error) {
      console.log(err);
      res.status(500).send({
        message:
          "Ha habido un problema al eliminar el usuario y sus publicaciones",
      });
    }
  },
  async update(req, res) {
    await User.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.send("Usuario actualizado con éxito");
  },
};

module.exports = UserController;
