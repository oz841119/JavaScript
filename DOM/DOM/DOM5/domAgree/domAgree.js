window.onload = function(){

    let singUp = document.getElementById("singUp");
    let arrgeDiv = document.getElementById("arrgeDiv");

    let inputs = document.getElementsByTagName("input");
    //這時獲得一個數組 inputs[0,1] 分別對應check and submit

    singUp.onclick = function(){
        alert("")
    }
    arrgeDiv.onscroll = function(){
        if(this.scrollHeight - this.scrollTop == this.clientHeight){
            inputs[0].disabled = false; // 設為不禁用
            inputs[1].disabled = false;
        }
    }
    

}