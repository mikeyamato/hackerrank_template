/**
|--------------------------------------------------
| always be sure to set up parameters FIRST
|--------------------------------------------------
*/

const answer = question(["abcd","dcba","lls","s","sssll"]); 

function question (q) {

	let combined;
	for (let i = 0; i < q.length; i++){
		if (i < q.lenght -1){
			combined = q[i].concat(q[i+1])
			console.log(combined)
		} else {
			return;
		}
	}
	return combined

}

console.log('**********************')
console.log(answer)
console.log('**********************')


/* QUESTION
Given a list of unique words, find all pairs of distinct indices (i, j) in the given list, so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.

Example 1:

Input: ["abcd","dcba","lls","s","sssll"]
Output: [[0,1],[1,0],[3,2],[2,4]] 
Explanation: The palindromes are ["dcbaabcd","abcddcba","slls","llssssll"]
Example 2:

Input: ["bat","tab","cat"]
Output: [[0,1],[1,0]] 
Explanation: The palindromes are ["battab","tabbat"]

*/