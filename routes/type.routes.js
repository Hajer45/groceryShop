const {
	getTypes,
	createType,
	getType,
	deleteType,
	updateType,
} = require("../controllers/type.controllers");

const router = require("express").Router();

router.get("/", getTypes);
router.get("/:facultyId", getType);
router.delete("/:facultyId", deleteType);
router.put("/:facultyId", updateType);
router.post("/", createType);

module.exports = router;
