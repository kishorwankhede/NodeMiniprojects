
let deptmodel=require("../models/savedeptmodel.js");
exports.saveDept=((req,res)=>{
    let {name}=req.body;
    let promise=deptmodel.saveDept(name);
    promise.then((result)=>{
     
        res.render("adddept.ejs",{abc:result});
    }).catch((err)=>{
       res.render("adddept.ejs",{abc:result});
    });
});




exports.homePage=(req,res)=>{
    res.render("home.ejs");  
}
exports.newDept=(req,res)=>{
    res.render("adddept.ejs",{abc:""});

}

exports.getAllDept=(req,res)=>{
    let promise=deptmodel.getAllDept();
    promise.then((result)=>{
      res.render("viewdept.ejs",{deptList:result});

    });

    promise.catch((err)=>{
        console.log(err);

        res.send(err);

    });
}


exports.delDept=(req,res)=>{
    let did=parseInt(req.query.did);
    let promise=deptmodel.delDeptById(did);

    promise.then((result)=>{
        let p=deptmodel.getAllDept();

         p.then((result)=>{
      res.render("viewdept.ejs",{deptList:result});

    });

    p.catch((err)=>{
        console.log(err);

        res.send(err);

    });
    });
    promise.catch((err)=>{

    });

}


exports.updateDept=(req,res)=>{
    res.render("updatedept.ejs",{deptName:req.query.dn,
                                  deptId:req.query.did                                      
    });

}
exports.deptFinalUpdate=(req,res)=>{
    let {id,name}=req.body;

}


exports.deptFinalUpdate=(req,res)=>{
    let {did,name}=req.body;
    let promise=deptmodel.finalUpdateDept(did,name);
    promise.then((result)=>{
       let p=deptmodel.getAllDept();
       p.then((result)=>{
        res.render("viewdept.ejs",{deptList:result});

       }) 
    });
    promise.catch((err)=>{
        res.send("dept not updated");

    })
}


exports.searchDeptByUsingName=((req,res)=>{

    let name=req.query.dn;
    let promise=deptmodel.getDeptByName(name);
    promise.then((result)=>{
        res.json(result);

    }).catch((err)=>{
        res.send("something went wrong");
        
    })
});