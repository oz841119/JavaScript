/*
 * 作用域
 *   - 指一個變量的作用範圍
 *   - JS中共有兩種作用域
 *     1. 全局作用域
 *          - 直接編寫再script標籤中的js程式碼 都是全局作用域
 *          - 在頁面打開時創建 在頁面關閉時銷毀
 *          - 有一個全局物件 window. 可以直接使用
 *                - 代表瀏覽器的窗口
 *                - 創建的變量都會作為window物件的屬性保存
 *     2. 函數作用域(局部作用域)
 */

let b = 456;
let c = 789;

function fun(){
    let a = 123;
    console.log(a);
}
fun();

console.log(b);
console.log(c);
console.log(a); 
// ^^沒有發現定義 證明變量a只作用於fun內