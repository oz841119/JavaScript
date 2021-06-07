window.onload = function(){

    // 當div具有collapsed的class時,div就是折疊的 反之則是展開的

    // 獲取所有class為menuSpan的元素(querySelectorAll可兼容IE8)
    // 並綁定單擊響應函數
    let menuSpan = document.querySelectorAll(".menuSpan")
    
    // 定義一個變量 用來保存當前打開的菜單
    let openDiv = menuSpan[0].parentNode; //網頁開啟後默認開啟的div

    //實現若無collapsed則添加 反之的功能
    for(i=0 ; i<=menuSpan.length ; i++){
        menuSpan[i].onclick = function(){
            let parentDiv = this.parentNode;

            toggleMenu(parentDiv);//調用動畫方法 函數在下面


            // 1.判斷openDiv != parentDiv才進行添加
            //   否則當沒有DIV展開時 會造成點擊無法展開的狀況
            // 2.為了統一處理動畫效果，將addClass改為toggleClass
            //   必須在條件式中在加一個 && !hasClass(openDiv , "collapsed") 避免產生BUG
            //   因為此處的toggleClass()不需要具有移除功能
            if(openDiv != parentDiv && !hasClass(openDiv , "collapsed")){
                // 打開菜單後需要關閉另一個菜單
                //addClass(openDiv , "collapsed");
                //toggleClass(openDiv , "collapsed");
                toggleMenu(openDiv);//調用動畫方法 取代toggleClass方法

            }
            openDiv = parentDiv;
        }
    }





    // <---創建一個通用函數 toggleMenu 用來製作動畫---> //
    function toggleMenu(obj){
        let begin = obj.offsetHeight; //動畫 - 在切換之前獲取高度
        toggleClass(obj , "collapsed"); //tools.js內的方法
        let end = obj.offsetHeight; //動畫 - 在切換之後再獲取高度

        obj.style.height = begin + "px"; //將元素的內聯高度重置為begin

        //執行動畫
        move(obj , "height" , end , 30 , function(){
            obj.style.height = ""; // 動畫執行完後將內聯樣式清除
        })
    }
}