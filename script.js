function fibonacci(num) {
// your code here
	let firstNum = 0;
	let secondNum = 1;
	let thirdNum = num;
	if(num==1){
		return firstNum;
	}
	else if(num ==2){
		return secondNum;
	}
	else{
	for(i=1; i<=num-2; i++){
		thirdNum = firstNum + secondNum;
		firstNum = secondNum;
		secondNum = thirdNum;
	}
	return thirdNum;
	}
}

module.exports = fibonacci;
