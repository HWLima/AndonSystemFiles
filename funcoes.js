
$(document).ready(function(){
	
		jQuery('body').animate({opacity:1}, 2000, "linear", function(){});
		$('body').css({'backgroundColor': 'lightgreen'});
		jQuery('#LO').animate({opacity:1}, 2000, "linear", function(){});			
		$('.resp').css({'opacity': '0'});
		$('#prob-box').css({'opacity': '0'});
		$('#sol-box').css({'opacity': '0'});
		$('.TIMER-BOX').css({'opacity': '0'});
		$('.tot').css({'opacity': '0'});
		$('.triangle').css({'opacity': '0'});		
		$('.cimage').css({'visibility': 'hidden'});
		$('#solucionar-img').css({'opacity': '0'});
		$('#escalonar-img').css({'opacity': '0'});
		$('#atendimento').css({'opacity': '0'});
		$('svg').css({'opacity': '0'});visibility: hidden; 
                
               

                
                
});

function anomaliaDetectada(){	
	
	document.getElementById("iniciar-btn").style.display = "none";	
	jQuery('#LO').animate({opacity:.5}, 2000, "linear", function(){});
	$('body').css({'backgroundColor': 'yellow'});        
	jQuery('#LO').animate({opacity:.5}, 2000, "linear", function(){});	
	jQuery('#TL').animate({opacity:1}, 2000, "linear", function(){});	
	jQuery('.triangle').animate({opacity:1}, 2000, "linear", function(){});
	$('#atendimento-img').css({'visibility': 'visible'});
        jQuery('#t1a').animate({opacity:1}, 2000, "linear", function(){});	
	jQuery('#atendimento-img').animate({opacity:1}, 3000, "linear", function(){});
        jQuery('#gravar-img').animate({opacity:0}, 3000, "linear", function(){});
	jQuery('svg').animate({opacity:1}, 2000, "linear", function(){});
        
         ft1();         
         
         document.getElementById("local-resposta").innerHTML = document.getElementById("ENN1").innerHTML;
         document.getElementById("data-resposta").innerHTML =  Date();
        
}

var atendimento=0;
var solucionar=0;
var escalonar=0;
var atendimento1=0;
var solucionar1=0;
var escalonar1=0;
var atendimento2=0;




function incrementaAtendimento(){    
    atendimento+=1;        
    
    if (atendimento==1){
    jQuery('#t1b').animate({opacity:1}, 2000, "linear", function(){});
    jQuery('.resp').animate({opacity:1}, 2000, "linear", function(){});   
    jQuery('#sol-box').animate({opacity:1}, 2000, "linear", function(){});
    $('#solucionar-img').css({'visibility': 'visible'});
    $('#escalonar-img').css({'visibility': 'visible'});
    jQuery('#solucionar-img').animate({opacity:1}, 2000, "linear", function(){});
    jQuery('#escalonar-img').animate({opacity:1}, 2000, "linear", function(){});
    document.getElementById("atendimento-img").disabled = "disabled";
    $('#atendimento-img').css({'cursor': 'default'});   
    jQuery('.triangle').animate({opacity:0}, 2000, "linear", function(){});   
    ft2();
    timet1b();    
   
}
}

function incrementaSolucionar(){
    solucionar+=1;
    
    if (atendimento==1 && solucionar==1 && escalonar==0){        
    jQuery('#solucionar-img').animate({opacity:0}, 2000, "linear", function(){});
    jQuery('#escalonar-img').animate({opacity:0}, 2000, "linear", function(){});   
    jQuery('#atendimento-img').animate({opacity:0}, 2000, "linear", function(){});
    $('#gravar-img').css({'visibility': 'visible'});
    jQuery('#gravar-img').animate({opacity:1}, 2000, "linear", function(){});
    $('#prob-box').css({'opacity': '1'});   
    $('#escalonar-img').css({'cursor': 'default'}); 
    $('#solucionar-img').css({'cursor': 'default'});    
    document.getElementById("atendimento-img").disabled = "disabled";
    document.getElementById("solucionar-img").disabled = "disabled";
    document.getElementById("escalonar-img").disabled = "disabled";
    jQuery('#ttb').animate({opacity:1}, 2000, "linear", function(){});
    jQuery('.tot').animate({opacity:1}, 2000, "linear", function(){});    
    
    
    timettb();
    }
}


function reiniciar(){
    
    document.getElementById('btnExport').click();    
    window.setTimeout(reload, 2000);
}

function reload(){
    location.reload();
}
 
    
 function incrementaEscalonar(){
    escalonar+=1;    
    
    if (atendimento==1 && escalonar==1 && solucionar==0){        
    jQuery('#solucionar-img').animate({opacity:0}, 2000, "linear", function(){});     
    jQuery('#escalonar-img').animate({opacity:0}, 2000, "linear", function(){});     
    $('#solucionar-img').css({'cursor': 'default'});   
    $('#escalonar-img').css({'cursor': 'default'});  
	$('#solucionar1-img').css({'cursor': 'default'});   
    $('#escalonar1-img').css({'cursor': 'default'}); 
    $('#atendimento-img').css({'cursor': 'pointer'});  
    jQuery('#t2a').animate({opacity:1}, 2000, "linear", function(){}); 
    jQuery('.triangle').animate({opacity:1}, 2000, "linear", function(){});
    document.getElementById("solucionar-img").disabled = "disabled";
    document.getElementById("escalonar-img").disabled = "disabled";  
	document.getElementById("solucionar1-img").disabled = "disabled";
    document.getElementById("escalonar1-img").disabled = "disabled"; 	
    
    $('.cimage').css({'z-index': '-3'}); 
    $('.cimage1').css({'z-index': '3'}); 
    
    document.getElementsByClassName("cimage").disabled = "disabled";
    document.getElementsByClassName("cimage1").disabled = ""; 
    
    $('#solucionar1-img').css({'opacity': '0'});  
    $('#escalonar1-img').css({'opacity': '0'});  
    
    $('body').css({'backgroundColor': 'orange'});
    jQuery('#TL').animate({opacity:.5}, 2000, "linear", function(){});
    jQuery('#EQ').animate({opacity:1}, 2000, "linear", function(){});
    ft1();
} 
 }
 
  
function incrementaAtendimento1(){    
    atendimento1+=1;        
    
    if (atendimento1==1){
    
    jQuery('#t2b').animate({opacity:1}, 2000, "linear", function(){});    
    $('#solucionar1-img').css({'visibility': 'visible'});
    $('#escalonar1-img').css({'visibility': 'visible'});
	$('#solucionar1-img').css({'cursor': 'pointer'});   
    $('#escalonar1-img').css({'cursor': 'pointer'}); 
    jQuery('#solucionar1-img').animate({opacity:1}, 2000, "linear", function(){});
    jQuery('#escalonar1-img').animate({opacity:1}, 2000, "linear", function(){});
    document.getElementById("atendimento1-img").disabled = "disabled";	
	document.getElementById("solucionar1-img").disabled = "";
    document.getElementById("escalonar1-img").disabled = ""; 
    $('#atendimento1-img').css({'cursor': 'default'});   
    jQuery('.triangle').animate({opacity:0}, 2000, "linear", function(){}); 
    ft2();
    timet2b();   
}    
}

$("#solucionar-img").click(function(){
	alert("oiaa");
    });


function incrementaSolucionar1(){
	
	alert("oi");
    solucionar1+=1;
	
    
    if (solucionar1==1 && atendimento1==1 && escalonar1==0){       
		alert("oai");
    jQuery('#solucionar1-img').animate({opacity:0}, 2000, "linear", function(){});
    jQuery('#escalonar1-img').animate({opacity:0}, 2000, "linear", function(){});   
    jQuery('#atendimento1-img').animate({opacity:0}, 2000, "linear", function(){});
    $('#gravar-img').css({'z-index': '3'}); 
    $('#gravar-img').css({'visibility': 'visible'});
    jQuery('#gravar-img').animate({opacity:1}, 2000, "linear", function(){});
    $('#prob-box').css({'opacity': '1'});   
    $('#escalonar1-img').css({'cursor': 'default'}); 
    $('#solucionar1-img').css({'cursor': 'default'});    
    document.getElementById("atendimento1-img").disabled = "disabled";
    document.getElementById("solucionar1-img").disabled = "disabled";
    document.getElementById("escalonar1-img").disabled = "disabled";
    jQuery('#ttb').animate({opacity:1}, 2000, "linear", function(){});
    jQuery('.tot').animate({opacity:1}, 2000, "linear", function(){});
    timettb();
	
	alert("oihe");
    }
}

 function incrementaEscalonar1(){
    escalonar1+=1;    
    
    if (atendimento1==1 && escalonar1==1 && solucionar1==0){        
    jQuery('#solucionar1-img').animate({opacity:0}, 2000, "linear", function(){});     
    jQuery('#escalonar1-img').animate({opacity:0}, 2000, "linear", function(){});     
    $('#solucionar1-img').css({'cursor': 'default'});   
    $('#escalonar1-img').css({'cursor': 'default'});  
    $('#atendimento1-img').css({'cursor': 'pointer'});  
    jQuery('#t3a').animate({opacity:1}, 2000, "linear", function(){}); 
    jQuery('.triangle').animate({opacity:1}, 2000, "linear", function(){});
    document.getElementById("solucionar1-img").disabled = "disabled";
    document.getElementById("escalonar1-img").disabled = "disabled";
    $('#atendimento1-img').css({'z-index': '-3'});   
    $('#atendimento2-img').css({'z-index': '3'});  
    $('body').css({'backgroundColor': 'red'});
    
    jQuery('#EG').animate({opacity:1}, 2000, "linear", function(){});
    jQuery('#EQ').animate({opacity:.5}, 2000, "linear", function(){});
    
     ft1();
} 
 }    

function incrementaAtendimento2(){    
    atendimento2+=1;        
    
    if (atendimento2==1){
    
    jQuery('#t3b').animate({opacity:1}, 2000, "linear", function(){});    
    $('#solucionar1-img').css({'visibility': 'visible'});    
    jQuery('#solucionar1-img').animate({opacity:1}, 2000, "linear", function(){});    
    document.getElementById("atendimento2-img").disabled = "disabled";
    $('#atendimento2-img').css({'cursor': 'default'});   
    jQuery('.triangle').animate({opacity:0}, 2000, "linear", function(){}); 
    document.getElementById("solucionar1-img").disabled = "";    
    $('#solucionar1-img').css({'cursor': 'pointer'});   
    
      ft2();
      timet3b();
      
}    
}

function incrementaSolucionar1(){
    solucionar1+=1;
   // atendimento2+=1;//
   // alert("aqui");//
    if(atendimento2==1 && solucionar1==1){
    //alert("aqui");//
    jQuery('#solucionar1-img').animate({opacity:0}, 2000, "linear", function(){});
    jQuery('#escalonar1-img').animate({opacity:0}, 2000, "linear", function(){});   
    jQuery('#atendimento2-img').animate({opacity:0}, 2000, "linear", function(){});
    $('#gravar-img').css({'z-index': '3'}); 
    $('#gravar-img').css({'visibility': 'visible'});
    jQuery('#gravar-img').animate({opacity:1}, 2000, "linear", function(){});
    $('#prob-box').css({'opacity': '1'});   
    $('#escalonar1-img').css({'cursor': 'default'}); 
    $('#solucionar1-img').css({'cursor': 'default'});    
    document.getElementById("atendimento2-img").disabled = "disabled";
    document.getElementById("solucionar1-img").disabled = "disabled";
    document.getElementById("escalonar1-img").disabled = "disabled";
    jQuery('#ttb').animate({opacity:1}, 2000, "linear", function(){});
    jQuery('.tot').animate({opacity:1}, 2000, "linear", function(){});
    
    timettb();
}
}

function incrementaSolucionar1b(){
    
    
    jQuery('#solucionar1-img').animate({opacity:0}, 2000, "linear", function(){});
    jQuery('#escalonar1-img').animate({opacity:0}, 2000, "linear", function(){});   
    jQuery('#atendimento2-img').animate({opacity:0}, 2000, "linear", function(){});
    $('#gravar-img').css({'z-index': '3'}); 
    $('#gravar-img').css({'visibility': 'visible'});
    jQuery('#gravar-img').animate({opacity:1}, 2000, "linear", function(){});
    $('#prob-box').css({'opacity': '1'});   
    $('#escalonar1-img').css({'cursor': 'default'}); 
    $('#solucionar1-img').css({'cursor': 'default'});    
    document.getElementById("atendimento2-img").disabled = "disabled";
    document.getElementById("solucionar1-img").disabled = "disabled";
    document.getElementById("escalonar1-img").disabled = "disabled";
    jQuery('#ttb').animate({opacity:1}, 2000, "linear", function(){});
    jQuery('.tot').animate({opacity:1}, 2000, "linear", function(){});
    
    timettb();

}

function timettb()
{
    
	
    tt1 =  +document.getElementById('t1b').innerHTML;
    tt2 =  +document.getElementById('t2b').innerHTML;
    tt3 =  +document.getElementById('t3b').innerHTML;
    ttt =  (tt1+tt2+tt3).toFixed(2);

    document.getElementById('ttb').innerHTML =  ttt+" MINUTOS";   
    document.getElementById("tempo-resposta").innerHTML = document.getElementById("ttb").innerHTML;
    

}

function timet1b()
{
document.getElementById('t1b').innerHTML=(t2-t1).toFixed(2);
}

function timet2b()
{
document.getElementById('t2b').innerHTML=(t2-t1).toFixed(2);
}

function timet3b()
{
document.getElementById('t3b').innerHTML=(t2-t1).toFixed(2);
}

function ft1(){
today=new Date();
h=today.getHours();
m=today.getMinutes();
s=today.getSeconds();
t1=h*60+m+s/60;
}

function ft2(){
today=new Date();
h=today.getHours();
m=today.getMinutes();
s=today.getSeconds();
t2=h*60+m+s/60;
}

$(document).ready(function(){
	
    $("#seg").click(function(){
	$('#seg').css({'backgroundColor': 'white'});
    $('#qua').css({'backgroundColor': 'rgb(0, 56, 115)'});
	$('#man').css({'backgroundColor': 'rgb(0, 56, 115)'});
	$('#log').css({'backgroundColor': 'rgb(0, 56, 115)'});	
        document.getElementById("area-resposta").innerHTML = "SEGURANÇA";
    });	
	
	$("#qua").click(function(){
	$('#seg').css({'backgroundColor': 'rgb(0, 56, 115)'});
        $('#qua').css({'backgroundColor': 'white'});
	$('#man').css({'backgroundColor': 'rgb(0, 56, 115)'});
	$('#log').css({'backgroundColor': 'rgb(0, 56, 115)'});	
        document.getElementById("area-resposta").innerHTML = "QUALIDADE";
    });	
	
	$("#man").click(function(){
	$('#seg').css({'backgroundColor': 'rgb(0, 56, 115)'});
        $('#qua').css({'backgroundColor': 'rgb(0, 56, 115)'});
	$('#man').css({'backgroundColor': 'white'});
	$('#log').css({'backgroundColor': 'rgb(0, 56, 115)'});	
        document.getElementById("area-resposta").innerHTML = "MANUTENÇÃO";
    });	
	
	$("#log").click(function(){
	$('#seg').css({'backgroundColor': 'rgb(0, 56, 115)'});
        $('#qua').css({'backgroundColor': 'rgb(0, 56, 115)'});
	$('#man').css({'backgroundColor': 'rgb(0, 56, 115)'});
	$('#log').css({'backgroundColor': 'white'});	
        document.getElementById("area-resposta").innerHTML = "LOGÍSTICA";
    });	
	
});

function gravatextarea(){

   document.getElementById("problema-resposta").innerHTML = $("#problema").val();
  
}

function test() {
    
        var Excel = new ActiveXObject("Excel.Application");
        Excel.Visible = true;
        Excel.Workbooks.Open("combate.xls");
        
      }