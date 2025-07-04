let pmodel=require("../models/productmodel.js");



exports.addproduct=((req,res)=>{

        let {productname,category,price,quantity}=req.body;

        let promise=pmodel.addproduct(productname,category,price,quantity);
        console.log(productname,category,price,quantity);
        promise.then((result)=>{
                res.render("addproduct.ejs",{msg:result});

        }).catch((err)=>{
            res.render("addproduct.ejs",{msg:err});

        
        });
});

exports.homePage=(req,res)=>{
    res.render("home.ejs");  
}


exports.addprodPage=(req,res)=>{
    res.render("addproduct.ejs");  
}



exports.getAllProducts=(req,res)=>{
    let promise=pmodel.getAllProduct();
    promise.then((result)=>{
        res.render("viewallproduct.ejs",{ProdList:result}); 
    });
    promise.catch((err)=>{
        res.send(err);
    });
}




exports.searchCategoryByName=((req,res)=>{
    let category=req.query.pid;
   let promise=pmodel.getcategoryByName(category);
   promise.then((result)=>{
    res.json(result);
   }).catch((err)=>{
    res.send("Something went wrong...");
   })
});




exports.deleteProduct = (req, res) => {
    const id = req.query.id;

    pmodel.deleteById(id)
        .then(() => {
            res.redirect("/getAllProd"); // Make sure this matches your "view" route
        })
        .catch((err) => {
            console.error("Error deleting product:", err);
            res.status(500).send("Internal Server Error");
        });
};




exports.updateProduct=(req,res)=>{
    res.render("updateProduct.ejs",{productname:req.query.productname,
                                category:req.query.category,
                                price:req.query.price,
                                quantity:req.query.quantity,
                                id:req.query.id

    });
}

exports.ProductFinalUpdate=(req,res)=>{
    let {id,productname,category,price,quantity}=req.body;
    let promise=pmodel.finalUpdateProduct(id,productname,category,price,quantity);
    console.log(id,productname,category,price,quantity);
    
    promise.then((result)=>{
       let p=pmodel.getAllProduct();
    p.then((result)=>{
        res.render("viewallproduct.ejs",{ProdList:result}); 
    });
    });
    promise.catch((err)=>{
        res.send("Category Not Updated... ");
    });
}