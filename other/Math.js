/*
 * Math
 *   -  Math不是構造函數
 *   -  屬於一個工具類，不用創建物件
 *      裡面封裝相關數學的屬性及方法
 *          -  Math的內建『常量』屬性皆為大寫寫法 Ex: Math.PI
 *
 */

// Math.ceil() 無條件進入法
console.log(Math.ceil(2.8));

// Math.floor() 無條件捨去法
console.log(Math.floor(6.8));

// Math.round() 四捨五入
console.log(Math.round(5.4));
console.log(Math.round(5.5));

/*
 * Math.random()
 *  - 0-1之間的隨機數
 *    - 可以透過乘法去取得相對應的隨機整數
 */
console.log(Math.random());
console.log(Math.random()*100);

// Math.max() 獲取多個數中的最大值 min()反之
let max = Math.max(1,5,7,4,2,5,7,8,5,9,6);
console.log(max);

// Math.pow(x,y) 返回x的y次冪
let pow = Math.pow(5,6);
console.log(pow);