/*
 *  split()
 *    - 可以將字符串拆分成數組
 *    - 可以傳第一個正則表達式作為參數,方法將會根據表達式拆分
 *
 */

let str = "oneStringVTwoString"
let result = str.length;
console.log(result);
result = str.split("V");
console.log(result);
console.log(result.length);

str = "1a2b3c4d5e6f7g8"
console.log(str);
result = str.split(/[A-z]/)
console.log(result);

/*
 * search()
 *   - 可以搜索字符串中是否含有指定內容
 *   - 返回值表示從0開始的第x位第一次索引到 (底層字符串是由字串數組組成)
 *   - 值為 -1 則為無索引到
 */
str = "Hallo abc"
result = str.search("abc");
console.log(result);

result = str.search(/a[a-z]c/)
console.log(result);
/*
 * match()
 *   - 可以根據正則表達式，將字符串的第一次檢測到的內容提取出來
 *   - 可以將匹配模式改為全局匹配，達到搜索整個字符串的效果
 *   - 也可以為表達式設置多個匹配模式
 *   - 會將匹配到的內容封裝到一個數組內
 */

str = "1a2b3c4d5e6f7g8"
result = str.match(/[A-z]/g)
console.log(result);


/*
 * replace()
 *   - 將字符串的指定內容替換成新的內容
 *   - 參數
 *      1.要替換的內容
 *      2.新的內容
 *          - 使用空串可以直接刪除原內容不替換
 */

str = "1a2b3c4d5e6f7g8"
result = str.replace(/[A-z]/g,"!!")
console.log(result);