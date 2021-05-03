// 條件表達式?語句1:語句2;
/* 
條件運算符在執行時，會先向表達式求值
若為true 則返回 語句1 執行結果 
若為false 則為 語句2
*/


// 宣告變量max 並賦值(若a > b的值為true 則輸出語句1(a) 反之則輸出語句2(b) 可以用來比大小
let a = 10;
let b = 30;
let max = a > b ? a : b;  // a > b的值為false 所以輸出語句2(b)   並賦值給max
console.log(max);

let c = 20;
max = max > c ? max : c; //max > c的值為true 所以輸出max 並賦值給max  
console.log(max); //此時的max仍比c大 值為true 所以仍然輸出max並賦值max的值

let d = 40;
max = max > d ? max : d; 
console.log(max); //此時的max以比d小 值為false 所以輸出d值並賦值給max


//上午寫代碼 下午火葬場
let aNumber = a > b ? a > c ? a : c : b > c ? b : c ;
console.log(aNumber);
//稍微簡化一下 但依然不方便閱讀 
let bNumber = a > b ? (a > c ? a : c) : (b > c ? b : c);
console.log(bNumber);







