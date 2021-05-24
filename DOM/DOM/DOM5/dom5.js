window.onload = function(){

    let btn01 = document.getElementById("btn01");
    let btn02 = document.getElementById("btn02");
    let btn03 = document.getElementById("btn03");
    let btn04 = document.getElementById("btn04");
    let box01 = document.getElementById("box01");
    let box01_1 = document.getElementById("box01_1");
    let box02 = document.getElementById("box02");
    let box02_1 = document.getElementById("box02_1");


    
    btn01.onclick = function(){
        alert(`原始值 : ${box01.clientWidth}`); // 返回的是「可見值」 包括內容區和內間距
        box01.style.padding = "10px"; // 所以增加內間距後 返回值也會變動
        alert(`加10px的內間距 值 : ${box01.clientWidth}`);
        box01.style.border = "10px solid yellow";
        alert(`加上10px邊框 值 : ${box01.clientWidth} 仍然不變`)
    }

    btn02.onclick = function(){
        alert(`獲取整個值，包括外框/內間距等：${box01.offsetWidth}`);
    }

    btn03.onclick = function(){
        alert(box01_1.offsetParent.id); //可以找到離最近開啟定位的祖先元素
                                           // 若都沒有開啟則返回body
        alert(box01_1.offsetTop); //返回最近開啟定位祖先元素的垂直偏移量
    }


    btn04.onclick = function(){
        alert(`包括整個滾動條的高度值：${box02.scrollHeight}`);
        alert(`滾動調移動的距離：${box02.scrollTop}`); // 可以返回包含滾動條的高度 MAC滾動條未使用為不可見
        alert(box02.clientHeight);
        alert(box02.scrollHeight - box02.scrollTop);
    }

}

