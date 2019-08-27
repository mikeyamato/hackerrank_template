/**
|--------------------------------------------------
| always be sure to set up parameters FIRST
|--------------------------------------------------
*/

const answer = question(5,00); 

function question (h,m) {
	const strNum = m.toString()
	const findHour = hourNumber();
	if (strNum === '0'){
		return (`${findHour} o' clock`);
	}
	else if (m===15){
		return (`quarter past ${findHour}`);
	} else if (m===30){
		return (`half past ${findHour}`);
	} else if (m===45){
		h += 1;
		const findHourAlt = hourNumber(h);
		return (`quarter to ${findHourAlt}`);
	} else {
		const findMinutes = minuteNumber(m);
		if(m === 1){
			return (`${findMinutes} minute past ${findHour}`)
		}
		else if(m > 1 && m < 30){
			return (`${findMinutes} minutes past ${findHour}`)
		}
		else if(m === 59){
			h += 1;
			const findHourAlt = hourNumber(h);
			return (`${findMinutes} minute to ${findHourAlt}`)
		} else {
			h += 1;
			const findHourAlt = hourNumber(h);
			return (`${findMinutes} minutes to ${findHourAlt}`)
		}
	}

	function hourNumber ()  {
		switch (h) {
			case 1: 
				return 'one';
			case 2: 
				return 'two';
			case 3: 
				return 'three';
			case 4: 
				return 'four';
			case 5: 
				return 'five';
			case 6: 
				return 'six';
			case 7: 
				return 'seven';
			case 8: 
				return 'eight';
			case 9: 
				return 'nine';
			case 10: 
				return 'ten';
			case 11: 
				return 'eleven';
			case 12: 
				return 'twelve';
		}
	}

	function minuteNumber ()  {
		switch (m) {
			case 1: 
				return 'one';
			case 2: 
				return 'two';
			case 3: 
				return 'three';
			case 4: 
				return 'four';
			case 5: 
				return 'five';
			case 6: 
				return 'six';
			case 7: 
				return 'seven';
			case 8: 
				return 'eight';
			case 9: 
				return 'nine';
			case 10: 
				return 'ten';
			case 11: 
				return 'eleven';
			case 12: 
				return 'twelve';
			case 13: 
				return 'thirteen';
			case 14: 
				return 'fourteen';
			case 16: 
				return 'sixteen';
			case 17: 
				return 'seventeen';
			case 18: 
				return 'eighteen';
			case 19: 
				return 'nineteen';
			case 20: 
				return 'twenty';
			case 21: 
				return 'twenty one';
			case 22: 
				return 'twenty two';
			case 23: 
				return 'twenty three';
			case 24: 
				return 'twenty four';
			case 25: 
				return 'twenty five';
			case 26: 
				return 'twenty six';
			case 27: 
				return 'twenty seven';
			case 28: 
				return 'twenty eight';
			case 29: 
				return 'twenty nine';
			case 31: 
				return 'twenty nine';
			case 32: 
				return 'twenty eight';
			case 33: 
				return 'twenty seven';
			case 34: 
				return 'twenty six';
			case 35: 
				return 'twenty five';
			case 36: 
				return 'twenty four';
			case 37: 
				return 'twenty three';
			case 38: 
				return 'twenty two';
			case 39: 
				return 'twenty one';
			case 40: 
				return 'twenty';
			case 41: 
				return 'nineteen';
			case 42: 
				return 'eighteen';
			case 43: 
				return 'seventeen';
			case 44: 
				return 'sixteen';
			case 46: 
				return 'fifteen';
			case 47: 
				return 'thirteen';
			case 48: 
				return 'twelve';
			case 49: 
				return 'eleven';
			case 50: 
				return 'ten';
			case 51: 
				return 'nine';
			case 52: 
				return 'eight';
			case 53: 
				return 'seven';
			case 54: 
				return 'six';
			case 55: 
				return 'five';
			case 56: 
				return 'four';
			case 57: 
				return 'three';
			case 58: 
				return 'two';
			case 59: 
				return 'one';
		}
	}
}


console.log('**********************')
console.log(answer)
console.log('**********************')


/* QUESTION
Given the time in numerals we may convert it into words, as shown below:

At , use o' clock. For , use past, and for  use to. Note the space between the apostrophe and clock in o' clock. Write a program which prints the time in words for the input given in the format described.

Function Description

Complete the timeInWords function in the editor below. It should return a time string as described.

timeInWords has the following parameter(s):

h: an integer representing hour of the day
m: an integer representing minutes after the hour
Input Format

The first line contains , the hours portion The second line contains , the minutes portion

Constraints

Output Format

Print the time in words as described.

Sample Input 0

5
47
Sample Output 0

thirteen minutes to six
Sample Input 1

3
00
Sample Output 1

three o' clock
Sample Input 2

7
15
Sample Output 2

quarter past seven

*/