/* /public-dev/js/app.js */
var someObj = {}
var someNum = 12345
var someStr = 'Hiya!'
var someArr = [someObj, someNum, someStr]
var someNothing = null

console.log(combineTwoWords('Are we minified?'))
console.log(sumTwoNums(100,1))
console.log(getLastEl(someArr))

function combineTwoWords(word1, word2){
	var combined = word1 + ' ' + word2
	return combined
}

function sumTwoNums(num1, num2){
	var sum = num1 + num2
	return sum
}

function getLastEl(arr){
	var lastEl = arr[arr.length - 1]
	return lastEl
}