var data = new Date();
var dia = data.getDate();
var mes = (data.getMonth()+1);
var ano = data.getFullYear();

var horas = data.getHours();
var minutos = data.getMinutes();

let horarioAtual = horas+':'+minutos
let dataAtual = dia+'/'+mes+'/'+ano;

let momento = horarioAtual+" - "+dataAtual;

let salvar = document.getElementById('salvar');
let baixar = document.getElementById('baixar');
let carregar = document.getElementById('carregar');

let hora_00h = document.getElementById('00h');
let hora_01h = document.getElementById('01h');
let hora_02h = document.getElementById('02h');
let hora_03h = document.getElementById('03h');
let hora_04h = document.getElementById('04h');
let hora_05h = document.getElementById('05h');
let hora_06h = document.getElementById('06h');
let hora_07h = document.getElementById('07h');
let hora_08h = document.getElementById('08h');
let hora_09h = document.getElementById('09h');
let hora_10h = document.getElementById('10h');
let hora_11h = document.getElementById('11h');
let hora_12h = document.getElementById('12h');
let hora_13h = document.getElementById('13h');
let hora_14h = document.getElementById('14h');
let hora_15h = document.getElementById('15h');
let hora_16h = document.getElementById('16h');
let hora_17h = document.getElementById('17h');
let hora_18h = document.getElementById('18h');
let hora_19h = document.getElementById('19h');
let hora_20h = document.getElementById('20h');
let hora_21h = document.getElementById('21h');
let hora_22h = document.getElementById('22h');
let hora_23h = document.getElementById('23h');
let hora_24h = document.getElementById('24h');

let listaDeHorarios = [hora_00h,hora_01h,hora_02h,hora_03h,hora_04h,hora_05h,hora_06h,hora_07h,hora_08h,hora_09h,hora_10h,hora_11h,hora_12h,hora_13h,hora_14h,hora_15h,hora_16h,hora_17h,hora_18h,hora_19h,hora_20h,hora_21h,hora_22h,hora_23h,hora_24h];
let listaSalvar = ["log-00h","log-01h","log-02h","log-03h","log-04h","log-05h","log-06h","log-07h","log-08h","log-09h","log-10h","log-11h","log-12h","log-13h","log-14h","log-15h","log-16h","log-17h","log-18h","log-19h","log-20h","log-21h","log-22h","log-23h"];
let texto=[];

let nome = document.getElementById('nome');



salvar.addEventListener('click',(e)=>{
    
    for(let i = 0;i<listaDeHorarios.length-1;i++){
        if(listaDeHorarios[i].checked){
            let n = i.toString();
            if(n.length==1){
                n="0"+n
            }
            document.getElementById("log-"+n+"h").innerText += " - "+nome.value+' - '+momento;
            let json={log:n+"h",nome:nome.value,horario:momento}
	    
	    fetch('/salvar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ json })
            })
            localStorage.setItem("log-"+n+"h",JSON.stringify(json));

            document.getElementById(n+"h").classList.add("remover");
            listaDeHorarios[i].checked = false
        }else{
            listaDeHorarios[i].checked = false
        }
    }
});
baixar.addEventListener('click',(e)=>{

     fetch('/baixar');
    /*let textoDownload = texto.join('\n');
   
    const blob = new Blob([textoDownload], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Log Backup - "+dataAtual;
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(url);
    
    */
})
 
       
