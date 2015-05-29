exports.largestPrimeFactor = function(n){

   var primeNumber = 0;
   var start = 2;
   var highestFactor = 0;



	while(n != 1){

	if(n % start === 0){
	highestFactor = start;
	n = n / start;
	
	}else{
		start++;
	}






}
	return highestFactor;

};