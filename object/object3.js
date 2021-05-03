let obj = new Object;
obj["name"] = "劉德華";
console.log(obj["name"]);

let obj2 = obj
console.log(obj2);
console.log(obj2["name"]);

/*
 * 變量的值若為基礎數據類型 則變量與值存放於棧內存
 * 若為物件 變量存於棧內存 其值也在棧內存 但值的內容存於堆內存 換而言之 物件的值此時是作為引用（地址）
 * 一點即通：尚硅谷最新版JavaScript基础全套教程完整版(140集实战教学,JS从入门到精通)(P49)
 */

let a = 5;
let b = a;
console.log(b);
a++;
console.log(b);   //仍然是5 因為 b是在a++之前被賦值 賦值時將a的值複製給b

let obj3 = new Object();   //創建一個值(地址) 其名為0x123 並將內容存於堆內存
obj3.userName = "張學友";  
let obj4 = obj3;         //創建一個值(地址) 將obj3的地址複製給obj4  
console.log(obj4.userName);
obj3.userName = "梁朝偉";
console.log(obj4.userName); //值指向同一個堆內存的內容 所以會一起發生變化

obj4 = 3;          //直接修改了obj4的值(指向) 此時obj3與obj4就沒有關係了
console.log(obj3);
console.log(typeof obj4);  
console.log(obj4);
console.log(obj4.userName);

// 物件中 內容一樣不等於相等的東西 因為值(指向)不同
let obj5 = new Object();
let obj6 = new Object();
obj5.userName = "金城武";
obj6.uerrName = "金城武";
console.log(obj5);
console.log(obj6);
console.log(obj5 == obj6);
