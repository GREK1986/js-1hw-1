
let num = prompt("ведите число")

if (num ==="0"){
    alert("это ноль")
}else if(num === ""){
    alert("ничего не ввел")
} else if(num === null){
    alert("отмена")
}   else if(num % 2 ===0){
    alert("число четное")
}else if(num % 2 ===1){
    alert("число не четное")
}else{
    alert("ведите число")
}