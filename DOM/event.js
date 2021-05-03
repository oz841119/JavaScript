function showAlert(){
    alert("你看到我了");
}
function showAlert2(){
    alert("你又看到我了");
}
let btn = document.getElementById("myButton");
btn.addEventListener("click", showAlert)
btn.addEventListener("click", showAlert2)

