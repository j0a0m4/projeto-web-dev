
//Validação de campo de texto com preenchimento obrigatório

function validaCampoTexto(id) {
var valor = document.getElementById(id).value;
//testa se o valor é nulo, vazio ou formado por apenas espaços em branco
if ( (valor == null) || (valor == "") || (/^\s+$/.test(valor)) ) {
    alert("Por favor, preencha o campo " + id )
return false;
}
return true;
}

//Validação de tamanho em campos de texto:
function validaCampoTextoTamanho(id, minimo, maximo) {
var valor = document.getElementById(id).value;
if (!validaCampoTexto(id)) {
return false;
}   
    
if ( (valor.length < minimo) || (valor.length > maximo)) {
    alert("Tente de novo, tamanho de "+ id+"  invalido");
return false;
}
return true
}
