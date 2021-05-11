/* - JS終是大量物件導向的語言
 *   一般比較少將函數的內容寫死
 *   所以需要用this調用想要配合的物件來執行函數
 */
function fun(){
    console.log(this);
}

fun(); // 以函數調用 此時this為windeow

// ------- //

function fun2(){
    console.log(this);
}

var obj2 = {
    name : "我是以方法調用" ,
    sayName : fun2
}

obj2.sayName()  //以方法調用

// ------- //

function fun3(){
    console.log(this.name);
}

var obj3 = {
    name : "只打印物件內的名字：劉德華",
    sayName : fun3
}

obj3.sayName();

// ------- //

function fun4(){
    console.log(this.name);
}

var name = "我是window全局作用域中的名字";
fun4()

// ------- window調用建議用瀏覽器驗證 // 

