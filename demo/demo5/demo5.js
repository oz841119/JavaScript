window.onload = function(){

    /*
     * 1.透過數組獲取圖片張數來設置ul容器的寬度
     * 2.設置數組來獲取圖片的長度
     * 3.利用數組長度來判斷容器的寬度應給到多少
     */
    let ulImgSwitch = document.getElementById("ulImgSwitch");

    // 建議透過父元素來獲取標籤 否則直接獲取標籤名的話 MacOS的Google瀏覽器會有些問題(2021.06.06)
    let arrImg = document.getElementById("ulImgSwitch").getElementsByTagName("img");
    ulImgSwitch.style.width = (512+20)*arrImg.length+"px"

    /* （舊方法，慎用）
     *  設置divNar的位置，使他水平居中 垂直已在CSS製作完成
     */
    let divNav = document.getElementById("divNav");
    let divImgSwitch = document.getElementById("divImgSwitch");
    divNav.style.left = (divImgSwitch.offsetWidth - divNav.offsetWidth)/2 + "px";
    
    /* 
     * 默認開啟網頁時 顯示圖片的索引 並在導航紐中進行特效
     *    1.先默認索引為0
     *    2.獲取所有超連結 會封裝進數組
     */

    let indexImg = 0;
    let index = 0;
    let allA = document.getElementsByTagName("a");
    allA[indexImg].style.backgroundColor = "black";
    
    let timer;

    for(i=0 ; i<allA.length ; i++){
        
        /* 
         * for循環會在js加載完畢後執行
         * 所以需要為每個超連接添加一個屬性 用作標記
         *   如果for循環內的i不是用let宣告則可以使用這種方式
         *   用來辨識當前this是哪個索引
         */
        allA[i].num = i

        //為超連接綁定響應函數
        allA[i].onclick = function(){

            //避免點擊時的動畫與自動切換的動畫一起執行 所以先清除定時器
            clearInterval(timer);

            index = this.num;

            //切換圖片
            //ulImgSwitch.style.left = -532*index + "px";
            move(ulImgSwitch , -532*index , 50 , "left" , function(){

            });
            //修改正在選中的導航
            allA[index].style.backgroundColor = "black"

            setAColor();

            //點擊動畫執行完畢後開啟定時器繼續自動切換
            autoSwitch();
        }
    }

    // 自動切換圖片
        autoSwitch();
    
    function autoSwitch(){
        timer = setInterval(function(){
            index++;
            if(index == arrImg.length){
                index = 0;
            }

            console.log(arrImg);
            move(ulImgSwitch , (-532)*index , 40 , "left" , function(){
                //補充導航應跟著自動切換而變換
                setAColor();
            })
        },1000);
    };

    // 遍歷allA 使其顏色全變為CSS中的顏色(空串)
    //   如果在這設置為紅色 則內聯樣式優先及最高 會產生一些小BUG
    function setAColor(){

        //判斷當前索引是否為最後一張圖片(新增一張與第一張一樣的圖給最後一張)
        if(index >= arrImg.length - 1){
            index = 0;

            //解決到最後一張依然往左輪播的問題
            ulImgSwitch.style.left = 0;
        }
        for(i=0 ; i<allA.length ; i++){
            allA[i].style.backgroundColor = "";
        };
        
        allA[index].style.backgroundColor = "black";
    };


    /* <------------ tools ------------> */

            /*
         *  一個通用函式 獲取指定元素當前的樣式
         *    參數:
         *          obj 要獲取樣式的元素
         *          name 要獲取的樣式名
         */  
            function getStyle(obj , name){
                if(window.getComputedStyle){
                    //正常瀏覽器的方式 具有getComputedStyle()方法
                    return getComputedStyle(obj , null)[name];
                }else{
                    // IE8的方式 沒有getComputedStyle()方法
                    return obj.getComputedStyle[name];
                }
            }
    
            /*
             * 創建另一個可以執行簡單動畫的通用函數
             *   參數：
             *       1.obj - 要執行的物件
             *       2.target - 執行動畫的目標位置
             *       3.speed - 速度,有正負值
             *       4.attr - 要修改的樣式 例如top left width...
             *       5.callback - 回調函數，將會在動畫執行完畢後執行
             */
             function move(obj , target , speed , attr , callback){
                clearInterval(obj.timer);
    
                //創建一個變量獲取元素當前位置
                let current = parseInt(getStyle(obj , attr));
    
                //判斷速度的正負值
                //若是0向800移動 則speed為正
                //反之則為負
                if(current > target){
                    speed = -speed
                }
    
                obj.timer = setInterval(function(){
    
                    let oldValue = parseInt(getStyle(obj , attr));
                    let newValue = oldValue + speed;
                    
                    // 向左移動時 避免超出最左側 需判斷newValue是否小於target
                    // 向右移動時 避免超出目標 需判斷newValue是否大於target(目標)
                    if((speed < 0 && newValue < target) || (speed > 0 && newValue > target)){
                        newValue = target;
                    }
                    // 將新值設置給box1
                    obj.style[attr] = newValue + "px";
                    
                    // 當動畫執行完畢時關閉定時器
                    if(newValue == target){
                        clearInterval(obj.timer);
                        
                        //調用回調函數 有實參傳遞callback才調用 否則會報錯
                        callback && callback(); 
                    }
    
                } , 20);
            }

}