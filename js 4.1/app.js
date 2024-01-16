const eded =89;
let number= +prompt("daxil et");
let count=1;
while (number!== eded){
    number= +prompt("daxil et");
    console.log(eded);
}
count++;
console.log("kapital bank hesabinda 1000 manat kocurulsun");
if (count===1){
    console.log("1000 manat");
}else if(1<=5){
    console.log("750 manat");
}else if(6<=9){
    console.log("250 manat");
}else{
    console.log("-250 manat");
}