//非數值情況

console.log(1 > true);
console.log(1 >= true);  
console.log(1 > "0");  //先轉換為數值才比較
console.log(10 > null); // null toNumber = 0

console.log(10 > "hello"); // "hello" toNumber = NaN 並且 任何值與Nan做等於比較為false

console.log(NaN > 5);
console.log(NaN < 5);
console.log(NaN == NaN); // NaN跟任何數值 包括自己 皆為false
console.log(NaN = NaN); // 這是賦值 不是等於


console.log(NaN != NaN); // 做不等於比較時為true


/*
字符串相比 會取第一位比較 若比較不出則比較下一位 直到可以回傳結果
且不論數字或是英文 皆是根據Unicode編碼比較
*/
console.log("5" > "11");
console.log("12" > "13");
console.log("1487" < "15");
console.log("1487" < +"15"); //常規使用數字字串比較 會盡量先toNumber
console.log("a" > "b"); 
 


//相等運算符
console.log("1" == 1); //不嚴格相等 會toNumber
console.log("1" === 1); //嚴格相等
console.log(true == "1"); // 同時將Boolean及String toNumber

/*
由於NaN與任何值比較 包括自己 皆為false
所以可以透過 isNaN()函數去驗證某值是否為NaN
*/
let u = NaN;
console.log(u);
console.log(isNaN(u));

u = 50;
console.log(u);
console.log(isNaN(u));







