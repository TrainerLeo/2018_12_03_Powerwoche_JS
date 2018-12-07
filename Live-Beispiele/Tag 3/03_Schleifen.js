

/* 
var x = 5;
var firstName = 'Leonard'; 
*/

var text = 'Hallo ihr da!';

var demoDiv = document.getElementById('demo01');




function makeBlue(){
    demoDiv.style.backgroundColor = "blue";
}

function fillInText(){
    /* demoDiv.innerHTML = "Testtext"; */

    demoDiv.innerHTML += text;

}

function addParagraph(){
    /* demoDiv.innerHTML += "<p>Hallo</p>"; */

    demoDiv.innerHTML = "<p>" + text + "</p>";

}

function readText(){
    alert(document.getElementById('demo02').innerHTML);
}

var textOutput = ""; //Leerstring

function outputWhile(){

    var i = 0; // iterator

    while(i  < 10){
        textOutput += 'Wert ist: ' + i + '<br>';
        i++;
    }

demoDiv.innerHTML = textOutput;
}

function outputFor(){

    for(var i = 10; i > 0; i--){
        textOutput += 'Wert ist: ' + i + '<br>';
    }

    demoDiv.innerHTML = textOutput;
}

