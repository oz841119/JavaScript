// 用正則表達式檢查字串是否為手機號

let isPhoneNumber = /^09[0-9]{8}$/;
let pn = "0959674090"

console.log(isPhoneNumber.test(pn));