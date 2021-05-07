// 去除重複的數字(只留12345)
let arr = [1,2,3,2,1,1,1,2,2,2,3,4,2,5]

console.log(arr.length);
for(i=0 ; i<arr.length ; i++){
    for(j=i+1 ; j<arr.length ; j++){
        if(arr[i] == arr[j]){
            arr.splice(j,1);
            j--;
        }
    }
}

console.log(arr);

// 自己寫完的^^!