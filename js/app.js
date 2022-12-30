$(document).ready(function () {
    $("#yes-result").hide();
    $(".area-enc").click(function (e) { 
        e.preventDefault();
        $(this).select();
    });

    //controlar solo letras sin caracteres especiales ni acentos, incluir letra ñ=241, espacio y borrar.
    $(".area-enc").keypress(function (tecla) { 
        tecla = (document.all)? tecla.keyCode : tecla.which;
        //console.log(tecla);
        if(tecla == 8 || tecla==32 || tecla==241){
            return true;
        }
        patron = /[A-Za-z]/;
        tecla_final = String.fromCharCode(tecla);
        return patron.test(tecla_final);
    });
});

function encriptar(){
    var textIn = $(".area-enc");
    var resuls = $("#resultado-enc");
    var resultado = $("#yes-result");
    var noResultado = $("#no-result");
    //console.log(textIn.val());
    var encriptado = (textIn.val().replace(/e/g,'enter').replace(/i/g,'imes').replace(/a/g,'ai').replace(/o/g,'ober').replace(/u/g,'ufat'));
    if(textIn.val().length>0){
        
        resuls.text(encriptado.toLowerCase()) ;
        resultado.show();
        noResultado.hide();
    }
    else{
        resuls.text("");
        resultado.hide();
        noResultado.show();
    }
    
}

function desencriptar(){
    var textIn = $(".area-enc");
    var resuls = $("#resultado-enc");
    var resultado = $("#yes-result");
    var noResultado = $("#no-result");
    //console.log(textIn.val());
    var encriptado = (textIn.val().replace(/enter/g,'e').replace(/imes/g,'i').replace(/ai/g,'a').replace(/ober/g,'o').replace(/ufat/g,'u'));
    if(textIn.val().length>0){
        
        resuls.text(encriptado.toLowerCase()) ;
        resultado.show();
        noResultado.hide();
    }
    else{
        resuls.text("");
        resultado.hide();
        noResultado.show();
    }
    
}

function copiarAlPortapapeles(id_elemento) {
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById(id_elemento).innerHTML);
    document.body.appendChild(aux);
    aux.select(); 
    document.execCommand("copy");
    document.body.removeChild(aux);
    
  }
