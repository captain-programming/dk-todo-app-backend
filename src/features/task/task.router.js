const express = require('express');
const TaskModel = require('./task.model');

const  task= express.Router();

task.get("/", async(req, res)=>{
	const {userid} = req.headers;
	if(!userid){
		return res.status(401).send("You are not authorized, Please login...")
	};

	try{
		const tasks = await TaskModel.find({userid: userid});
		return res.send(tasks);	
	}catch(e){
		console.log(e.message);
		res.send(e.message);
	};
});

task.get("/:id", async(req, res)=>{
	const {id} = req.params;
	const {userid} = req.headers;

	if(!userid){
		return res.status(401).send("You are not authorized, Please login...")
	};

	try{
		const tasks = await TaskModel.find({userid: userid, _id: id});
		return res.send(tasks);
	}catch(e){
		console.log(e.message);
		res.send(e.message);
	};
});
task.post("/", async(req, res)=>{
	const {task,important,urgent,completed} = req.body;
	const {userid} = req.headers;

	if(!userid){
		return res.status(401).send("You are not authorized, Please login...")
	};

	try{
		const taskCreate = new TaskModel({task, important, urgent, completed, userid});
		await taskCreate.save();
		return res.send("Successfully task created");
	} catch(e){
		console.log(e.message);
		res.send(e.message);
	};
	// console.log(userid);
	
});
task.delete("/:id", async(req, res)=>{
	const {id} = req.params;
	const {userid} = req.headers;

	if(!userid){
		return res.status(401).send("You are not authorized, Please login...")
	};

	try{
		const taskDelete = await TaskModel.deleteOne({userid: userid, _id: id});
		return res.send(taskDelete);
	}catch(e){
		console.log(e.message);
		res.send(e.message);
	};
});

module.exports = task;