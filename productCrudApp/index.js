let app=require("./src/app");
require("dotenv").config();
app.listen(process.env.server_port,()=>{
    console.log("server started");
    

});