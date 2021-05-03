
//////三元條件表達式/////
let age = 40;
let a = "你已經退休了" , b = "你還沒退休"
let p = age > 60 ? a : b;
console.log(p);

/////// if語句 /////////

if(age > 60){
    console.log("你已經退休了"); // 未被執行
}else{
    console.log("你還沒退休")
}

/////// 多條if語句 ////////

age = 65;

if(age > 100){
    console.log("你活太久了");
}else if(age > 80){
    console.log("你要死了");
}else if (age > 60){
    console.log("你已經退休了");
}else if (age > 17){
    console.log("你已經成年了");
}else{
    console.log("好好學習");    
}

//在if語句中 由上往下執行 只要有一個語句被執行 則不會在往下判斷 所以順序需寫好 
//也可以寫邏輯或

age = 59 ; 
if(age > 100){
    console.log("你活太久了");    
}else if(age > 80 && age <= 100){
    console.log("你要死了");
}else if(age > 60 && age <=80){
    console.log("你已經退休了");
}else if(age >17 && age <= 60){
    console.log("你已經成年了");
}else{
    console.log("好好學習");
}
