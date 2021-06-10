var name22 = prompt("plz enter your name ");
var age = prompt("plz enter your  age ");


if (age >= 18 && age <= 40) {
    alert("your name is " + name22 + "you are allowed to enter the site");
}
else if (age > 40 && age <= 80) {
    alert("your name is " + name22 + "you are too old");
}
else if (age > 80) {
    alert("your name is " + name22 + "how are you even still alived?");
}
else {
    alert("your name is " + name22 + " you are not allowed")
}