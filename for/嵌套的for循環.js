/*
在網頁輸出
**********
**********
**********
**********
**********
**********

*
**
***
****
*****
******
*******
及倒三角
*/


// (1)
document.write("(1)<br/>");
for(i=0 ; i<6 ; i++){
    document.write("*****<br/>"); //<br/>為html換行
}
document.write("<br/>");

// (2)
document.write("(2)<br/>");
for(j=0 ; j<7 ; j++){
    for(k=0 ; k<j+1 ; k++){   //倒三角則為 高-j
        document.write("*");
    }
    document.write("<br/>");
}

document.write("<br/>");
//(3)
document.write("(3)<br/>");
for(l=0 ; l<7 ; l++){
    for(m=0 ; m<7-l ; m++){
        document.write("*");
    }
    document.write("<br/>");
}
document.write(`<br/>`)
//99乘法表
document.write(`(九九乘法表)<br/>`)
for(a=1 ; a<=9 ; a++){
    for(b=1 ; b<=9 ; b++){
    document.write(`${a}*${b}=${a*b}&nbsp&nbsp`);
    }
    document.write("<br/>")
}
document.write(`<br/>`)
//99乘法表優化
document.write(`(99乘法表優化)<br/>`)
document.write(`<table width='900' border=0'>`);
for(c=1 ; c<=9 ; c++){
    document.write(`<tr>`);
    for(d=1 ; d<=c ; d++){
        document.write(`<td/>${c}*${d}=${c*(d)}<td/>`);
    }
    document.write("</tr>");
}
document.write(`</table>`)