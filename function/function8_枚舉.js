let obj = {
    userName:"孫悟空",
    age:18,
    gender:"男",
    address:"花果山",
};

//枚舉物件中的屬性 for ... in語句
/*
 *  語法：
 *    for(let 變量 in 物件){
 *    }
 *      語句中有幾個屬性 循環體就會執行幾次
 *        每次執行時會將物件中屬性名賦值給變量
 */

for(let n in obj){
    console.log(n);
    console.log(obj[n]);
}
