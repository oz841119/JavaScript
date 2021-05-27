// 請你分別用 for loop 以及 while 迴圈，印出 1~9
for(i=1 ; i<=9 ; i++){
    console.log(i);
};

let num = 1;
while(num<=9){
    console.log(num);
    num++
}


//請寫一個函式叫做 print，接收一個是數字的參數 n，並且印出 1~n
function print(n){
    for(i=1 ; i<=n ; i++){
        console.log(i);
    }
}
print(15);

//寫一個函式 star，接收一個參數 n，並印出 n 個 *
function star(n){
    let star = ""
    for(i=1 ; i<=n ; i++){
        star = `${star}*`
    }
    console.log(star);
}

star(5);

//請寫出一個叫做 starReturn 的 function 並且接受一個參數 n，能回傳 n 個 *
function starReturn(n){
    let star = ""
    for(i=1 ; i<=n ; i++){
        star = `${star}*`
    }
    return star;
}
console.log(starReturn(7));


//請寫一個叫做 isUpperCase 的 functuon，並且接收一個字串，回傳這個字串的第一個字母是否為大寫
function isUpperCase(str){
    return /^[A-Z]/.test(str)
};
console.log(isUpperCase("Rst"));


//請寫一個 function position
//接收一個字串並回傳這個字串裡面的第一個大寫字母跟它的 index，若沒有則回傳 -1
function position(str){
    for(i=0 ; i<str.length ; i++){
        if(/[A-Z]/.test(str[i])){
            console.log(i);
            return `${str[i]},${i}`
        }
    }
    return -1;
}
console.log(position("zxxccZ"));



//請寫出一個函式 findSmallCount，接收一個陣列跟一個數字 n，回傳有多少個數小於 n
function findSmallCount(array,n){
    let lessThanN = 0
    for(i=0 ; i<array.length ; i++){
        if(array[i] < n){
            lessThanN++
            return
        }
    }
    
}
//console.log(findSmallCount([3,4,5,5,6,7,7,8]),6);

/*
接收數組和N
遍歷數組
找到小於N的數組索引
回傳索引的各數
*/
