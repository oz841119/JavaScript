/*
 * JS數據類型(複習)
 *  - String
 *  - Number
 *  - Boolean
 *  - Null 空值
 *  - Undefined
 *  - Symbol 符號 (ES6新增) 用來改善Object的屬性(property)只能是字串的問題
 *      - 以上屬基本資料類型
 *  - Object 對象(物件)
 *      - 引用數據類型
 * 
 * 基本資料類型皆為單一值，值與值之間不會有聯繫
 *  - 在js中想要表示人的資料(name,gender,age等...)
 *     let userName="John" , gender="man" , age=25
 *     那麼每個變數皆是獨立的 沒有任何關聯
 * 
 * Object
 *  - 屬於複合的資料類型
 *      可以保存多個不同資料類型的屬性
 *  - 物件分類
 *      1.內建物件
 *          - 由ES標準中定義的物件，在任何的ES的實現中都可以使用
 *          - Ex:Math String Number Boolean Function Object等...
 *      2.宿主物件
 *          - 由js的運行環境提供的物件，主要由瀏覽器提供
 *          - Ex:BOM DOM等...
 *            如console.log() document.write()等皆是物件
 *      3.自定義物件
 *          - 由開發人員自行創建
 *        
 */      

//創建物件 - 使用new關鍵字調用的函數,為構造函數constructor,專門用來創建物件的函數
let obj = new Object();
console.log(obj);
console.log(typeof obj);

/*
 * - 在物件中保存的值稱為屬性
 *     向物件添加屬性
 *       語法: 物件.屬性名=屬性值
 */

//【添加屬性】
//向obj添加一個name屬性
obj.name = "劉德華";
console.log(obj);
//添加其他屬性屬性
obj.gender = "男";
obj.age = 25;
console.log(obj);

//【讀取物件屬性】 語法: 物件.屬性名
console.log(obj.gender);
console.log(obj.age);
console.log(obj.name);

//【修改物件屬性值】 語法： 物件.屬性名=新值
console.log(obj.name);
obj.name = "張學友";
console.log(obj.name);

//【刪除物件屬性】 語法: delete 物件.屬性名
console.log(obj.age);
delete obj.age;
console.log(obj.age);