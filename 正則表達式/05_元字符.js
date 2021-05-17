/* . 
 * .原先匹配表示為任意字符 
 * 所以要檢查字符串內是否含有. 需使用轉譯字符\
 *
 */
let reg = /./
console.log(reg.test("A"))

reg = /\./;
console.log(reg.test("."));

/*
 * \w - 任意字母數字底線 [A-z0-9_]
 * \W - 除了上方之外[^A-z0-9_]
 * 
 * /d - 任意數字[0-9]
 * /D - 除了數字[^0-9]
 * 
 * /s - 空格
 * /S - 除了空格
 * 
 * /b - 單詞邊界
 * /B - 除了單詞邊界
 */

reg = /\w/; 
console.log(reg.test("_"))

reg = /\W/;
console.log(reg.test("_"));

// /b - 要在字串裡有child這個單詞 而不是children...等 
reg = /child/;
console.log(reg.test("hello children"));

reg = /\bchild\b/
console.log(reg.test("hello children"));
console.log(reg.test("hello child goodbye"));
