/* ^在[]表示除了 在[]外表示限定開頭
 * $ 表示結尾
 * . 表示任意字符
 */

reg = /^a/;
console.log(reg.test("bca"));
console.log(reg.test("bb"));
console.log(reg.test("aofwefopkg"));

reg = /a$/;
console.log(reg.test("abc"));
console.log(reg.test("bca"));

// ^n$ 完全符合正則表達式
reg = /^andy$/;
console.log(reg.test("andy"));


// 以 n 開頭 或 以n結尾
reg = /^andy|andy$/;
console.log(reg.test("YandyY"));
console.log(reg.test("YYandy"));

reg = /./
console.log(reg.test("a"));
console.log(reg.test(""));
