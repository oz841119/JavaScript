window.onload = function(){

    let areaDiv = document.getElementById("areaDiv");
    let showMsg = document.getElementById("showMsg");


    /*  --- < 事件對象 > ---
     *    - 當事件響應函數被觸發時，瀏覽器每次會將一個事件作為實參傳遞進響應函數
     *        在事件對象中封裝了當前事件相關的一切信息 
     *          例如：滑鼠座標 滑鼠滾動 按鍵等
     *
     */
    areaDiv.onmousemove = function(event){
        event = event || window.event; // 用於兼容ie8以下
        let x = event.clientX;
        let y = event.clientY;
        showMsg.innerHTML = `x = ${x} &nbsp&nbsp,&nbsp&nbsp y = ${y}`;
    }

}