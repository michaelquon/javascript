
    var num = 53;
    if(birthDay >= 61){
        console.log("Don't bother counting down it's within 60 days")
    }      
for(var birthDay = num ; num >= 0; num --){
        birthDay = num;
if(birthDay >= 30){
    console.log(birthDay, "days until my birthday. Such a long time...:(")
    console.log("You are still a ways out before the big celebration!");
}
if(birthDay < 30){
    console.log(birthDay, "days, OMG it is almost time for the big day!!");
}
if(birthDay < 6){
    console.log(birthDay, "DAYS, YOUR BIRTHDAY IS GETTING CLOSER!")
}
if(birthDay <= 0){
    console.log("DAY!!YAY!!! IT IS YOUR BIRTHDAY, YAY!!!")
}
}