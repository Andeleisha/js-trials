// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map([
	['home', '510-867-5309'],
	['mobile', '415-555-1212'],
	['business', '415-523-4567']
	]);

function accountInfo(name, number, bName) {
	console.log(`Account Holder Name: ${name}`);
	console.log(`Account Holder Number ${number}`);
	console.log(`Business Name: ${bName}`);
}

accountInfo(accountHolder, accountNumber, businessName)

// console.log(phoneNumbers)

// Add some phone numbers to our map



// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 
function showAddresses(arrayAddresses) {
	console.log(`Addresses: `);
	for(let address of arrayAddresses) {
		console.log(address);
	}
}

showAddresses(addresses)

function showPhoneNums(mapPhone){
	console.log(`Phone Numbers:`);
	for(let phone of mapPhone){
		console.log(`${phone[0]} : ${phone[1]}`);
	}
}

showPhoneNums(phoneNumbers);


// const transaction = new Map([
// 	['May-2', -500],
// 	['May-13', +1200],
// 	['May-15', -100],
// 	['May-21', -359],
// 	['May-29', 2200]
// 	]);
const transactions = new Map([
	]);

function addTransaction(date, amount){
	transactions.set(date,amount);
}

addTransaction('May-2', -500)

addTransaction('May-13', +1200)

addTransaction('May-15', -100)

addTransaction('May-21', -359)

addTransaction('May-29', 2200)

function showBalanceStatus(amount) {
	console.log(`Balance: ${amount}`);
	if (amount < 0) {
		console.log('YOU ARE OVERDRAWN');
	} else if (amount < 20) {
		console.log(`Warning: You are close to zero balance`);
	} else {
		console.log(`Thank you for your business.`)
	}
}

function showTransactions(mapTransactions, balance){
	console.log(`Your starting balance is: ${balance}`);
	for(let transaction of mapTransactions){
		let transactionType;
		if (transaction[1] > 0){
			transactionType = 'deposit';
		} else {
			transactionType = 'withdrawal';
		}
		balance = balance + transaction[1]
		console.log(`Transaction date: ${transaction[0]}`,
			`Transaction type: ${transactionType}`,
			`Amount changed: ${transaction[1]}`,
			`New Balance: ${balance}`);
	}
}

showTransactions(transactions, 2000)



// Add function to print all addresses, including a header


// Add function to print phone types and numbers


// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions


// Add function to add transactions


// Use the function to add transactions


// Add function to show balance status


// Add function to show transactions


// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




