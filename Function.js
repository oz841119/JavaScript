// function關鍵字 函數名 參數(可配默認值) 函數體 
// return返回值

function showMessage(username = "Visitor"){ // Visitor為默認值 也可不輸入 則無默認值
    console.log(`Hi ${username}, welcome to my JS function`);
}
showMessage("John"); 

// --------

function sum(num1, num2){
    let total = num1 + num2 ; 
    return total;
}
let s = sum(2,8); 
console.log(s);