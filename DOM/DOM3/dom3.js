// 創建一個公共函數為點擊連結後刪除

function delA(){

    // 點擊超連接後需要刪除所在行
    //  - 使用this表示誰使用函數 並獲取父節點的父節點不能使用allA[i] 原因待釐清
    //  - 獲取員工名Name (獲取函數獲取過的tr中標籤第0組td的名字)
    //  - 彈出提示框 詢問是否確定刪除員工名Name
    let tr = this.parentNode.parentNode;
    let name = tr.getElementsByTagName("td")[0].innerHTML;
    if(confirm(`確認刪除${name}嗎？`)){
        tr.parentNode.removeChild(tr)
    }



    // 此時超連接仍會跳轉頁面，所以需要通過響應函數最後return false來取消默認
    return false;
};


window.onload = function(){

    /*
     *  點擊超連接後，刪除一個員工訊息
     */
    
    // 獲取超連接
    let allA = document.getElementsByTagName("a")

    // 為超連接綁定單擊響應函數
    for(i=0 ; i<allA.length ; i++){
        allA[i].onclick = delA;
    }

    /*
     *  添加員工的功能
     *    - 點擊按鈕後將員工的訊息添加到表格中
     */


    let addEmpButton = document.getElementById("addEmpButton")
    addEmpButton.onclick = function(){

        let name = document.getElementById("empName").value;
        let email = document.getElementById("email").value;
        let salary = document.getElementById("salary").value;
        
        let tr = document.createElement("tr");

        /*
        let tdName = document.createElement("td");
        let tdEmail = document.createElement("td");
        let tdSalary = document.createElement("td");
        let tdDelete = document.createElement("td");

        let aDelete = document.createElement("a");

        let textName = document.createTextNode(name);
        let textEmail = document.createTextNode(email);
        let textSalary = document.createTextNode(salary);
        let textDelete = document.createTextNode("Delete");

        tdName.appendChild(textName);
        tdEmail.appendChild(textEmail);
        tdSalary.appendChild(textSalary);
        tdDelete.appendChild(aDelete);

        aDelete.appendChild(textDelete);


        tr.appendChild(tdName);
        tr.appendChild(tdEmail);
        tr.appendChild(tdSalary);
        tr.appendChild(tdDelete);

        aDelete.href = "javascript:;";
        aDelete.onclick = delA;

        *   ****** 但事實上不需要那麼麻煩 *******
        */
        
        // --- v 透過innerHTML改寫 ---

        tr.innerHTML = `<td>${name}</td>
                        <td>${email}</td> 
                        <td>${salary}</td>
                        <td><a href="javascript:;">Delete</a></td>`;
        let a = tr.getElementsByTagName("a")[0];
        a.onclick = delA;

        // --- ^ 透過innerHTML改寫 ---     

        let employeeTable = document.getElementById("employeeTable");
        /*
         *  注意事項：
         *     - 瀏覽器會為HTML的table和tr之間添加一個tbody標籤
         *     - 而我們將tr子節點新增至table中的話
         *       是直接在table內新增 不會在table/tbody中新增
         *     - 所以建議在將新增的tr加入到tbody當中
         *       方便統一樣式
         */
        let tbody = employeeTable.getElementsByTagName("tbody")[0];
        tbody.appendChild(tr);


        

    };


};