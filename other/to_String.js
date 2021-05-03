//--------  toString 重新聲明變量並賦值
let a = 123;   // type = Number
let b = a.toString();     //注意大寫

console.log(typeof b);
console.log(b);

//--------  toString 重新賦值
let c = 456;
c = c.toString();

console.log(typeof c);
console.log(c);

//*********  調用String函數 並將被轉換的數據作為參數傳遞參數給函數  此方法可以轉換null and undefined
let d = undefined;
d = String(d);  //d += ""  

console.log(typeof d);
console.log(d);
