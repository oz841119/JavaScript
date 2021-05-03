//輸出1-100的質數 
//break 終止循環
//Math.sqrt() 對一個數進行開根號
console.time("text"); //測試性能計時器起點

for(i=2 ; i<=100 ; i++){
    let flag = true;
    for(j=2 ; j<=Math.sqrt(i) ; j++){ //使用開根號讓取值範圍更小 性能更好 (數學概念問題)
        if(i%j==0){
            flag = false;
            break; //判斷非質數則直接跳出內層循環 提高性能
        }
    }
    if(flag == true){
         console.log(i);
    }
}

console.timeEnd("text"); //測試性能計時器起點