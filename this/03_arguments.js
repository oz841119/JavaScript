/*
 * 在調用函數時，瀏覽器每次會傳遞多個隱含的參數
 * (1).this
 *    -
 * (2).arguments
 *      - 類數組物件 (不是數組)
 *      - 但一樣可以通過索引操作數據，也可以獲取長度 
 *      — 在調用函數時，我們所傳遞的實參都會封裝到arguments
 *      - 即使我們不定義形參，也可以透過他來傳遞實參
 *    . arguments.callee
 *      - 當前正在執行的函數物件
 */

function fun(){
    console.log(arguments.length);
    console.log(arguments[1]);
    console.log(arguments.callee);

    
}

fun("a","b","c","d");
