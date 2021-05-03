//呼叫Function內的Function

function buyItem(){
    var myMoney = 100;
    return function(price){ //閉包
        myMoney = myMoney - price;
        return myMoney;
    }
}
let balance = buyItem()(90); //存取內部函數的變數
console.log(balance);



/*
 * 立即調用函數 並直接從內存刪除
 *      語法 - (function(形參,形參...){語句})(實參)
 *          這種方式可設置匿名函數並直接執行 執行完後直接刪除 屬於一次性使用
 */

(function(a,b){
    console.log(`a = ${++a}`);
    console.log(`b = ${++b}`);
})(1,2)

// 與非立即執行函數的差異
function fun(c,d){
    console.log(`c = ${++c}`);
    console.log(`d = ${++d}`);
}
fun(3,4)   // 需調用函數才會執行