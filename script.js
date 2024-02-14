function fibonacci(num) {
// your code here
	let firstNum = 0;
	let secondNum = 1;
	for(i=1; i<=num; i++){
		num = firstNum + secondNum;
		firstNum = secondNum;
		secondNum = num;
	}
	return num;
}

module.exports = fibonacci;
