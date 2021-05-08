/* ((( (回調區(14行後)沒有聽太明白) )))
 * sort()
 *   - 對數組進行排序
 *   - 也會影響原數組  默認unicode編碼判斷 所以需留意純數字的排序問題
 *     - 所以可以添加一個回調函數 來指定排序規則
 */

let arrRandom = ["c","f","e","r","y","l","z","a"]
arrRandom.sort();
console.log(arrRandom);
//反轉 使排序由大至小
console.log(arrRandom.reverse());

/*
 * 默認unicode編碼 所以數字排序不會如預期判斷
 * 可以透過回調函數解決問題
 * - 回調函數 Callback
 *   - 需定義兩個形參
 *     - 瀏覽器將會分別使用數組中的元素作為實參調用回調函數
 *     - 如果返回一個大於0的值  則會交換位置
 *     - 小於0 則不變      等於則判定兩值相等 也不變位置
 */
let numArr = [8,59,4,37,1,26,67,5,15,43,3,75,94];
console.log(numArr.sort());
console.log(numArr);

//下面有點看不懂 (升序排列)
numArr.sort(function(parm1,parm2){
    if(parm1>parm2){
        return 1;
    }else if(parm2>parm1){
        return -1;
    }else{
        return 0;
    }
})
console.log(numArr);

//也可以直接return parm1 - parm2;