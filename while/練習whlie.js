//投資年利率為5% 從1000塊增長到5000塊需要多少年

let money = 1000;
let count = 0  //聲明一個變量為計數器 查驗代碼執行次數
while(money <= 5000){
    money*=1.05;
    count++;
}
console.log(`${money}`);
console.log(`一共需要${count}年`);