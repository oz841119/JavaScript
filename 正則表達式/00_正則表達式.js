/*
 * 正則表達式
 *   - 語法
 *     - let 變量 = new RegExp("正則表達式","匹配模式")
 *     - 默認區分大小寫
 *     - 參數可以是 i(忽略大小寫)  g(全局匹配模式)
 * 
 *   - test() 正則表達式的方法 
 *     - 會有返回值 所以可以利用變量儲存值
 *     - 可以用來檢查字串中是否『含有』內容
 *
 */    

let reg = new RegExp("abc")
console.log(reg);

let str = "123abc456"
let result = reg.test(str);
console.log(result);
console.log(reg.test(str));