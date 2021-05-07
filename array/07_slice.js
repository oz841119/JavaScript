/*
 * slice()
 *   - 從某個以有數組中返回選定元素
 *   - slice(開始索引必選,結束索引可選)
 *   - 擷取開始索引並創建索引0至結束索引 但不創建結束索引
 *   - 若不選擇結束，則提取原數組的開始索引至最後索引
 *   - 可為負值，則由後方開始計算索引
 *   - 
 *   - 該方法不會影響原數組，而是將擷取到的元素重新封裝到新數組並返回
 * 
 *
 */


let arr = ["張學友","周潤發","梁朝偉","劉德華","張曼玉"];
let newArr = arr.slice(1,3);
console.log(newArr);

let newArr2 = arr.slice(3);
console.log(newArr2);

let newArr3 = arr.slice(-2);
console.log(newArr3);

let newArr4 = arr.slice(-4,-2)
console.log(newArr4);

let newArr5 = arr.slice(2,-2);
console.log(newArr5);

let newArr6 =arr.slice(3,3)
console.log(newArr6);
let newArr7 = arr.slice(4,2);
console.log(newArr7);