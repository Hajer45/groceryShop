const mongoose = require("mongoose");

const TypeSchema = new mongoose.Schema(
	{
		name: { type: String },
		
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Type", TypeSchema);
