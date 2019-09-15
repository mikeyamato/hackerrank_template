/**
|--------------------------------------------------
| always be sure to set up parameters FIRST
|--------------------------------------------------
*/

const answer = question(
	[
		'mission statement',
		'a quick bite to eat',
		'a chip off the old block',
		'chocolate bar',
		'mission impossible',
		'a man on a mission',
		'block party',
		'eat my words',
		'bar of soap'
	]
); 

function question (questions) {

	const allCombinedStrings = []

	// for (let i = 0; i < questions.length; i++){
	// 	const splitFirstPhrase = questions[i].split(' ');
	// 	const lastWord = splitFirstPhrase[splitFirstPhrase.length-1];
	// 	for (let j = 0; j < questions.length; j++){
	// 		if (i !== j) {
	// 			const splitSecondPhrase = questions[j].split(' ');
	// 			const firstWord = splitSecondPhrase[0];
	// 			if (lastWord === firstWord){
	// 				const slicedSplitSecondPhrase = splitSecondPhrase.slice(1)
	// 				const combinedString = splitFirstPhrase.concat(slicedSplitSecondPhrase).join(' ')
	// 				allCombinedStrings.push(combinedString);
	// 			}
	// 		}
	// 	}
	// }


	questions.map(phrase1 => findMatch(phrase1));

	function findMatch(phrase1){
		questions.map(phrase2 => matchPhrases(phrase1, phrase2))
	}

	function matchPhrases(phrase1, phrase2){
		if(phrase1 !== phrase2){
			const phrase1Split = phrase1.split(' ');
			const phrase2Split = phrase2.split(' ');
			const phrase1FirstWord = phrase1Split[0];
			const phrase2LastWord = phrase2Split[phrase2Split.length - 1];
			if (phrase1FirstWord === phrase2LastWord){
				const shortenedPhrase1Split = phrase1Split.slice(1)
				const combinedPhrase = phrase2Split.concat(shortenedPhrase1Split).join(' ');
				allCombinedStrings.push(combinedPhrase);
			}
		}
	}

	return allCombinedStrings;
}


console.log('**********************')
console.log(answer)
console.log('**********************')


/* QUESTION
Given a list of phrases, generate a list of Wheel of Fortune "Before and After" puzzles. "Before and After" puzzles are where one phrase ends with the last word of the first word of another. 

As a basic example given the two phrases, "writing code" and "code rocks", the output would be "writing code rocks". 

```javascript
input = [
	'mission statement',
	'a quick bite to eat',
	'a chip off the old block',
	'chocolate bar',
	'mission impossible',
	'a ma on a mission',
	'block party',
	'eat my words',
	'bar of soap'
]

output = [
	'a quick bite to eat my words',
	'a chip off the old block party',
	'chocolate bar of soap',
	'a man on a mission statement',
	'a man on a mission impossible'
]
```

return an array of strings.

*/