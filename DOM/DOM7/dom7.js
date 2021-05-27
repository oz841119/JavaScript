window.onload = function(){


    let allA = document.getElementsByTagName("a");
    let ul = document.getElementById("ul");
    let btn = document.getElementById("btn");

    btn.onclick = function(){
        let li = document.createElement("li");
        li.innerHTML = `<a href='javascript:;' class="link">超連結 New</a>`
        ul.appendChild(li);

    }
    
    // 這裡透過遍歷綁定的舊有li正常使用 但新加入的將無法綁定 因為在瀏覽器加載完成之前就已經執行完了
    /* 所以可以透過 事件委派 綁定祖先元素來完成新加入也綁定的需求
     *  for(i=0 ; i<allA.length ; i++){
     *      allA[i].onclick = function(){
     *           alert(`我是allA`)
     *     }
     *  }
     */
    
    /* 事件委派
     *   - 將事件統一綁定給元素的共同祖先元素，這樣後代觸發時，會冒泡到祖先元素，從而由祖先元素的響應函數處理事件
     *   - 利用冒泡 通過委派可以減少事件綁定的次數
     *
     * 
     */
    ul.onclick = function(event){
        if(event.target.className == 'link'){
            alert();
        }
    }
};