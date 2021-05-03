// while 先判斷條件有沒有被滿足 才執行 //
let total = 0 ;
let input = prompt("輸入數字") ; // prompt = 彈跳窗
while (input !== "q") {
    total += parseInt(input) ; // parseInt = 字串轉數字
    input = prompt("q") ; 
} 
console.log(`total: ${total}`) ;

// do while 先執行 才判斷條件有無滿足//
let k = 1 ;
do {
    console.log(k) ;
    k++ ; 
} while(k <= 5) ;

