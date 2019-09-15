/**
|--------------------------------------------------
| always be sure to set up parameters FIRST
|--------------------------------------------------
*/

const answer = question([ 2, 6, 3, 4, 5 ], 2); 

function question (tickets, p) {

	// let totalTime = 0;
	// let currentArr = tickets;
	// if (p > tickets.length){
	// 	return null;
	// }
	// while (currentArr[p] !== 0) {
	// 	for (let i = 0; i < currentArr.length; i++){
	// 		if(currentArr[i] !== 0){
	// 			currentArr[i] = currentArr[i] - 1
	// 			totalTime++;
	// 		}
	// 		if(currentArr[p] === 0){
	// 			break;
	// 		}
	// 	}
	// 	console.log(currentArr)
	// }

	let totalTime = 0;
	for (let i = 0; i < tickets.length; i++){
		if (i === p){
			totalTime += tickets[p]
			console.log(totalTime)
		}
		if (tickets[i] <= tickets[p] && i < p){
			totalTime += tickets[i];
			console.log(totalTime)
		}
		if (tickets[i] > tickets[p] && i < p){
			totalTime += tickets[p];
			console.log(totalTime)
		}
		if (tickets[i] < tickets[p] && i > p){
			totalTime += tickets[i];
			console.log(totalTime)
		}
		if (tickets[i] >= tickets[p] && i > p){
			totalTime += tickets[p] - 1;
			console.log(totalTime)
		}
	}

	

	return totalTime

}

console.log('**********************')
console.log(answer)
console.log('**********************')


/* QUESTION
There are n people standing in line to buy show tickets.Due to high demand, the venue sells tickets according to the following rules:

The person at the head of the line can buy exactly one ticket and must then exit the line.
if a person needs to purchase additional tickets,they must re-enter the end of the line and wait to be sold their next ticket(assume exit and re-entry takes zero seconds).
Each ticket sale takes exactly one second.
We express initial line of n people as an array, tickets = [tickets0, tickets1 ... ticketsN-1], where ticketsi denotes the number of tickets person i wishes to buy. If Jesse is standing at a position p in this line, find out how much time it would take for him to buy all tickets. Complete the waiting time function in the editor below. It has two parameters:

An array, tickets, of n positive integers describing initial sequence of people standing in line. Each ticketsi describes number of tickets that a person waiting at initial place.
An integer p, denoting Jesse's position in tickets.

Sample Input 5 2 6 3 4 5 2 Sample Output 12 Sample Input 4 5 5 2 3 3 Sample Output 11

*/