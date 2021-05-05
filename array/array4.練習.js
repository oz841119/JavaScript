/*
 *
 *
 *
 */

function Person(name , age , gender){
    this.name = name;
    this.age = age;
}

Person.prototype.toString = function(){
    return "Person[name="+this.name+",age="+this.age+"]"
};

var per0 = new Person("孫悟空",18)
var per1 = new Person("唐三藏",36)
var per2 = new Person("豬八戒",29)
var per3 = new Person("沙悟淨",8)
var per4 = new Person("牛魔王",30)
var per5 = new Person("觀世音",17)
var per6 = new Person("白骨精",44)

/*
 * 將Person放入數組裡
 */

var perArr = [per0,per1,per2,per3,per4,per5,per6];
console.log(perArr);

/*
 * 創建函數 將perArr中滿18歲的Person提取出來
 *  然後封裝到到一個新數組並返回
 *   -  arr
 *      形參，要提取信息的數組
 */

function getAdult(arr){
    var newArr = [];
    
    //遍歷arr 獲取arr中Person物件
    for(i=0 ; i<arr.length ; i++){
        var p = arr[i];
            //判斷Person物件的age是否大於等於18
            //如果大於等於18 則添加到newArr中
        if(p.age >= 18){
            newArr.push(p)
        }
    }
    return newArr;
}

var result = getAdult(perArr);
console.log(result);