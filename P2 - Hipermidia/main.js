function CalcularValorLocacao(){
    let cidadeR = document.querySelector("#menuCidadeRetirada").value;
    let cidadeE = document.querySelector("#menuCidadeEntrega").value;
    let tipoC = document.querySelector("#menuTipoDeCarro").value;
    let item = document.querySelector("#valorLocacao");
    let valorTotal = parseInt(tipoC);

    if(cidadeR != cidadeE){
        valorTotal = valorTotal + 300;
        item.innerHTML = "Valor da locação do veículo: R$ " + valorTotal;
    }else{
        item.innerHTML = "Valor da locação do veículo: R$ " + valorTotal;
    }
}

function evitarRecarga(event) { 
    event.preventDefault(); 
} 
document.getElementById("form").addEventListener('submit', evitarRecarga);