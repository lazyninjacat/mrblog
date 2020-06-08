---
title: Palindrome Check
date: 2020-06-08T19:27:32.531Z
description: Two ways to check if a string is a palindrome
featuredImage: ../assets/MilkyWaySaltFlat_Huerta_2048.jpg
---
## Method 1 -- for loop

Simple recursive function using a for loop.

```
const str = "Hannah"

const isPalindrome = (inputString) => { 	
	// remove all spaces and non-letter characters from the string
	inputString = inputString.replace(/\W/g, '');
    
	// convert the string to lowercase
	inputString = inputString.toLowerCase();
    
	// run a for loop checking each letter in the first half of the string against its opposite letter in the last half of the string 
	for (let i=0; i<inputString.length; i++){
		if (inputString\[i] !== inputString[inputString.length - 1 - i){ 			
          return false;
		{
	{
	return true;
}

console.log(isPalindrome(str));
```



## Method 2 -- reverse string

Make direct use of the reverse string method available in Javascript.

```
const str = "Hannah"

const isPalindrome = (inStr) => {
	// remove all spaces and non-letter characters from the string
	inStr = inStr.replace(/\W/g, '');
	// convert the string to lowercase
	insStr = inStr.toLowerCase();
	// reverse the string and check if it's the same as the original
	return inStr === inStr.split('').reverse().join('');
}

console.log(isPalindrome(str));
```





in my opinion, method 2 wins.
