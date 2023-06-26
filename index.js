var randomnumber1 = Math.floor(Math.random() * 6) + 1; //1-6 random num

var randomdiceimage = "dice" + randomnumber1 + ".png"; // random dice img 1png-6png

var randomimagesource = "images/" + randomdiceimage; //images/dice1.png-6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimagesource);



var randomnumber2 = Math.floor(Math.random()*6)+1;

var randomdiceimage2 = "dice"+randomnumber2+".png";

var randomimagesource2 = "images/"+randomdiceimage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src",randomimagesource2);





if (randomnumber1 > randomnumber2) {

	document.querySelector("h1").innerHTML="Player 1 wins";
}

else if (randomnumber1 === randomnumber2) {
	document.querySelector("h1").innerHTML="Try Again";
}
else
{
	document.querySelector("h1").innerHTML="Player 2 wins";
}