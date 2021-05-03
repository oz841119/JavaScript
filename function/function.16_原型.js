/*
 * - 原型 prototype
 *      - 創建的函數都會被解析器添加一個屬性prototype
 *          這個屬性對應一個物件 這個物件就是所謂的原型物件
 * 
 * - 如果函數作為普通函數調用時 則prototype基本沒有任何作用
 * - 如果為構造函數調用，則他創建的物件中都會有一個隱含屬性
 *      指向該構造函數的原型物件，可以透過__proto__訪問屬性(兩個底線)
 * 
 * - 原型物件相當於公共區域 所有同一個類的實例都可以訪問
 *      可以將物件中共有的內容設置到原型物件中
 * 
 * - 當訪問物件的屬性或方法時，會先在物件中尋找，如果有則直接使用
 *      但如果沒有 則會到原型物件內去找
 * 
 * 創建構造函數時 可以將物件共有的屬性和方法 統一添加到構造函數原型物件中
 * 這樣不用分別為每個物件添加 也不會影響全局作用域 就可以讓每個物件都有這些屬性及方法
 */

function MyClass(){
}
console.log(MyClass.prototype);

let mc = new MyClass();
let mc2 = new MyClass();
console.log(mc.__proto__);
console.log(mc.__proto__ == MyClass.prototype);
console.log(mc.__proto__ == mc2.__proto__);

// 向MyClass原型中添加屬性
MyClass.prototype.a = "i am a in prototype";
// 添加方法
MyClass.prototype.sayHello = function (){
    alert("i am sayHello in prototype")
}

console.log(MyClass.prototype.a);
console.log(mc.a);
console.log(mc2.a);

// 為mc增加a屬性
mc.a = "I am a in mc"
console.log(mc.a);
console.log(mc2.a);



mc.sayHello();