/*
 * - 創建一個Person構造函數
 *      - 在構造函數中 為每個對象都添加一個sayName方法
 *              目前方法創建於構造函數內部
 *              也就是每次執行完都會創建一個新方法
 *        也是所有實例的sayName都是唯一的
 *        導致構造函數執行後又創建一個新方法
 *              所以可以使所有物件共享同一個方法(主要提升效能)
 */

function Person(name , age , gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.sayName = fun; /* 原：function(){
                                alert(`大家好，我是:${this.name}`)
                               } */
}
// - 為避免構造函數中的方法不斷刪除又創建 所以將sayName方法在全局作用域中定義 

function fun(){
    alert(`大家好，我是:${this.name}`)
}

let per1 = new Person("劉德華" , 29 , "男");
let per2 = new Person("趙麗穎" , 30 , "女");

console.log(per1.sayName == per2.sayName);

// - 但盡量不要再全局作用域中宣告變量或函數 開發容易被重複宣告而覆蓋
//   - 下一章解決