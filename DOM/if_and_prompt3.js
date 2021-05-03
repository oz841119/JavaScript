//由小至大排序
let num1 = +prompt("請輸入數值(1)");
let num2 = +prompt("請輸入數值(2)");
let num3 = +prompt("請輸入數值(3)");

if(num1 < num2 && num1 < num3){
    if(num2 < num3){
        alert(num1 +"." +num2  +"." +num3)
    }else{
        alert(num1 +"," +num3 +"," +num2)
    }
}

if(num2 < num1 && num2 < num3){
    if(num1 < num3){
        alert(num2 +"," +num1 +"," +num3)
    }
}


///以此推類