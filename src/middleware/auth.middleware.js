const authMiddleware = (req, res, next)=>{
	const {token} = req.headers;
	if(!token){
		return res.send("You are not Authorized, please sign in");
	}
	return next();
};

module.exports = authMiddleware;