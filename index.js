// ejs Linguagem de Tamplate do Node

const express = require('express') // Servidor
const app = express()
const data = new Date();

app.set('view engine','ejs')

app.get('/', (req,resp)=>{
	console.log("Update aplication: "+new Date())
	// resp.send("<h1>Servidor usando express</h1>"+data);
	resp.render('Home')
})

app.listen(3000,(err)=>{
	if(err){
		console.log("Erro ao iniciar servidor com express\n")
	}else{
		console.log("Servidor Iniciado ...\n")
	}
})