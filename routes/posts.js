const express = require("express");
const PostController = require("../controllers/PostController");
const { authentication, isAdmin } = require("../middlewares/authentication");
const router = express.Router();

router.post("/",authentication, PostController.create);
router.get("/", PostController.getAll);
router.get("/id/:id", PostController.getById);
router.get("/search/:title", PostController.getByName);
router.delete("/delete/:id",authentication,isAdmin, PostController.delete);

module.exports = router;
