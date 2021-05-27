/* 先創建一個通用功能 並含有兩個形式參數
 *    1. idStr - 用來接收實參 按鈕btnX
 *    2. fun - 用來接收實參 功能
 *
 */
function myclick(idStr,fun){
    let btn = document.getElementById(idStr);
    btn.onclick = fun;
}



//  建造一個全域方法 讓JS優先加載完畢
window.onload = function(){

function createGzliAndGetCity(){
        // 創建廣州節點
        //  1. - 創建 li 元素節點
        let gzli = document.createElement("li");
        //  2. - 創建 廣州 文本節點
        let gzText = document.createTextNode("廣州")
        //  將上述兩個節點連結 EX - 向父節點添加一個子節點
        gzli.appendChild(gzText);

        //  獲取ul id="city" 
        // let city = document.getElementById("city");
        // 現在不必獲取靜態節點了(Html中內有的)
        
        return gzli;
}

    // (一） . 創建一個 廣州 節點，添加到#city下
    myclick("btn01",function(){

        let gzli = createGzliAndGetCity();
        //  將上述li加入city
        city.appendChild(gzli);
        
    });

    // (二) . 將 廣州 節點插入到#bj之前
    myclick("btn02",function(){
        // 創建廣州節點
        let gzli = createGzliAndGetCity();
        //let bjli = document.getElementById("bj") 靜態節點 不必獲取了
        city.insertBefore(gzli,bj);
    })

    // (三) . 將 廣州 節點替換成#bj節點
    myclick("btn03",function(){
        let gzli = createGzliAndGetCity();
        //let bjli = document.getElementById("bj") 靜態節點 不必獲取了
        city.replaceChild(gzli,bjli)
    })

    // (四) . 刪除 #bj 節點  
    myclick("btn04",function(){
        /*
        let city = document.getElementById("city");
        let bjli = document.getElementById("bj");
        city.removeChild(bj);
        */
        bj.parentNode.removeChild(bj) // 也可以這樣 直接透過bj子節點獲取到父節點 並刪除父節點中的指定子節點
    })

    // (五) . 讀取#city中的HTML代碼
    myclick("btn05",function(){
        //let city = document.getElementById("city");靜態節點 不必獲取了
        alert(city.innerHTML);
    })


    // (六) . 設置#bj內的HTML代碼
    myclick("btn06",function(){
        //let bjli = document.getElementById("bj");靜態節點 不必獲取了
        bj.innerHTML = "昌平";
    })

    // (七) . 直接透過HTML添加一個廣州節點
    myclick("btn07",function(){
        /*
        let city = document.getElementById("city");
        city.innerHTML += "<li>廣州</li>"
        * 但一般我們也不使用這種方式添加，因為他會更新整個ul表單
        * 可能導致已經綁定過事件的元素被重置
        * 亦或是效能消耗過大 
        * 所以一般使用（一）+（七）結合的方式創建新元素
        */
        //let city = document.getElementById("city");靜態節點 不必獲取了
        let gzli = document.createElement("li");
        gzli.innerHTML = "廣州" ; 
        city.appendChild(gzli);
    })

}

