//newObject簡易寫法  new Object() = {}
let obj = {};
console.log(typeof obj);
obj.userName = "周潤發";
console.log(obj.userName);

//直接再創建物件時增加屬性
let obj2 = {userName:"劉德華" , age:19 , gender:"Man" , height:189};
console.log(obj2);

//但實務上為了讓結構更清晰 一般這樣寫
let obj3 = {
    userName:"劉德華",
    age:19,
    gender:"Man",
    height:189,
    nickName:obj.userName //一樣可以增添其他對象的屬性
};
console.log(obj3);