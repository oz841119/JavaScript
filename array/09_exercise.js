// 去除重複的數字(只留12345)
let arr = [1,2,3,2,1,3,4,2,5]

console.log(arr.length);
for(i=0 ; i<arr.length ; i++){
    for(j=i+1 ; j<arr.length ; j++){
        if(arr[i] == arr[j]){
            arr.splice(i,1,0);
        }
    }
}
for(k=0 ; k<arr.length ; k++){
    if(arr[k]==0){
        arr.splice(k,1)
        k--
    }
}
console.log(arr);

//待優化