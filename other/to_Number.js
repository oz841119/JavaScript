// 只有Number()

// String to Number
let a = "123";
a = Number(a);
console.log(typeof a);
console.log(a);

// Boolean to Number
let b = true;
b = Number(b);
console.log(typeof b);
console.log(b);

let c = false;
c = Number(c);
console.log(typeof c)
console.log(c);

//  Null to Number
let d = null;
d = Number(d);
console.log(typeof d)
console.log(d);

//  Undefined to Number
let e = undefined;
e = Number(e);
console.log(typeof e);
console.log(e);

// String含有非法字元時 to Number  
let f = "123個";
f = parseInt(f);  //調用parseInt()函數 若String最左邊若為有效的整數 則轉換為Number 只取一組
console.log(typeof f);
console.log(f);
 
let g = "456.789";
g = parseFloat(g);  //調用parseFloat()函數 同上 追加可取浮點數
console.log(typeof g);
console.log(g);

//  若對非String使用parseInt() or parseFloat() 

// 隱式轉換
let o = "1";
o = +o;
console.log(typeof o);
console.log(o);

let p = 1 + +"2" + 3
console.log(typeof p);
console.log(p);

let hello ;  
hello = +"hello" 
console.log(typeof hello);
console.log(hello);



