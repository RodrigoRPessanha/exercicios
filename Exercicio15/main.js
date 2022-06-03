function fatorial(event){
    event.preventDefault();
    let numero = document.getElementById("fatorial").value;
    let contador;
    for(contador = 1; contador <= num; contador++) {
        numero = numero*contador;
    }
    
}
document.getElementById("form").addEventListener('submit', fatorial);
