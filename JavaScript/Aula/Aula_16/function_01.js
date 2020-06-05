function parimpar(n){
    if (n%2==0){
        return 'Par!'
    }else {
        return 'Impar!'
    }
}
let res = parimpar(9)
//console.log(res)

function soma(n1,n2){
    return n1 + n2;
}

//console.log(soma(2,5))

let v = function(x){
    return x*2
}
//console.log(v(9))

function fatorial(n){
    let fat = 1
    for(let i = n; i > 1; i--){
        fat *= i
    }
    return fat
}
console.log(fatorial(6))