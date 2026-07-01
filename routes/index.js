let express = require("express");
let router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("index", {
		title: "Saúde em Linhas",
		erro: null,
		resultado: null,
	});
});

router.get("/api", function (req, res, next) {
	res.send({
		endpoint: "/api",
		banco: "PostgreSQL",
		description: "API para o projeto Saúde em Linhas",
		environment: process.env.NODE_ENV || "development",
	});
});

module.exports = router;
