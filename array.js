/*
*배열 (array)
*/

// 1. 생성자 함수
var a1 = new Array();
console.log(typeof(a1));

var a2 = new Array(10); // 배열의 크기
console.log(a2.length);

// 배열을 정의할 떄 크기 지정은 별 의미가 없다.
// 동적으로 배열은 늘어 난다.
a2[0] = 0;
a2[10] = 10;
a2[11] = 11;
a2[12] = 12;

console.log(a2[1], a2[2]);
console.log(a2.length);

// Array VS Object
console.log("==============================");
a = [];
a[0] = 0;
a["1"] = 1;
a["name"] = '머지?';

console.log(a["0"], a[0], a['name'], a.length);
for( property in a) {
    console.log("prop:" + property + ":" + typeof(property));
}

console.log("===============================");

o = {};
o["0"] = 0;
o["1"] = 1;
o["name"] = '머지?';

console.log(o["0"], o[0], o['name'], o.length);


// 2. 리터럴
var a2 = [];
console.log(typeof(a2));

var a3 = [
    function(){
        console.log("hello");
    },
20,
"javascript",
true, {
    email: 'kickscar@naver.com',
    name: '안대혁'
}];
console.log(a3.length);
for(var i = 0; i < a3.length; i++){
    console.log(a3[i]);
}