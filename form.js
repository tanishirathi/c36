class Form {
constructor(){}

display(){

var title = createElement("h2");
title.html("WELCOME TO THE CAR RACING GAME")
title.position(30,10)

var input=createInput("name");
input.position (120,100)

var button = createButton("JOIN");
button.position (150,150)

var greeting = createElement("h3");


button.mousePressed(function(){
input.hide();
button.hide();

var name = input.value ();
playerCount = playerCount+1;

player.update(name)
player.updateCount(playerCount)
greeting.html("hello,welcome to the game"+name+" waiting for others to join")
greeting.position (20,150);
})
}



}