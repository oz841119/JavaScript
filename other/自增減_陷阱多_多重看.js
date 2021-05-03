let a = 20;
let b = a++ + ++a + a; // a++為先輸出後遞增 ++a為先遞增後輸出

console.log(`b = ${b}`);
console.log(b);
//此時的b仍為64 因為第一句console.log的 b= 為字串

console.log(b = b + b); // console.log輸出的同時也會賦值 
console.log(b);
//此處的b為變數b 並在賦值後輸出

//***********

let c = 50;
c = c++; // 先輸出後遞增 但此時c已被賦值為50 
console.log(c);

//自減同理 

let d = 90;
d--; // 義同 d = d-1
console.log(d);

//練習題

let p=1;
let o=p++

let n1 = 10 , n2 = 20;
let n = n1++;
console.log('n='+n);
console.log('n1='+n1);
n = ++n1;
console.log('n='+n);
console.log('n1='+n1);
n = n2--;
console.log('n='+n);
console.log('n2='+n2);
n = --n2;
console.log('n='+n);
console.log('n2='+n2);
