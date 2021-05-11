/*
 * Date - 物件，表示時間
 *      - 如果直接使用構造函數創建物件，則會封裝為當前執行代碼的時間
 *
 */

// 使用構造函數創建
var d = new Date();
console.log(d); 

// 創建指定時間
// 需要在構造函數中傳遞一個表示時間的字串作為參數
// 格式：月份/日/年 時:分:秒
var d2 = new Date("05/11/2021 18:55:30");
console.log(d2);

// 返回日期的"幾日"
var d2Data = d2.getDate()  
console.log(d2Data);

// 返回日期的"周幾"  0表示週日
var d2Day = d2.getDay()
console.log(d2Day);

// 返回日期的"月份" 0表示1月
var d2Month = d2.getMonth();
console.log(d2Month);