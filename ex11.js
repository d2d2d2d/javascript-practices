var s1 = "hello1";
//에러: not a function
//s1.myFunction();

String.pototype.myfunction = function() {
	console.log('mystring:' + this);
}

var s2 = "hello2";
s2.myFunction();