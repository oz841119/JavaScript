/*
 *
 * push()
 *   - 該方法可以像數組末尾添加一個或多個元素，並返回新的數組
 *   - 可以將要添加的元素作為方法的參數傳遞
 */

let arr = ["張學友","劉德華","梁朝偉"]
let arrPushResult = arr.push("周星馳","周潤發")
console.log(arr);
console.log(arr.length);
console.log(arrPushResult); // 返回值

/*
 * pop()
 *   - 可以刪除數組的最後一個元素 並將被刪除的元素作為返回值返回
 */


let arrPopResult = arr.pop();
console.log(arr);
console.log(arr.length);
console.log(arrPopResult);

/*
 * unshift()
 *   - 向數組開頭添加一個或多個元素，並返回新的數組長度
 *   - 向前方插入元素後，其他元素會依序調整索引
 */

console.log(arr);
let arrUnshiftResult = arr.unshift("張曼玉")
console.log(arrUnshiftResult);
console.log(arr);
console.log(arr.length);

/*
 * shift()
 *   - 向數組開頭刪除元素，並將被刪除的元素作為返回值返回
 *   - 向前方刪除元素後，其他元素會依序調整索引
 */

let arrShiftResult = arr.shift();
console.log(arr);
console.log(arrShiftResult);
console.log(arr.length);
