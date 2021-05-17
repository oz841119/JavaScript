
// 用正則表達式檢查字串是否為手機號

let isPhoneNumber = /^09[0-9]{8}$/;
let pn = "0959674090"

console.log(isPhoneNumber.test(pn));

/* 檢查郵件
 * user .name@yahoo.com.tw
 *    結構
 *      - (1)字母數字底線 字母數字底線 @ 任意字母數字 . 任意字母
 *         - (1) \w
 *
 */

let isEmail = /\w(\.\w)*@[A-z0-9](\.[A-z])*$/
console.log(isEmail.test("a.c@c.g.d.j"));

