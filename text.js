function add(c , d){
  return c + d;
}

let ts = {a:1 , b:2}
console.log(add(2,3,5));
console.log(add.apply(ts , [3,5]));