/*
    https://www.bilibili.com/video/BV1YW411T7GX?p=61&spm_id_from=pageDriver
    解析器在每次調用函數時都會向函數內部船第一個隱含的參數
    這個隱含參數就是this this指向的是一個object
    這個object一般稱為函數執行的上下文物件
    根據函數調用的方式不同 指向不同物件
    意指 誰調用了函式 this就會指向該物件
        1 - 以函數形式調用時 this是window
            - fun() 以函數調用
        2 - 以方法形式調用時 this就是調用方法的物件
            - obj.sayName() 以方法調用
*/




function fun(a,b){
    console.log(this.userName);
}

var obj = {
    userName:"劉德華",
    sayName:fun
}

var obj2 = {
    userName:"張學友",
    sayName:fun
}


// fun()    
// obj.sayName();
// obj2.sayName();