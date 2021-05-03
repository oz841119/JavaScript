/*
break用於退出switch或整個loop語句
continue則是可以退出當次循環
*/

for(i=1 ; i<10 ; i++){
    console.log(i);
    break;  //已退出循環
}

// *break關鍵字會立即終止離他最近的循環語句* //
for(j=1 ; j<10 ; j++){
    console.log(j);
    if(j==5){
        break;
    }
}
console.log(j);

for(a=1 ; a<10 ; a++){
    console.log(a);
    for(b=1 ; b<10 ; b++){
        console.log(b);
        break; //只會終止for(b...)循環
    }
}

/*
label:循環語句 （用於為loop取名添加標籤)
使用break關鍵字時 可以用break label退出指定loop 而非最近loop
*/

iAmLoopA:
for(c=1 ; c<10 ; c++){
    console.log(c);
    for(d=1 ; d<10 ; d++){
        console.log(d);
        break iAmLoopA;
    }
}

iAmLoopB:
for(e=2 ; e<10 ; e++){
    console.log(e);
    for(f=3 ; f<10 ; f++){
        if(f>7){
            console.log(f);
            break iAmLoopB  //不指定標籤 單純使用break結束 那麼for(e...)依然會輸出2-9
        }
    }
}

//continue用於退出當次循環 默認跳出離他最近的循環
iAmLoopC:
for(g=1 ; g<10 ; g++){
    if(g==5){
        console.log(g);
        continue;
    }
    console.log(g); //for(g=5)不會被執行
}

//一樣可使用label指定跳出循環
iAmLoopD:
for(h=1 ; h<8 ; h++){
    console.log(h);
    for(hh=1 ; hh<8 ; hh++){
        if(hh==3){
        continue iAmLoopD;
        }
        console.log(hh);
    }
    console.log(h); //沒值可以輸出 因為全都斷在continue了
}



//

