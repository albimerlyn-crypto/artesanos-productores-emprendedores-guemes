const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

let usuarios = [];
let productos = [];

app.post("/registro",(req,res)=>{

const usuario=req.body.usuario
const password=req.body.password

usuarios.push({usuario,password})

res.json({mensaje:"usuario creado"})

})

app.post("/login",(req,res)=>{

const usuario=req.body.usuario
const password=req.body.password

const encontrado = usuarios.find(
u=>u.usuario===usuario && u.password===password
)

if(encontrado){

res.json({login:true})

}else{

res.json({login:false})

}

})

app.get("/productos",(req,res)=>{

res.json(productos)

})

app.post("/productos",(req,res)=>{

productos.push(req.body)

res.json({ok:true})

})

app.listen(3000,()=>{

console.log("Servidor iniciado")

})
