/*
 * splice()
 *  - 主要功能用於 刪除 替換 插入元素
 *  - 刪除元素，並向數組添加新元素 
 *  - 會影響原數組 並從被刪除的元素作為返回值返回
 *  - 參數
 *   - 1.表示開始位置的索引
 *   - 2.表示刪除的數量 (與slice不同) 
 *   - 3.第三個參數之後，可以插入新元素至開始位置索引"前面"
 */

let arr = ["張學友","周潤發","梁朝偉","劉德華","張曼玉"];
let deletedArr = arr.splice(1,3,"孫悟空","唐三藏");
console.log(arr);
console.log(deletedArr);

// 用於單純插入元素
console.log(arr);
let deletedNewArr = arr.splice(2,0,"麥克傑克森")
console.log(deletedNewArr);
console.log(arr);

//用於替換元素
let deletedNewArr2 = arr.splice(2,1,"瑪麗蓮夢露")
console.log(deletedNewArr2);
console.log(arr);



let myArray = [
    { age: 21 },
    { name: 'Sara' },
    { test01: 'bla' },
    { test02: 'bla' }
  ];

  console.log(myArray);
  
  
  myArray.splice(0,1,{ test: "Jhon" })
  console.log(myArray);