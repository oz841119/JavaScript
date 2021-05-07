/*
 * concat()
 *   -  可以連接兩個或多個數組，也可以傳元素，並返回新的數組
 *   -  該方法不會對原數組造成影響
 */
let arr = ["張學友","周潤發","梁朝偉"];
let arr2 = ["徐乃麟","曾國城","胡瓜"];
let arr3 = ["三上悠亞","桃乃木香奈","想不到了"]

let resultConcat = arr.concat(arr2,arr3,"亞當山德勒","李奧納多");
console.log(resultConcat);

/*
 * join()
 *   -  可以將數組轉為字串
 *   -  不會對原數組造成影響
 *   -  可以傳遞參數作為替換數組連接符
 */

let resultJoin = arr.join()
console.log(arr);
console.log(typeof arr);
console.log(resultJoin);
console.log(typeof resultJoin);

resultJoin = arr.join("-")
console.log(resultJoin);

/*
 * reverse()
 *   -  顛倒數組
 *   -  會影響數組
 */

console.log(resultConcat);
resultConcat.reverse()
console.log(resultConcat);
console.log(resultConcat[1]);

/*
 * sort()
 *   - 對數組進行排序
 *   - 也會影響原數組  默認unicode編碼判斷 所以需留意純數字的排序問題
 *     - 所以可以添加一個回調函數 來指定排序規則
 */

let arrRandom = ["c","f","e","r","y","l","z","a"]
arrRandom.sort();
console.log(arrRandom);

