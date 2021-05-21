
// 首要工作 為了讓Name:item 可以讓局部函數重複獲取 需設置在全局作用域
let items = document.getElementsByName("items");
// 獲取全選/全不選
let checkedAllBox = document.getElementById("checkedAllBox");

// 1. #checkedAllBtn (全選)
//    為ID為checkedAllBtn的按鈕綁定單擊響應函數
let checkedAllBtn = document.getElementById("checkedAllBtn");
checkedAllBtn.onclick = function(){
    for(i=0 ; i<items.length ; i++){
        items[i].checked = true; 
    }
    checkedAllBox.checked = true;
}

// 2. 全不選
let checkedNoBtn = document.getElementById("checkedNoBtn")
checkedNoBtn.onclick = function(){
    for(i=0 ; i<items.length ; i++){
        items[i].checked = false;
    }
    checkedAllBox.checked = false;
}

// 3. 反選
let checkedRevBtn = document.getElementById("checkedRevBtn");
checkedRevBtn.onclick = function(){

    for(i=0 ; i<items.length ; i++){
    items[i].checked = !items[i].checked
    }

        checkedAllBox.checked = true;    
            for(j=0 ; j<items.length ; j++){
                if(!items[j].checked){
                    checkedAllBox.checked = false;
                }
            }
}

// 4. 提交
let sendBtn = document.getElementById("sendBtn");
sendBtn.onclick = function(){
    for(i=0 ; i<items.length ; i++){
        if(items[i].checked){
            alert(items[i].value);
        }
    }
}

// 5. 全選/全不選
checkedAllBox.onclick = function(){
        for(i=0 ; i<items.length ; i++){
            items[i].checked = checkedAllBox.checked;
        }
}


/* 6. 延伸上方Bug問題 
 *    - 如果4個選項都選中 則AllBox也應該要被選中
 *    - 如果有其中一個沒被選項 那麼AllBox也不應該被選中
 */
for(i=0 ; i<items.length ; i++){
    items[i].onclick = function(){
    checkedAllBox.checked = true;    
        for(j=0 ; j<items.length ; j++){
            if(!items[j].checked){
                checkedAllBox.checked = false;
                break;
            }
        }
    }
}
