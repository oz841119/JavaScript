/*
 * 創建一個函數 可以輸出個人訊息
 *      實參可以是任意參數類，可以是物件，也可以是函數
 *      當我們的參數過多時，可以封裝進物件中，透過物件傳遞
 */

function sayHello(o){
    console.log(`我是${o.name}，今年${o.age}，我是個${o.gender}，住在${o.address}。`);
}

let obj = {
    name : "劉德華",
    age : 29,
    gender : "男",
    address : "香港",
}

sayHello(obj);

//// 

function fun(a){
    console.log(`a = ${++a}`);  //要顯示自增後的值 需是++a 而不能是a++ 因為a++是先輸出a後自增
}
fun(10)


/*
 * x(fun()) 
 *    - 調用函數
 *    - 相當於使用函數的返回值
 * x(fun) 
 *    - 函數物件
 *    - 相當於直接使用函數對象
 */