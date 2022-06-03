function emailChecker(event){
    event.preventDefault();
    var email = document.getElementById("email").value;

    var emailPattern =  /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;

    if(emailPattern.test(email)){
        alert("O email é valido!");
        console.log("O email é valido!")
    }else {
        alert("O email não é valido!");
        console.log("O email não é valido!")
    }
}

document.getElementById("form").addEventListener('submit', emailChecker);
