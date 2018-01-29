
var payment = 0.01;
var sum = 0;
var dollar = 0;
for(var i=1;i<=38;i++){
    if(i===1){
      sum += payment;
      console.log(sum, "dollars", i, "days")
}
if(i!=1){
   sum = payment+=payment;  
        console.log(sum, "dollars", i, "days");
    }
    if(sum >= 10000){
        console.log("I'm a rich man...$10,000", i, "days")
    }
    if(sum >= 1000000000){
        console.log("I'm a rich man...$1,000,000,000", i, "days")
}   
}
