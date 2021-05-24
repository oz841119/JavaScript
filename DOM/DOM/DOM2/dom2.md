我要如何在dom2.js中
將創建 廣州/獲取city 做成一個函數
並且重複在單擊響應中可以重複被調用
這樣我就不用寫這麼多行代碼了


我已經嘗試過在全域中設置一個

function createGzli(){
        let gzli = document.createElement("li");
        let gzText = document.createTextNode("廣州");
        gzli.appendChild(gzText);
        let city = document.getElementById("city");
};

並在myclick的function參數中加入createGzli();
但他並不執行。