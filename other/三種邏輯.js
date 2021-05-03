// 邏輯非! 邏輯與&& 邏輯或||

// 邏輯非! 進行非運算
// 對Boolean值取反
let a = true;
a = !a;
console.log(a);

let b = false;
b = !b;
console.log(b);

let c = true;
c = !!c;  //兩次取反
console.log(c); 

//對非boolean值進行非運算則會轉換為boolean值再取反

let d = 10; 
d = !d;
console.log(d);
 