const express = require('express');
const userRouter = require("./features/user/user.router");
const TaskRouter = require("./features/task/task.router");
const dbConnect = require("./config/db");
const authMiddleware = require('./middleware/auth.middleware');
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// app.use(authMiddleware);
app.use("/users", userRouter);
app.use("/tasks", TaskRouter);

app.listen(PORT, async()=>{
	await dbConnect();
	console.log("Server started at http://localhost:8080");
});