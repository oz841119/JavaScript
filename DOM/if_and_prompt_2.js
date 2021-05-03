let score = prompt("123");
while(ture){
    let score = prompt("123");
    if(score >=0 && score <=100){
        alert("正確");
        break;
    }else{
        alert("請重新輸入")
    }
}

/*
//(1)避免用戶輸入0-100以外的分數 所以加入while提示用戶重新輸入
let a = prompt("請輸入你的成績"); //1.獲取用戶輸入的成績
while(a < 0 || a > 100 || isNaN(a) || a === null){ //2.判別用戶輸入的成績是否為0-100 如果不是 則要求重新填寫
    a = prompt("你輸入的成績非0-100之間 請重新輸入");
}
if(a >= 0 && a <= 100){
    alert("你輸入的為0到100");
}

//＊＊＊＊＊＊＊＊＊＊待解決 不輸入內容按下確定會執行 0-100＊＊＊＊＊＊＊＊＊＊
*/