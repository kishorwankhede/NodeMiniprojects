let db=require("../../db.js");

exports.saveEmployee=(...empData)=>{
    return new Promise((resolve,reject)=>{
    
    db.query("insert into employee value('0',?,?,?,?,?,?)",[...empData],(err,result)=>{
        if(err)
        {
            reject("not save, "+err);
            console.log(err);
            
        }
        else
        {
            resolve("Employee save successfully");
        }

    })

    });
}
exports.verifyEmail=(userEmail)=>{
    return new Promise((resolve,reject)=>{
        db.query("select *from employee where email=?",[userEmail],(err,result)=>{
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



exports.getEmployeeByDeptID=(deptId)=>{
    return new Promise((resolve,reject)=>{
        db.query("select e.name,e.email,e.contact,e.photo,d.deptname from employee e inner join dept d on e.deptid=d.deptid where d.deptid=?",[deptId],(err,result)=>{
            if(err)
            {
                console.log(err);

                reject(err);
            }
            else
            {
                console.log(result);

                resolve(result);
                
            }
        })

    });
}