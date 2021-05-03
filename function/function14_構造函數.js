/*       『用於區別創建的函數用來作什麼』
 * - 創建一個構造函數 專門用來創建Preson物件
 *      - 構造函數就是一個普通函數 創建方式和普通函數沒有區別
 *        不同點在於 習慣上首要字母為大寫
 * 
 * - 構造函數和普通函數的區別在於調用的方式不同
 *      普通函數為直接調用
 *      構造函數為需多加new來調用
 */

/*
 * - 構造函數執行流程
 *    1. 立刻創建新的物件
 *    2. 將新建物件設為函數中的this
 *       在構造函數中可以使用 this 引用新建的物件
 *    3. 逐行執行函數中的代碼
 *    4. 將新建的物件作為返回值返回
 *
 */

function Person(name,age,gender,job){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.job = job;
}

function Dog(name,age,breed){
    this.name = name;
    this.age = age;
    this.breed = breed;
}
// let per = Person();
// console.log(per); - undefined 

let per = new Person(`劉德華`,29,`男`,`電影明星`); // 沒有返回值return的狀況下 有了一個物件
let per2 = new Person(`賈柏斯`,52,`男`,`蘋果CEO`);
    //per and per2都是Person的「實例」 Preson則為「類」
console.log(per);
console.log(per2);

let dog = new Dog(`奧斯卡`,4,`哈士奇`)
let dog2 = new Dog(`三方`,2,`柴犬`)
console.log(dog);
console.log(dog2);

/* - 使用 in stance of 可以檢查一個物件是否為類的實例
 *     物件 instanceof 構造函數
 *
 */
console.log(dog2 instanceof Dog);
console.log(dog2 instanceof Person);