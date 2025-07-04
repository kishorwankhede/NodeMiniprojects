let db=require("../../db.js");

exports.addproduct=(productname,category,price,quantity)=>{

    return new Promise((resolve,reject)=>{
       console.log(productname,category,price,quantity);
        db.query("insert into product values('0',?,?,?,?)",[productname,category,price,quantity],(err,result)=>{

            if(err)
            {
                
                reject(err);

            }
            else
            {
                
                resolve("product save successfully");

            }
        });
    });
}

exports.getAllProduct=()=>{
    return new Promise((resolve,reject)=>{
        db.query("select * from product",(err,result)=>{
            if(err){
                reject(err);
            }else{
                resolve(result);
            }
        });
    });
};


exports.getcategoryByName=(category)=>{
    return new Promise((resolve,reject)=>{
        db.query("select *from product where category like '%"+category+"%'",(err,result)=>{
            if(err)
            {
                reject(err);
            }
            else{
                resolve(result);
            }
        })
    });
}


exports.deleteById = (id) => {
    return new Promise((resolve, reject) => {
        db.query("DELETE FROM product WHERE id = ?", [id], (err, result) => {
            if (err) reject(err);
            else resolve("Product deleted");
        });
    });
};





exports.finalUpdateProduct=(id,productname,category,price,quantity)=>{
    return new Promise((resolve,reject)=>{
         db.query("update product set productname=?,category=?, price=?, quantity=? where id=?",[productname,category,price,quantity,id],(err,result)=>{
         if(err){
            reject(err);
         }
         else{
            resolve("success");
         }
           
         });
    });
   
}