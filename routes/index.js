var express = require('express');
var router = express.Router();

var fs = require('fs');
var path = require('path');
let texto=[];
let lista = [];
let listaSalvar = ["log-00h","log-01h","log-02h","log-03h","log-04h","log-05h","log-06h","log-07h","log-08h","log-09h","log-10h","log-11h","log-12h","log-13h","log-14h","log-15h","log-16h","log-17h","log-18h","log-19h","log-20h","log-21h","log-22h","log-23h"];
	
const diretorioDestino = "/var/www/html/BackupApp---NodeJS/arquivos";


router.get('/', function(req, res, next) {
  
  for(let i = 0;i<listaSalvar.length;i++){
	let caminhoAbsoluto = path.join(diretorioDestino, listaSalvar[i]);

	fs.readFile(caminhoAbsoluto,'utf-8',(err,data)=>{
		let json = JSON.parse(data);
		if(json.log !== "00"){
			lista.push(" - "+json.nome+" - "+json.horario);
		}else{
			lista.push(' ');
		}
	})
 }
  console.log(lista);
  
  res.render('index',{ lista });
  lista=[]
  		
});

router.get('/baixar', (req, res) => {
	let reset = '{"log":"00","nome":"neinhum","horario":"00"}';
   listaSalvar.forEach((e)=>{
	   let caminho = path.join(diretorioDestino,e);
	   fs.writeFile(caminho, reset, (err) => {
  if (err) {
    console.error('Erro ao criar o arquivo:', err);
    return;
  }
  console.log('Arquivo criado com sucesso!')
});

   })
   /*
   let textoDownload = texto.join('\n');

    const blob = new Blob([textoDownload], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Log Backup - "+dataAtual;
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);


*/ 
	   
});

router.post('/salvar',(req,res)=>{

	const informacao = req.body.json;
	let caminho = path.join(diretorioDestino,'log-'+informacao.log);
	fs.writeFile(caminho, JSON.stringify(informacao), (err) => {
  if (err) {
    console.error('Erro ao criar o arquivo:', err);
    return;
  }
  console.log('Arquivo criado com sucesso!')
  })			
  

});

module.exports = router;
