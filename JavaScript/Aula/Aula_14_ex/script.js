function contar(){
    var inic = Number(document.getElementById("txtinic").value)
    var fim = Number(document.getElementById("txtfim").value)
    var count = Number(document.getElementById("txtpace").value)

    var res = document.getElementById("resposta")

    

    /*do{
        res.innerHTML = `${inic}, `
        inic = (inic + count)
    }while(inic <=fim) */

  /*  while(inic <= fim){ 
      &#128073
        res.innerText = `${inic},`
        inic = (inic + count)
    }*/

    if(inic < 0){
        res.innerHTML = "O primeiro número tem que ser maior que 0!"
    }else if(fim < inic){
        res.innerHTML = "O fim tem que ser menor que o início!"
    }else if(count == 0){
        res.innerHTML = "O passo tem que ser diferente de 0"
    }else{  
        res.innerHTML = `<p>Iniciou em  ${inic} </p>` 
        res.innerHTML += "<p> Contando:" 
        for(var i = inic;i <= fim; i += count){
            res.innerHTML += `<p> 👍 ${i}</p>`
            
        }
        i = (i - count)
        res.innerHTML+= `Finalizou em ${i} ✋`
    }
}

function tabuada(){
    var num = Number(document.getElementById("txtn").value)
    var res = document.getElementById("resposta-tab")

    res.innerHTML = `A tabuada do número: ${num}`
    for(var i=0; i<=10;i++){
        var multi = (i*num)
        res.innerHTML += `<p>${num} x ${i} = ${multi}</p>`
    }

}

