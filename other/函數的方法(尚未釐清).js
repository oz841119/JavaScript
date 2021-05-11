function fun(){
    console.log("我是fun函數！");
}

/*
 * call() / apply() 函數的方法
 *   - 需要通過函數來調用
 *   - 當對函數調用call()和apply()都會調用函數執行
 *   - 調用這兩種方法時 可以對物件指定為第一個參數
 *         此時這個函數將會成為函數執行時的this
 *   - call()方法可以將實參在物件之後依次傳遞
 */

fun();  // 函數返回值
fun; // 這才是函數物件
fun.call();
fun.apply(); 

//

function fun2(){
    console.log(this.aName);
};

var obj = {aName: "obj"}
var obj2 ={aName: "obj2"}
fun2(obj); // object window
fun2.call(obj2); //object object

// - call()方法可以將實參在物件之後依次傳遞

function fun3(userName,gender){
    console.log(`Name:${this.userName},gender:${gender}`);
}

var obj4 = {
    userName:"i am obj4",
    sayName:function(){
        console.log(this.userName)
    }
}
fun3(obj4.userName)