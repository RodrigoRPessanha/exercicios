function palindromoChecker(){
    let str = document.getElementById("palavra").value;

    let re = /[\W_]/g;
    let lowCaseStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowCaseStr.split('').reverse().join('');

    if(reverseStr === lowCaseStr){
        alert("A palavra é um palíndromo!");
        console.log("A palavra é um palíndromo!")
    }else {
        alert("A palavra não é um palíndromo!");
        console.log("A palavra não é um palíndromo!")
    }
}
