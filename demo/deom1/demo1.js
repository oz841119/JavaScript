window.onload = function(){

    let img1 = document.getElementById("img1");
    
    // 將要切換的圖片封裝到數組中
    let imgArr = [
        "img/after-effects.png",
        "img/animate.png",
        "img/audition.png",
        "img/dreamweaver.png",
        "img/illustrator.png",
        "img/indesign.png",
        "img/photoshop.png",
        "img/premier.png",
    ];

    
    // 宣告一個變量 用來對應索引
    let index = 0;

    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");

    /* 
     * 在全域中宣告一個變量 為定時器
     *   避免在局部作用域宣告會無法讓關閉定時器獲取不到局部變量
     */ 
    let timer;

    
    btn1.onclick = function(){

        // 先做一次關閉 避免因重複開啟定時器導致無法關閉
        clearInterval(timer);

        // 在局部作用域將全局變量賦值
        timer = setInterval(function(){

            // 索引遞增
            index++

            // 索引大於索引本身的長度時歸0 達到重複輪播效果
            if(index >= imgArr.length){
                index = 0
            }

            img1.src= imgArr[index];
        },300);

    };

    // 關閉定時器
    btn2.onclick = function(){
        clearInterval(timer);
    }

}