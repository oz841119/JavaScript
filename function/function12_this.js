
function fun(){
    console.log(this.userName); 
}; 
// 這裡執行的語句可以跟隨調用的方式產生變動 這就是this的意義


var obj = {
    userName:"劉德華",
    sayName:fun,
}

var obj2 = {
    userName:"張學友",
    sayName:fun,
}

fun();
obj.sayName();
obj2.sayName();


