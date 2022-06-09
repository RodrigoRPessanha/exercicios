function tempoTranscorrido(){
    let data2 = document.querySelector('#d1').value;
    const d2 = data2.split("/");
    
    var data1Default = new Date();
    var data2Default = new Date(d2[1] + "/" + d2[0] + "/" + d2[2]);
    
    var difference = data2Default.getTime() - data1Default.getTime();
    var difDias = Math.trunc(difference / (1000 * 3600 * 24));
    
    var anos = Math.trunc(difDias/365);
    var resto =  difDias%365;
    var meses = Math.trunc(resto/30);
    var dias = resto%30+1;
    
    
    document.getElementById("anos").innerHTML = "Anos: " + Math.sqrt(Math.pow(anos, 2));
    document.getElementById("meses").innerHTML = "Meses: " + Math.sqrt(Math.pow(meses, 2));
    document.getElementById("dias").innerHTML = "Dias: " + Math.sqrt(Math.pow(dias, 2));
}