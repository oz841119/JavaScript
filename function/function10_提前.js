/*
 * 變量的宣告提前
 *      - 頁面開啟時會先創建以var宣告的變量 但會依執行順序賦值
 */


console.log(a);
// console.log(b); 報錯 未被定義 
var a = 100
console.log(a);

/*
 * 函數的宣告提前
 *      - 使用函數宣告創建的函數 function fun(){}
 *        會在所有程式碼執行前先被創建，也就是你寫在哪都一樣，需要調
 * 
 */
fun()
function fun(){
    console.log("我是一個fun函數");
};

fun2()
var fun2 = function(){ //這裡只是提前宣告fun2 但尚未被賦值 
    console.log("我是一個fun2函數");
};
fun2() //所以fun2()必須放在宣告變量並賦值之後 否則會報錯

/* 
 *
 *
 */
