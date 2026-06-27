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

module.exports = router;
