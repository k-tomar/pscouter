var ctrl = require("../app/controller/controller.js");

module.exports=function(app,router)
{
	router.get("/user", ctrl.get_users);
	router.put("/user", ctrl.update_users); 
	
	app.use("/",router);
};
