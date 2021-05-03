/*
 * 定義一個用來求和的函數
 *   可以在函數中定義 形式參數 
 *   相當於在函數內宣告變量 但不賦值
 */

function sum(a,b){
    console.log(a+b);
}

/*
 * 在調用函數時，可以在()中指定 實際參數
 * 實參 將會賦值給函數中對應的形參
 */

sum(34,36);

//調用函數時 解析器不會檢查實參類型 多餘實參也不被賦值 實參數木低於形參 則沒被賦值的形參會undefined 

sum(50,"bye");
sum(true,false);
sum(9)
