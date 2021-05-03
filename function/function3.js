/* 
 * 定義函數 判斷數字是否為偶數
 *
 */

function evenOrOdd(num){
    return num%2==0
}
let result = evenOrOdd(5)
console.log(result);

/*
 * 定義函數 可以根據半徑計算圓面積
 * 3.14*r*r
 */
function circularArea(r){
    let a = 3.14*r*r
    return a;
}
a = circularArea(30);
console.log(a);