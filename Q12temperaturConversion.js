function temperaturConversion(){
var ch=document.getElementById("choice1").value;
switch(ch)
{
case "1" :
fahrenheitToCelsius();
break;
case "2" :
celsiusToFahrenheit();
break;
default:
document.getElementById("demo1").innerHTML = "Select correct option";

}



}


function fahrenheitToCelsius()
{
 var temperatue=document.getElementById("inputvalue1").value;
 
 temperatue=((temperatue-32)*5)/9;
 
 document.getElementById("demo").innerHTML="Temperatue in Celsius ="+temperatue+"°C"; 



}

function celsiusToFahrenheit()
{
 var temperatue=document.getElementById("inputvalue1").value;
 
 temperatue=((temperatue*9)/5)+32;
 
 document.getElementById("demo").innerHTML="Temperatue in Fahrenheit ="+temperatue+"°F"; 



}