window.onload = function(){

    let btn01 = document.getElementById("btn01");
    btn01.onclick = function(){
        alert(1);
    }

    btn01.onclick = function(){
        alert(2);
    }
    /* 使用 物件.事件 = 函數的形式綁定響應函數
     *   - 他只能同時為一個物件綁定一個響應函數
     *   - 如果添加多個響應函數 則會覆蓋掉
     */


    /*  透過 addEventListener() 方法
     *      - 也可以綁定響應函數
     *      - 參數.
     *           1.事件字符串 (事件方法名稱不一定完全相同)
     *           2.回調函數,當事件觸發時會被調用
     *           3.是否在捕獲階段觸發事件 一般為false
     *      - 可以同時為一個物件的相同事件同時綁定多個響應函數
     */
    let btn02 = document.getElementById("btn02");
    btn02.addEventListener("click",function(){
        alert(1);
    },false)
    btn02.addEventListener("click",function(){
        alert(2);
    },false)
    btn02.addEventListener("click",function(){
        alert(3);
    },false)
    

    
};