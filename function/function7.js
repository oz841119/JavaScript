let obj = new Object();
obj.userName = "金城武"
obj.age = 18;

//對象的屬性值可以是任何數據類型 包括函數
obj.sayName = function(){
    console.log(obj.userName);
};
obj.sayName();