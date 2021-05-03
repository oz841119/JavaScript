//輸出1-100之間所有奇數之和
//1
let sum = 0;
for(i=1 ; i<=100 ; i+=2){
    sum = sum + i;
}
console.log(sum);

//2
for(p=1 , sum1=0 ; p<=100 ; p++){
    if(p%2 != 0){
        sum1 = sum1 + p;
    }
}
console.log(sum1);


//輸出1-100之間 7倍數的個數及數字總和
//1

for(count=0 , sum7=0 , I=1 ; I<=100 ; I++){
    if(I%7 === 0){
        sum7 = sum7 + I
        count++
    }
}
console.log(count);
console.log(sum7);

//輸出所有水仙花數
for(s=100 ; s<=999 ;s++){ 
    let bai = parseInt(s/100); //獲得百位數字
    let shi = parseInt((s-bai*100)/10); //獲得十位數字
    let gi = s%10;  //獲得個位數字
    if(bai*bai*bai + shi*shi*shi + gi*gi*gi == s){ //判斷s是否為水仙花數 是則執行
        console.log(s);
    }
}

