var eventType = prompt("Event Type");
var tempFahr = prompt("Enter Temperature");
if(eventType === "casual"){
    var event = "something comfy";
}
if(eventType === "semiformal"){
    var event = "a polo";
}
if(eventType === "formal"){
    var event= "a suit";
}
if(tempFahr <= 54){
    var degrees = "a coat";
}
if(tempFahr > 54 && tempFahr < 70){
    var degrees = "a jacket";
}
if(tempFahr >= 70){
    var degrees = "no jacket";
}
alert(`Since it is ${tempFahr} degrees and you are going to a ${eventType} event, you should wear ${event} and ${degrees}.`);