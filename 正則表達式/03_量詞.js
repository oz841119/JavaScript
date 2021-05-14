/*
 * 正則表達式 
 *   - 量詞 {}
 *    -  {n}正好出現n次
 *    - 量詞只對前面的一個字符起作用
 *    - 可以使用()將字串作為一組去使用量詞
 *    - {n,m} 限定出現n - m次
 *    - {n,} 出現n次以上
 * 
 *   - 量詞 +
 *    - 出現至少一次 相當於{n,}
 * 
 *   - 量詞 *
 *    - 0個以上 {0,}
 * 
 *   - 量詞 ?
 *    - 0個或1個 {0,1}
 * 
 */
let reg = /a{3}/;
console.log(reg.test("aaabc"));

reg = /ab{3}/;
console.log(reg.test("ababab"));

reg = /(ab){3}/;
console.log(reg.test("ababab"));

reg = /ab{3}c/;
console.log(reg.test("abbbc"));

// 限定出現 n-m次 
reg = /ab{1,3}c/;
console.log(reg.test("abbc")
);

// n次以上
reg = /ab{3,}c/;
console.log(reg.test("abbbbbbbbc"));

// 至少一個

reg = /ab+c/;
console.log(reg.test("abbbbbbbbc"));