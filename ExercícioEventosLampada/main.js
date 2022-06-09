function mudarImagem() {
    let item = document.querySelector("#imgLamp");
    let classe = document.querySelector("#imgLamp").class;
    if(classe=="desligada"){
        item.innerHTML = "<img alt=\"Lampada Desligada\" src=\"lampada_on.gif\">";
        document.querySelector('div').class = 'ligada';
    }else{
        item.innerHTML = "<img alt=\"Lampada Ligada\" src=\"lampada_off.gif\">";
        document.querySelector('div').class = 'desligada';
    }
}