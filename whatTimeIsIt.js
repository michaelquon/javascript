var hour = 8;
var minute = 50;
var period = "AM"
if(hour >= 8 && minute >= 50 && period ==="AM"){
        console.log("It's almost 9 in the morning");
}
if(hour >= 7 && minute<=30 && period ==="PM"){
        console.log("It's just after 7 in the evening");
}
if(minute <= 30){
        console.log("just after");
}
if(minute>= 30){
        console.log("almost");
}
if(period === "AM"){
    console.log("in the morning");
}
if(period === "PM"){
    console.log("in the evening");
}

