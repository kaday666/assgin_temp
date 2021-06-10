var na = prompt("plz enter you name");
var tips = prompt("hello " + na + "welcome to the page " + "plz enter the weather conditon and we will give you a tips");



switch (tips) {
    case "sunny": alert("dont forget to put on sunscreen");
        break;
    case "cloudy": alert("dont forget to bring the umbrella");
        break;
    case "windy": alert("wear a sunglass to prevent sand from entering yor eyes");
        break;
    default: alert("sry we cant find your weather conditon have a nice day");
}