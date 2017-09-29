function repay(years, annualInterestRate, amountBorrowed) {
	ratePerPeriod = (annualInterestRate * 0.01) / 12
	var periods = years * 12
	var payment = (ratePerPeriod * amountBorrowed)/(1 - Math.pow((1 + ratePerPeriod), periods * -1))
	return payment.toFixed(2) 
}

var borrowed = prompt("Amount borrowed ($):")
var years = prompt("Years of the loan:")
var interestRate = prompt("Annual interest rate:")

alert("Your payment is: $" + repay(years, interestRate, borrowed))