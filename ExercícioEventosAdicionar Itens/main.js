function adicionarItem() {
    var item = document.getElementById("novoItem").value;
    var lista  = document.getElementById("lista").innerHTML;
    lista = lista +"<li>"+item+"</li>";
    
    document.getElementById("lista").innerHTML = lista;
}