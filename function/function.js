/*
 * 函數 Function
 *      - 也是Object
 *      - 用於封裝功能(程式碼)，需要時可以調用執行
 *      - 使用typeof檢查Function時，會返回Function
 * 
 * 
 */

//創建函數物件 宣告函數名稱 = new Function()
let fun = new Function();
console.log(typeof fun);

//封裝程式碼會以"字符串"的方式存放於函數之中 
let fun2 = new Function("console.log('這是一個console.log');")

// ***** 但實務中基本不用這樣的構造方式 *****
 
/*     【實務常用】
 * 使用 函數聲明 來創建函數
 *   語法：
 *        function 函數名([形參1,形參2,形參3......]){
 *             語句...
 *        }
 */

function fun3(){
    console.log("劉德華");
}
fun3();

/*
 * 使用 函數表達式 創建函數
 *   語法：
 *        let 函數名 = function([形參1,形參2,形參3......]){
 *             語句...
 *        }
 */

let fun4 = function(){
    console.log("張學友");
};