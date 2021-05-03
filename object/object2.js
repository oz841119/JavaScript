/*
 * object的屬性名幾乎不受規範
 * 但要用特殊屬性名需用另一個方式
 * 沒事不要這樣寫
 */
let obj = new Object();

/*
 * obj.123 = 456;
 * console.log(obj.123); 這邊會bug
 */ 

obj["123"] = 456;
console.log(obj["123"]);

/*
 * 使用[]的方式去增加屬性會更加靈
 */

let obj2 = new Object();
obj2["isMyName"] = "劉德華";
let andyLau = "isMyName";
console.log(obj2[andyLau]); 
/* 
 * 並非從obj2去調屬性 
 * 而是從變量內找到值 
 * 再找到obj2中的屬性調用屬性值
 */

/*
 * 【屬性值】
 *   JS物件的屬性值，可以是任意的資料型態
 *   甚至可以是一個物件
 */
let obj3 = new Object();
let obj4 = new Object();
obj3["userName"] = "梁朝偉";
obj3["score"] = 65
obj4["myName_and_score"] = obj3
obj4["isMyName"] = obj3["userName"]
console.log(obj4["myName_and_score"]);
console.log(obj4["isMyName"]);

/*
 * in運算符
 *   - 可以檢查一個物件中是否含有指定的屬性
 *     - 一般用於當自建屬性時去檢查該屬性是否有內建或宿主屬性
 *     - 如果有 則返回true 反之
 */

console.log("isMyName" in obj4);
console.log("score" in obj4);
