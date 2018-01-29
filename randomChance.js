function randomChance(quarters){
    var coinsWinning = 0;
    var play= Math.floor(Math.random()*100);  
    var won= Math.floor((Math.random()* 50)+49);

    for(var i= 0; i< quarters; i++){
    if(play === 1){
         coinsWinning += won;
    }
    }return coinsWinning;
}
randomChance(55);