let op = prompt("Какую математическую операцию хотите соввершить? +,-,*,/")
let a = parseInt(prompt("Введите число А"))
let b = parseInt(prompt("Введите число B"))
function calc(x,y,oper){   
    if (oper=="+"){
        alert(`${x} + ${y} = ${x+y}`)
    }
    else if (oper=="-"){
        alert(`${x} - ${y} = ${x-y}`)
    }
    else if (oper=="*"){
        alert(`${x} * ${y} = ${x*y}`)
    }
    else if (oper=="/"){
        alert(`${x} / ${y} = ${x/y}`)
    }
    else{
        alert("Такой операции наш калькулятор не выполняет")
    }
 }
calc(a,b,op)