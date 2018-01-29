function rangePrint(begin,end,skip){   

    total = []; 
    for(var i = begin; i < end; i+= skip){
      total.push(i);
      }
       return total;
    }
    rangePrint(2,10,2);