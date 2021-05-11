/* 主要功能為修正this的指向
 *    call() and apply()
 *      - 需要通過函數物件調用
 *      - 可以將一個物件作為第一個參數，此時物件會成為函數執行時的this
 *          call()方法可以將實參在物件之後依次傳遞
 *          apply()方法需要將實參封裝到一個數組中統一傳遞
 */

// ------ call()
function funCall(welcome,text){
    console.log(`姓名：${this.name}`);
    console.log(`性別：${this.gender}`);
    console.log(`年齡：${this.age}`);
    console.log(`${welcome}`);
    console.log(`${text}`);
}

function funApply(welcome,text){
    console.log(`姓名：${this.name}`);
    console.log(`性別：${this.gender}`);
    console.log(`年齡：${this.age}`);
    console.log(`${welcome}`);
    console.log(`${text}`);
}

var obj = {
    name : "我是obj內的名字",
    gender : "女",
    age : 40,
    sayName : function(){
        console.log(this.name);
    }
}

var obj2 = {
    name : "我是obj2內的名字",
    gender : "男",
    age : 20,
    sayName : function(){
        console.log(this.name);
    }
}

obj.sayName.apply(obj2)

// call()和apply()的差異
// call() - 物件後的實參為一個一個傳遞
// apply() - 需將物件後的實參封裝到數組內一次傳遞
funCall.call(obj,"歡迎您的到來","很高興為您服務")
funApply.apply(obj2,["歡迎您的到來","很高興為您服務"])