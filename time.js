// const christmas = 1671897600;
const christmas = 1671875175;


document.getElementById("android-qr").addEventListener("click", function (){
    window.location.href = "https://play.google.com/store/apps/details?id=com.hermannkabi.jouluapp";
}); 

document.getElementById("ios-qr").addEventListener("click", function (){
    window.location.href = "https://apps.apple.com/app/joulumang/id6444681711";
}); 


setInterval(function (){
    const secondsSinceEpoch = Math.round(Date.now() / 1000);
    console.log(secondsSinceEpoch);
    var timeRemaining = christmas - secondsSinceEpoch;
    if(timeRemaining < 0){
        if(timeRemaining == -1){
            //Show fireworks, snow etc celebrations
            
            Array.from(document.getElementsByClassName("snowflake")).forEach(function (el){
                el.style.display = "block";
            });
            var audio = new Audio('sleighbells.mp3');
            audio.play();
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