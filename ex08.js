function myFunction( ) {
    // 값
    alert("I have an argument! " + arguments[0] );
        
    // 객체
    alert(arguments[1].bar);
        
    // 함수 
    arguments[2]();
  } 
  
  
  var b = { bar: "baz" };
  
  /*
  var f = function(){ 
      alert("Victory!");
  } 
  */
  
  /*
  myFunction( "foo", { bar: "baz"}, funtion(){ 
      alert("Victory");
  });
  */
  
  
  (function(){ 
      alert("Victory");
  })();
  
  console.log(f.another);
  f.another.info();
  
  console.log("==========기본타입은 확장X=========");
  i.another = {};
  console.log(i.another);
  