// const christmas = 1671904800;
const christmas = 1667755560;




setInterval(function (){
    const secondsSinceEpoch = Math.round(Date.now() / 1000);
    console.log(secondsSinceEpoch);
    var timeRemaining = christmas - secondsSinceEpoch;
    if(timeRemaining < 0){
        if(timeRemaining == -1){
            //Show fireworks, snow etc celebrations
        }
        document.getElementById("timer").style.display = "none";
        document.getElementById("qr-codes").style.display = "block";

    }
    var hours = Math.floor(timeRemaining/3600);
    var minutes = Math.floor((timeRemaining - 3600*hours)/60);
    document.getElementById("hours").innerText = hours.toString();
    document.getElementById("minutes").innerText = minutes.toString();
    document.getElementById("seconds").innerText = (timeRemaining - 3600*hours - 60*minutes).toString();
}, 1000);