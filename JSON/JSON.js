/*
    JSON
        - JavaScript Object Notation (JS物件表示法)
        - JS和JSON物件的格式一樣，但JSON字符串中的"屬性名"必須加雙引號

    用途
        - JS中的物件只有JS自己認識，其他語言都不認識
        - 所以JSON是一個特殊格式的字符串 這個字符串可以被任意語言所識別
            並轉換為任意語言中的物件,JSON在開發中主要用於前後端的數據交互

    JSON分類
        1.物件{}
        2.數組[]
    
    JSON中允許的「值」
        1.字符串
        2.數值
        3.布爾值
        4.null
        5.物件 - 普通物件，值不可『函數』
        6.數組
*/


// JS
let obj_js = {userName: "孫悟空" , age: 18 , gender: "男"};

// JSON Object轉String 屬性名增加"雙引號"
let obj_json = '{"userName": "孫悟空" , "age": 18 , "gender": "男"}'
// JSON數組中有兩個Object
let arr_json = '[{"userName": "孫悟空" , "age": 18 , "gender": "男"},{"userName": "孫悟空" , "age": 18 , "gender": "男"}]'

/*
    在JS中 物件的屬性名加不加單雙引號都可以 
    但只要物件需要轉為JSON作交互(物件轉為字符串'') 則屬性名一定要添加"雙引號"
 */
// 原理上是這樣 但JS也提供了方法可以直接轉換

// 將JS物件透過方法直接轉換成JSON JSON.stringify()
let personObjJs = {userName: "趙傳" , age: 56 , gender: "男"};
let personObjJsToJson = JSON.stringify(personObjJs);
console.log(typeof personObjJsToJson);
console.log(personObjJsToJson);

// 將JSON轉換為JS物件 (一般用於其他端口將JSON傳進JS中) JS為了將JSON轉換為JS可以操作的物件而使用
// 工具類 JSON.parse() 以JSON字符串作為參數 轉換為JS物件
let obj2_json = '{"userName": "唐三藏" , "age": 50 , "gender": "男"}'
let obj2JsonToJs = JSON.parse(obj2_json);
console.log(typeof obj2_json);
console.log(typeof obj2JsonToJs);
console.log(obj2JsonToJs);
console.log(obj2JsonToJs.age);

let arr2_json = '[{"userName": "劉德華" , "age": 25 , "gender": "男"},{"userName": "關芝琳" , "age": 18 , "gender": "女"}]'
let arr2JsonToJs = JSON.parse(arr2_json);
console.log(typeof arr2_json);
console.log(typeof arr2JsonToJs);
console.log(arr2JsonToJs);
console.log(arr2JsonToJs[1]);

