function fatorial(event){
    event.preventDefault();
    numero = document.getElementById("fatorial").value;
    let fatorial = 0;
    let contador;
    for(contador = 1; contador <= numero; contador++) {
        fatorial = numero*contador;
    }
    alert(fatorial);
    console.log(fatorial)
}

document.getElementById("form").addEventListener('submit', fatorial);
