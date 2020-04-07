var o = {
    name: '마이콜',
    age: 20,
    hasProperty: function(property){
        return property in this;
    }
}

console.log("name" in o);
console.log("age" in o);
console.log("email" in o);

console.log("=============hasOwnProperty=================");

console.log(o.hasOwnProperty("name"));
console.log(o.hasOwnProperty("age"));
console.log(o.hasOwnProperty("email"));

console.log("===============with()===============");
with(o) {
console.log(name + ":" + age);
}

console.log("===========for ~ in=============");
var data = "";
for(var property in o){
if(typeof(o[property]) != 'function'){
    data += ( o[property] + ":");
}
console.log(property)
}