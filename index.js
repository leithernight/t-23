//1
let t1 = document.querySelector('.i1');
let b1 = document.querySelector('.b1');

b1.onclick = () => {
    alert(+t1.value * +t1.value);
}

//2
let t2_1 = document.querySelector('.i2_1');
let t2_2 = document.querySelector('.i2_2');
let b2 = document.querySelector('.b2');

b2.onclick = () => {
    alert((+t2_1.value + +t2_2.value) / 2);
}

//3
let t3 = document.querySelector('.i3');
let b3 = document.querySelector('.b3');

b3.onclick = () => {
    alert('S:' + ' ' + (+t3.value * +t3.value));
}

//4
let c4 = 0.621371;
let t4 = document.querySelector('.i4');
let b4 = document.querySelector('.b4');

b4.onclick = () => {
    alert('miles:' + ' ' + (+t4.value * +c4));
}

//6
let t6_1 = document.querySelector('.i6_1');
let t6_2 = document.querySelector('.i6_2');
let b6 = document.querySelector('.b6');

b6.onclick = () => {
    alert(0 - +t6_2.value / +t6_1.value);
}

//7
let t7_1 = document.querySelector('.i7_1');
let t7_2 = document.querySelector('.i7_2');
let b7 = document.querySelector('.b7');

b7.onclick = () => {
    alert((23 - +t7_1.value) + ':' + (60 - +t7_2.value));
}

//10
let c10 = 250;
let t10 = document.querySelector('.i10');
let b10 = document.querySelector('.b10');

b10.onclick = () => {
    alert('salary:' + ' ' + ((+t10.value / 10) + +c10));
}