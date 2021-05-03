/*
var obj = {
    userName:"劉德華",
    age:18,
    gender:"man",
    sayName:function(){
        alert(this.userName)
    }
}

var obj2 = {
    userName:"張學友",
    age:18,
    gender:"man",
    sayName:function(){
        alert(this.userName)
    }
}

var obj3 = {
    userName:"梁朝偉",
    age:18,
    gender:"man",
    sayName:function(){
        alert(this.userName)
    }
}
*/
// - 太麻煩了 所以需要使用工廠方法創建物件

function createPreson(userName,age,gender){
    var obj = new Object() // - 創建一個新物件
    obj.userName = userName;
    obj.age = age;
    obj.gender = gender;
    obj.sayName = function(){
        alert(this.userName)
    }
    return obj // - 返回物件
}
var obj4 = createPreson("劉德華",29,"Man")
let obj5 = createPreson(`幹你娘`,`18`,`Woman`)
console.log(obj4);
console.log(obj5);

//
// - 創建狗的物件
function createDog(dogName,age){
    let objDog = new Object()
    objDog.dogName = dogName;
    objDog.age =age;
    objDog.sayName = function(){
        alert("汪汪~~~")
    }
    return objDog; 
}
let dog = createDog("1,2");
dog.sayName();
