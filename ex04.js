// 변수의 범위
// 1. 자바스크립트는 자바와 같은 block scope는 없다.
// 2. function의 {} 안에서 변수에 var를 사용하게 되면 function scope가 된다. 
// 3. let(es6), const(es6)는 Block Scope를 만든다.
var i = 10;
var f = function() {
	var i = 20;
	console.log(i);
	i = i - 1;
}

f();
console.log(i);
