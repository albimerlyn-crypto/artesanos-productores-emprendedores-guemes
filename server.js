const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

let productos = [];
let noticias = [];

app.get("/productos", (req,res)=>{
res.json(productos);
});

app.post("/productos", (req,res)=>{
const nuevo = req.body;
productos.push(nuevo);
res.json({ok:true});
});

app.get("/noticias",(req,res)=>{
res.json(noticias);
});

app.post("/noticias",(req,res)=>{
noticias.push(req.body);
res.json({ok:true});
});

app.listen(3000,()=>{
console.log("Servidor iniciado");
});
