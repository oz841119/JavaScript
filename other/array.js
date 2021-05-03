// 數組 Array //
let A = ["apple" , "banana" , "orange"]; // 索引為第0組開始 而非第1組
console.log(A);
console.log(A.length) // 用於驗證A有幾組元素

console.log(A[0]); // A內的第0組元素
console.log(A[1]); // 以此類推
console.log(A[2]); // 以此類推

A[0] = "Watermelon"; //A內第0組元素 重新賦值
console.log(A);

A.push("Mango"); // push 尾部增加元素
A.unshift("cherry"); // nshift 頭部增加元素
A.pop(); // 刪除尾部元素
A.shift(); // 刪除頭部元素

// example : 計算7天銷售量
let sales = [100, 50, 30, 60, 200 , 300, 90];
let totalSales = 0; //總銷量 初始值為0
for (let i = 0 ; i < sales.length ; i++){; // (i=0為第0組元素開始) (length數組長度)
    totalSales = totalSales + sales[i];
}
console.log(`總銷量: ${totalSales}`);
