function fun(){
    alert("函數要執行了");
    for(i=0 ; i<=5 ; i++){
        console.log(i);

        if(i==2){
            break;
        }
    }
    alert("函數執行完了");
}

fun()