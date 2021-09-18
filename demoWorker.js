
var counter = 10;
var myFunction = function(){
    clearInterval(interval);
    var date = new Date().toLocaleString(undefined, {
        timeZone: 'Asia/Calcutta'
      }).split(",")[1].trimLeft();
    var hour = date.split(" ")[0].split(":")[0];
    var minute = date.split(" ")[0].split(":")[1];
    // console.log(hour+" "+minute);
    var timeOfDay = date.split(" ")[1];
    if(hour === "2" /* && timeOfDay === "pm" */) {
        counter = 86400000;
        postMessage("COUNTER RESTARTED");
    }    
    interval = setInterval(myFunction, counter);
}
var interval = setInterval(myFunction, counter);