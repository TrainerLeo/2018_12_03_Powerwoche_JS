


/* if-Abfragen */


var x = "a";
var y = 7;


var myInpField = document.getElementById('inp-age');
var sendButton = document.getElementById('btn-send');
var userInp;

/* myInpField.value */
/* document.getElementById('inp-age').value */

/* console.log(typeof myInpField); */

/* if (x === 5) {
    alert('x = 5');
}
else if(x > 5){
    alert('x > 5');
}
else if(x < 5){
    alert('x < 5');
}
else {
    alert('FEEEEEEEEHHHHHLEEEEEERRR!!!!');
} */

/* console.log(isNaN(y)); */


function checkInp(){
    userInp = myInpField.value;
    alert(userInp);

}