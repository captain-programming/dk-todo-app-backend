const {Schema, model} = require('mongoose');

const taskSchema = new Schema({
	task: { type: String, require: true },
	important: { type: Boolean, require: true},
	urgent: { type: Boolean, require: true },
	completed: { type: Boolean, require: true },
	userid: {type: String, require: true},
	date: {type: String, require: true} 
});

const TaskModel  = model("task", taskSchema);

module.exports = TaskModel;