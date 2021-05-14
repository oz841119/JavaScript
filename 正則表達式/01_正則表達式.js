/*
 * 正則表達式
 *    - 可以用字面量來創建
 *       - var 變量 = /正則表達式/匹配模式
 * 
 *
 */    

// 差異
let regText = new RegExp("abc","i")
console.log(regText.test("123abc456"));

let reg = /abc/i;
console.log(reg.test("456abc123"));

/* 檢查字符串中是否含有a或b
 *   - 『|』判斷符或是[]都可以  
 *   -  a|b == [ab]
 * 
 */
reg = /a|b/;
console.log(reg.test("123a123"));
console.log(reg.test("121b2134"));
console.log(reg.test("123ab123"));

/*
 *  在[]內可以用 - 符號來表示從哪到哪
 */
reg = /[a-z]/;
console.log(reg.test("gbfdv"));

// 若要檢查是否含有aac abc acc adc aec...
reg = /a[a-z]c/
console.log(reg.test("azc"));

// [^] 找除了...以外的東西 如果有 則返回ture
reg = /[^ab]/
console.log(reg.test("a"));
console.log(reg.test("b"));
console.log(reg.test("c"));
console.log(reg.test("ab"));
console.log(reg.test("ac"));
console.log(reg.test("abc"));
// 含有數字外的字符則返回ture
reg = /[^0-9]/
console.log(reg.test("094a38"));
