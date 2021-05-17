window.onload = function(){
    //點擊按鈕切換圖片
    //獲取按鈕
    let prev = document.getElementById("prev");
    let next = document.getElementById("next");

    //獲取img標籤
    let img = document.getElementsByTagName("img")[0];

    //創建數組 保存圖片路徑
    let imgArr = ["../IMG/01.jpeg","../IMG/02.jpeg","../IMG/03.jpeg","../IMG/04.jpeg","../IMG/05.jpeg"]
    //創建變量 保存圖片索引
    let index = 0;

    //獲取id為info的元素
    let info = document.getElementById("info");
    //設置提示文字
    info.innerHTML = `共${imgArr.length}張圖，目前第${index+1}張`

    
    //綁定按鈕
    prev.onclick = function(){

        //索引變動
        index--;

        //判斷index是否小於0 小於0則返回0
        if(index < 0){
            index = imgArr.length - 1;
        };

        //切換圖片就是修改img的src屬性
        img.src = imgArr[index];

        //設置提示文字
        info.innerHTML = `共${imgArr.length}張圖，目前第${index+1}張`
    }
    
    next.onclick = function(){

        index++;

        if(index>imgArr.length -1){
            index = 0;
        }

        img.src = imgArr[index];

        //設置提示文字
        info.innerHTML = `共${imgArr.length}張圖，目前第${index+1}張`
    }
}