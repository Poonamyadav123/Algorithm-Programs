
function main()
{ 

var no1=document.getElementById("inputvalue1").value.split(" ");

var ary =[];

for(a=0;a<no1.length;a++)
{
	 ary[a]=no1[a];

}

	document.getElementById('sort1').innerHTML="Before Sort string : <br>"+ary;
	sort(ary);

	
	
}


  function sort(array) {

    var length = array.length,
        mid    = parseInt(length/2);
		
		var left=[];
		var right=[];

		for(var i=0;i<mid;i++)
			{

				left[i]=array[i];

			}
		
		 var k=0;
		for(var j=mid;j<length;j++)

			{
				right[k]=array[j];
				k++;

			}
			
      

    if(length === 1) {
      return array;
    }

    return merge(sort(left), sort(right));

  }

  
  function merge(left, right) {

    var result = [];

    while(left.length || right.length) {

      if(left.length && right.length) {

        if(left[0] < right[0]) {
          result.push(left.shift());
        } else {
          result.push(right.shift());
        }

      } else if (left.length) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }

    }
   

	var sho=[];
	for(var i=0;i<result.length;i++)
	{
	sho.push(result[i]);
	}
	document.getElementById('sort').innerHTML="After Sort string : <br> "+sho;
	return result;
	
  }


