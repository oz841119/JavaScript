window.onload = function(){
    
    let btn01 = document.getElementById("btn01")
    btn01.onclick = function(){
        box1.style.width = "250px";
        box1.style.height = "250px";
        box1.style.backgroundColor = "green" ; 
    };

    let btn02 = document.getElementById("btn02");
    btn02.onclick = function(){
        alert(box1.style.width); // 只讀內聯樣式
    }

    /*
     * getComputedStyle(參數1,參數2)
     *   - window的方法
     *   - 參數1為要獲取的樣式的元素
     *   - 參數2為偽元素 一般傳null
     * 會返回一個對象，封裝著元素的『當前』樣式
     * 如果樣式沒有設置 則真實的值(意指可能隨著使用者的視窗大小改變) 而非返回auto
     */
    let btn03 = document.getElementById("btn03");
    btn03.onclick = function(){
        alert(getComputedStyle(box1,null).width);
    }

};