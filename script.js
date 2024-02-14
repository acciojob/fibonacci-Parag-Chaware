function fibonacci(num) {
// your code here
	let firstNum = 0;
	let secondNum = 1;
	let thirdNum = num;
	for(i=1; i<=num; i++){
		thirdNum = firstNum + secondNum;
		firstNum = secondNum;
		secondNum = thirdNum;
	}
	return thirdNum;
}

module.exports = fibonacci;
