/*
 * - 創建一個構造函數
 *
 */

function MyClass(){

}

MyClass.prototype.name = "我是原型中的名字";

let mc = new MyClass;
mc.age = 25

console.log(mc.name)
console.log("name" in mc);

console.log(mc.hasOwnProperty("age"));

