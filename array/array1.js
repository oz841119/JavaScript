var arr1 = [0,10,20,30,40,50];
console.log(arr1);
console.log(arr1[4]);
console.log(arr1.length);

//使用構造函數創建數組時，也可以同時添加元素，將要添加的元素作為構造函數參數傳遞
var arr = new Array(0,11,22,33,44);
arr.hello = "abc";
console.log(arr[2]);
console.log(arr.hello); // 也是物件 也能用來存屬性 但不列入索引序列
console.log(arr.length);

//

var arr3 = [0,2,4,6,8];
arr = [10]; // 此時只有一個索引為0 索引值為10
console.log(arr[0]);

//只有一個整數時，表示創建一個長度為10的數組
var arr4 = new Array(10);
console.log(arr4);
console.log(arr4.length);

//可以放任何型態
var arr5 = [54,"Hello",true,null,undefined];
console.log(arr5);

//也可以放物件
var obj = {name:"劉德華"};
var arr6 = [0,11,22]
arr6[arr6.length] = obj;
console.log(arr6[3].name);

arr6 = [{name:"劉德華"},{name:"孫燕姿"},{name:"張學友"}];
console.log(arr6[1].name);

//也可以放函數
var funArr = [function(){alert("索引0")},function(){alert("索引1")}]
funArr[1]();

//也可以放數組 稱為二維數組 三維數組 四維數組等
var arrArr = [["索引0",11,12,13],["索引1",21,22,23],["索引2",31,32,33]]
console.log(arrArr);
console.log(arrArr[1][2]); //打印arrArr數組中的索引1的索引2
console.log(arrArr);
console.log(arrArr[3]);