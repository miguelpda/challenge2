

function encriptar (elemento){
    
    var text1;
    text1 = document.getElementById("campo").value;
    
    if ((text1 === "")) {  //COMPRUEBA CAMPOS VACIOS
        alert("El compo no pueden quedar vacio, vamos no seas timid@ y escribe algo!!!");
        return true;
    }
    else{
    var frase = document.getElementsByTagName("input")[0].value;
    var fraseCo = btoa(frase);
    document.getElementById("resultado").innerHTML = fraseCo;
    document.getElementById('button').style.display = 'block';
    document.getElementById('meme').style.display = 'block';
    document.getElementById('flecha').style.display = 'block';
    document.getElementById('title').style.display = 'block';
    document.getElementById('title2').style.display = 'block';
    document.getElementById('mune').style.display = 'none';
    document.getElementById('mat').style.display = 'block';
    }
}
function desencriptar (elemento) {

    text1 = document.getElementById("campo").value;
    
    if ((text1 === "")) {  //COMPRUEBA CAMPOS VACIOS
        alert("El compo no pueden quedar vacio, vamos no seas timid@ y escribe algo!!!");
        setInterval("location.reload()",100);
        return true;
    }
    else{
    var frase = document.getElementsByTagName("input")[0].value;
    var fraseDe = atob(frase);
    document.getElementById("resultado").innerHTML = fraseDe;
    document.getElementById('button').style.display = 'block';
    document.getElementById('meme').style.display = 'block';
    document.getElementById('flecha').style.display = 'block';
    document.getElementById('title').style.display = 'block';
    document.getElementById('title2').style.display = 'block';
    document.getElementById('mune').style.display = 'none';
    document.getElementById('mat').style.display = 'block';
    }
}



function copytex(elemento){
    var temp=document.createElement('input');
    
    document.getElementsByTagName('body')[0].appendChild(temp);
    temp.value=elemento.innerHTML;
    temp.select();
    document.execCommand('copy');
    document.getElementsByTagName("body")[0].removeChild(temp);
    let pasteText = document.querySelector('.text1');
        pasteText.focus();
        pasteText.select();
                       
}

