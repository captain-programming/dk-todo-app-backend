const mongoose = require("mongoose");

const dbConnect = async()=>{
	return mongoose.connect("mongodb+srv://dinesh103:dinesh2020@cluster0.3pvw9hk.mongodb.net/dktodoapp?retryWrites=true&w=majority").then(()=>{
		console.log("connection successful");
	}).catch((err)=> console.log('No connection'));
};

module.exports = dbConnect;