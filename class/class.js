window.onload = function(){
    
    let btn01 = document.getElementById("btn01")
    let box = document.getElementById("box");

    btn01.onclick = function(){
        
        /* 通過style的方式修改元素樣式
         * 每修改一次瀏覽器都要重新渲染一次畫面 性能會相當差
         * 且這樣要修改多個樣式時也極為不方便
            box.style.width = "200px"
            box.style.height = "200px"
            box.style.backgroundColor = "200px"
         *
         * 所以，希望一行代碼可以修改多的樣式可以透作操作css中的class選擇
         */

        // 修改box的class屬性為b2 並保留b1的height: 100px;樣式
        //box.className = "b1"+" b2"
        toggleClass(box , "b2")
    }

    //定義一個函數 用來向元素中添加指定的class屬性
    function addClass(obj , cn){
        if(!hasClass(obj , cn)){
            obj.className += ` ${cn}`
        }
    }

    //定義一個函數 用來判斷元素中是否含有某個class
    function hasClass(obj , cn){
        // let reg = /\bcn\b/  <--cn是一個變量 沒辦法用這種方式判斷
        let reg = new RegExp("\\b"+cn+"\\b")
        return reg.test(obj.className);
    }

    //定義一個函數 用來刪除元素中指定的class
    function removeClass(obj , cn){
        let reg = new RegExp("\\b"+cn+"\\b")
        
        //刪除class
        obj.className = obj.className.replace(reg , "")
    }

    /* 
     *  定義一個函數 用來切換類
     *  如果元素中具有該類 則刪除 反之則增加
     */
    
    function toggleClass(obj , cn){
        if(hasClass(obj , cn)){
            removeClass(obj , cn)
        }else{
            addClass(obj , cn)
        }
    }

    // 上述建造的函數其實都已是jQuery的內容
    // 主要複習正則表達式和基礎理解jQuery的邏輯
}