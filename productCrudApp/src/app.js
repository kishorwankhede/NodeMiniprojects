let express = require("express");
let bodyParser = require("body-parser");
let db = require("../db.js");
let router = require("./routes/route.js");
require("dotenv").config();

let app = express(); // ✅ Declare app first

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// View engine
app.set("view engine", "ejs");

// Route binding
app.use("/", router);

module.exports = app;



//for delete logic
app.get('/deletefood', async (req, res) => {
  const id = req.query.id;

  try {
    const result = await db.query('DELETE FROM products WHERE id = ?', [id]);
    
    // Optionally set a success message
    res.redirect('/viewproducts'); // Or wherever your view page is
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).send("Internal Server Error");
  }
});
