let a =5;
let b = 7;
let temp ;
console.log(a,b);

temp=a;
a=b;
b=temp;

console.log(a,b);

let x = 10;
let y = 20;
console.log(x, y);

[x, y] =[y, x];
console.log(x, y);

for (var i = 0; i < 5; i++) {
    setTimeout(function () {
    console.log(i);
 }, 100);
}