function myFunction() {
    var x = parseInt(document.getElementById("mySelect").value,10);
    document.getElementById("demo").innerHTML = "You selected: " + x;
}

function myFunction1() {
    var y = parseInt(document.getElementById("mySelect1").value,10) 
    document.getElementById("demo1").innerHTML = "You selected: " + y;
}

function calculate(){
	var x = parseInt(document.getElementById("mySelect").value,10);
	var y = parseInt(document.getElementById("mySelect1").value,10);
var total = x + y;
	document.getElementById("total").innerHTML = total;

}