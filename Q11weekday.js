function dayOfWeek()
{

		var d=parseInt(document.getElementById("dayval").value);
		var m=parseInt(document.getElementById("monthval").value);
		var y=parseInt(document.getElementById("yearval").value);
	
		var y0 = y-(parseInt((14-m)/12));
		var x = y0 + ( parseInt(y0/4))-(parseInt(y0/100))+(parseInt(y0/400));
		var m0 = m+12*(parseInt((14-m)/12))-2;
		var d0 = (d+x+parseInt((31*m0)/ 12)) % 7;

		//console.log(d0);
		var weekday;

		switch(d0){
				case 0:
					weekday="Sunday";
					break;
					
				case 1:
					weekday="Monday";
					break;
					
				case 2:
					weekday="Tuesday";
					break;
					
				case 3:
					weekday="Wednesday";
					break;				

				case 4:
					weekday="Thursday";
					break;
				case 5:
					weekday="Friday";
					break;	
				case 6:
					weekday="Saturday";
					break;	
				default :
 
				document.getElementById("demo").innerHTML ="not correct input given";
			  }

		document.getElementById("weekdayval").innerHTML="WeekDay  :  "+weekday;

}
