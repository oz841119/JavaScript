/*
switch(條件表達式){
    csse 表達式:
        語句...
        break;  //若不寫break 判斷全等時會向下開始執行 不論接下來結果為true or false
    csse 表達式:
        語句...
        break;
    csse 表達式:
        語句...
        break;
    default:  //結果都為false時才會執行default
        語句...
        break;
}
*/

let num = 3;
switch(num){
    case(1):
        console.log(`壹`);        //false 跳過
        break;                    // break 不會對判斷中的語句進行終止 所以接續判斷
    case(2):
        console.log(`貳`);        //false 跳過
    case(3):
        console.log(`叁`);        //ture 開始執行
    case(4):
        console.log(`肆`);        //繼續執行
    case(5):
        console.log(`伍`);
        break;                   // break 執行中進行終止　而非「判斷中」
    case(6):
        console.log(`陸`);        //已退出 所以不會執行
}
