let dbmodel=require("../models/savedeptmodel.js");
let empcrud=require("../models/empcrudmodel.js");

exports.newemp=(req,res)=>{
    let promise=dbmodel.getAllDept();

    promise.then((result)=>{
        
    res.render("newemp.ejs",{deptList:result,msg:""});

        
    });

}
exports.saveEmployee=(req,res)=>{
    let{name,email,contact,sal,deptid}=req.body;
    let filename=req.file.filename;
    console.log(filename);
    
    let promise=empcrud.saveEmployee(name,email,contact,sal,filename,deptid);

    promise.then((result)=>{
        let p=dbmodel.getAllDept();

    p.then((r)=>{
        
    res.render("newemp.ejs",{deptList:r,msg:result});


    });
    })
    .catch((err)=>{
        console.log(err);

       res.send(err);

    });
}

    exports.verifyEmail=(req,res)=>{
        let userEmail=req.query.e;
        let promise=empcrud.verifyEmail(userEmail);

        promise.then((result)=>{
           
            if(result.length>0){
                res.send("email address already exist");

            }
            else
            {
                res.send("");

            }

        });
}

exports.viewEmployee=(req,res)=>{

     let p=dbmodel.getAllDept();

    p.then((r)=>{
        
    res.render("viewemployee.ejs",{deptList:r});


    });
}

exports.getEmployeeByDeptId=(req,res)=>{

    
     let deptId=parseInt(req.query.deptId);
     console.log(deptId);
     let promise=empcrud.getEmployeeByDeptID(deptId);
    promise.then((result)=>{
       res.send(result);
    })
}





