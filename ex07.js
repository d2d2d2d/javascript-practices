/* 
 생성자 함수로 다수의 객체 생성하기
*/

// 일반 함수(관례 소문자로 시작)
var myFunction = function(){
	console.log('일반 함수');
}

// 생성자 함수(관례 대문자로 시작)
var MyObject = function(name, age){
	this.name = name;
	this.age = age;
}