$('#button1').on('click', changeStr1);
var strings = ["https://www.", "http://www.", "https://", "http://", "www."];


function changeStr1() {
	
	var input1 = $('#input1').val();
	var counter =0;

	strings.forEach(function(e) {
		if ((input1.indexOf(e)==0) && (counter==0)){ input1 = input1.slice(e.length);;
		counter++;}
		alert(e + "             " +input1 + "    " + counter);
		 						});

	if (input1.indexOf(".")!=-1) {input1 = input1.slice(0, input1.indexOf("."));};
		
	input1 = input1.replace(/O|o/g,0);
	input1 = input1.replace(/l/g,1);
	input1 = input1.replace(/i/g,3);
	input1 = input1.replace(/s/g,5);
	var text ="";
	 	for (var i = 0; i <= 3; i++) {
			 		var possibleStr1 = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
			 		text = possibleStr1.charAt(Math.floor(Math.random() * possibleStr1.length));
					input1+= text;};
		
		$('#result1').text("Result: " + input1 + " ;");
		
	
};
