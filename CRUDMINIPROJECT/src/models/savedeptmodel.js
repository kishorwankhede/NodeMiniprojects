let db=require("../../db.js");

exports.saveDept=(deptname)=>{
    return new Promise((resolve,reject)=>{

        db.query("insert into dept values('0',?)",[deptname],(err,result)=>{
            if(err)
            {
                console.log(err);

                reject("dept not save");

            }
            else{
                console.log(result);
                
                resolve("dept save successfully...");
                
            }
        });
    });
}

exports.getAllDept=()=>{
    return new Promise((resolve,reject)=>{
        db.query("select *from dept",(err,result)=>{
            if(err)
            {
                reject(err);

            }
            else{
                resolve(result);

            }
        });
    });
}


exports.delDeptById=(did)=>{
    return new Promise((resolve,reject)=>{
        db.query("delete from dept where deptid=?",[did],(err,result)=>{
            if(err)
            {
                console.log(err);

                reject(err);
            }
            else
            {
                resolve("success");

            }
        });
    });
}


exports.finalUpdateDept=(did,name)=>{
    return new Promise((resolve,reject)=>{
        db.query("update dept set deptname=? where deptid=?",[name,did],(err,result)=>{
            if(err)
            {
                console.log(err);
                reject(err);

            }
            else
            {
                resolve("success");

            }

        });
    });
}


exports.getDeptByName=(deptname)=>{

    return new Promise((resolve,reject)=>{
    db.query("select *from dept where deptname like '%"+deptname+"%'",(err,result)=>{
        if(err)
        {
            reject(err);
        }
        else
        {
            resolve(result);
            
        }

    })

    });
}

exports