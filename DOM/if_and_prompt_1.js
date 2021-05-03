//(1)
let score = prompt("請輸入你的成績，讓我看看你能拿到什麼offer"); //將用戶輸入的值賦值給變量
if(score == 100){
    alert("你可以到Google當軟體工程師");
}else if(score > 100){
    alert("你不要豪洨")
}else if(score > 80){
    alert("不錯呦，百萬月薪")
}else if(score > 60){
    alert("一般般，可以到一般企業上班");
}else if (score > 40){
    alert("多敲些程式碼在出來找工作");
}else{
    alert("建議轉職");
}
//(1)優化
let score1 = prompt("請輸入你的成績，讓我看看你能拿到什麼offer"); //將用戶輸入的值賦值給變量
if(score1 > 100 || score1 <= 0 || isNaN(score1)){
    alert("不要豪洨")
}else{
    if(score1 == 100){
        alert("你可以到Google當軟體工程師");
    }else if(score1 > 80){
        alert("不錯呦，百萬月薪")
    }else if(score1 > 60){
        alert("一般般，可以到一般企業上班");
    }else if (score1 > 40){
        alert("多敲些程式碼在出來找工作");
    }else{
        alert("建議轉職");
    }
}

//(1)避免用戶輸入0-100以外的分數 所以加入while提示用戶重新輸入
let score2 = prompt("請輸入你的成績，讓我看看你能拿到什麼offer"); //將用戶輸入的值賦值給變量
if(score2 > 100 || score2 <= 0 || isNaN(score2)){
    alert("不要豪洨")
}else{
    if(score2 == 100){
        alert("你可以到Google當軟體工程師");
    }else if(score2 > 80){
        alert("不錯呦，百萬月薪")
    }else if(score2 > 60){
        alert("一般般，可以到一般企業上班");
    }else if (score2 > 40){
        alert("多敲些程式碼在出來找工作");
    }else{
        alert("建議轉職");
    }
}

//(2)
let higeht = prompt("請輸入你的身高");
let deposit = prompt("請輸入你的存款")
let faceValue = prompt("請輸入你的顏值(0-500)")
if(higeht >= 180 && deposit >= 5000000 && faceValue >= 400){
    alert("我們可以結婚了");
}else if (higeht < 180 || deposit < 5000000 || faceValue < 400){
    alert("我們可以交往看看")
}else if(higeht >= 180 || deposit >= 5000000 || faceValue >=400){
    alert("我們還是當朋友就好");
}else{
    alert("滾");
}
