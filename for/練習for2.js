/*
先判斷條件 用戶輸入值是否大於一 如果不是
判斷對方輸入是否為質數   我怎麼判斷呢
1.整數不能被1或自己以外的數整除 所以除後結果為1或自己 其餘也一定為0
*/

let num = prompt("輸入一個大於 1 的數")
if(num <= 1){
    alert("輸入一個大於 1 的數！！！")
}else{

    //宣告一個變量 用以保存當前值的狀態 默認當前值是質數
    var flag = true;

    //判斷num是否為質數
    //獲取2-num之間的數
    for(i=2 ; i<num ; i++){ //判斷num是否可以被i整除
        if(num%i == 0){   //如果num能被i整除 說明不是質數
            flag = false;
        }
    }
}

if(flag){
    alert(`${num}`)
}else{
    alert(`${num}不是質數！！！`)
}