function parOuImpar(){
    event.preventDefault();
    numero = document.getElementById("numero").value;
    if(numero%2==0){
        alert("O número é par!");
        console.log("O número é par!")
    }else{
        alert("O número é ímpar!");
        console.log("O número é ímpar!")
    }
}

document.getElementById("form").addEventListener('submit', parOuImpar);
