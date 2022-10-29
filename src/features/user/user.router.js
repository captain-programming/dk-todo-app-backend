const express = require('express');
const UserModel = require('./user.model');

const user = express.Router();

// user.get("/", async(req, res)=>{
// 	res.send("Users");
// });
user.post("/signup", async(req, res)=>{
	const {name, email, password, role} = req.body;
	try{
		const user = new UserModel({name, email, password, role});
		// console.log(user);
		await user.save();
		res.send("User created successfylly");
	}catch(e){
		// console.log(e.message);
		res.send(e.message);
	}
});

user.post("/login", async(req, res)=>{
	const {email, password} = req.body;

	try{
		const user = await UserModel.findOne({email, password});

		if(!user){
			return res.status(401).send("Invalid credentials");
		};

		res.send({message: "Login Success", token: "Not provide"});
	}catch(e){
		// console.log(e.message);
		res.send(e.message);
	}
})

module.exports = user;