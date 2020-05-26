function contar(){
    var inic = document.getElementById("txtinic")
    var fim = document.getElementById("txtfim")
    var pace = document.getElementById("txtpace")

    var res = document.getElementById("resposta")

    if(inic.value.length == 0 || fim.value.length == 0 || pace.value.length == 0){
        res.innerHTML = "Você precisa digitar todos os dados!"
    }else{  
        var i = Number(inic.value)
        var f = Number(fim.value)
        var p = Number(pace.value)
        res.innerHTML = `<p>Iniciou em  ${i} </p>` 
        res.innerHTML += "<p> Contando:" 
        if (p <= 0){
            res.innerHTML +="<p> Passo inválido, considerando 1!"
            p = 1
        }
        if(i < f){
            //Contagem Crescente
        for(var c = i;c <= f; c += p){
            res.innerHTML += `<p> \u{1F449} ${c}</p>`

        }
        c = (c-p)
        }else{
            //Contagem regressiva
        for (var c = i; c >= f; c -=p){
            res.innerHTML += `<p> \u{1F449} ${c}</p>`    
        }
        }
        res.innerHTML+= `Finalizou em ${c} ✋`
    }
}

function tabuada(){
    var num = document.getElementById("txtn")
    var res = document.getElementById("seltab")

    
    if (num.value.length == 0){
        res.innerHTML = "Por favor digite um número!"
    }else{
        var n = Number(num.value)
    res.innerHTML = `A tabuada do número: ${n}`
    for(var i=0; i<=10;i++){
        let item = document.createElement('option')
        item.text = `${n} x ${i} = ${i*n}` 
        item.value = `res${i}`
        res.appendChild(item)
    }}

}
