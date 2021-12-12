function sum(a){
 return function(b){
     return function(c){
       console.log(a*b*c);
      }

    }  

}
sum(5)(10)(7)(3);