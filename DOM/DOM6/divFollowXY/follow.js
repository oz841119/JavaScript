window.onload = function(){

    let box1 = document.getElementById("box1");
    document.onmousemove = function(event){
        
        //瀏覽器事件兼容
        event = event || window.event;

        //兼容 獲取滾動距離
        st = document.documentElement.scrollTop || document.body.scrollTop;

        //如果不考慮兼容IE8 可以使用pageXY 
        let left = event.clientX;
        let top = event.clientY;

        //設置box1偏移量
        box1.style.left = `${left}px`;
        box1.style.top = `${top+st}px`;
    }

}