const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
	{
		name: { type: String },
		price: { type: Number },
		instock: { type: Number },
		type: { type: mongoose.Schema.Types.ObjectId, ref: "Type" },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Item", ItemSchema);
