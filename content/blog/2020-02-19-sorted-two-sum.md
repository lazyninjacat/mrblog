---
title: Sorted Two Sum
date: 2020-02-19T00:07:36.773Z
description: In which I solve the sorted two sum problem
featuredImage: ../assets/0fc714f04995ca861fc9f1390bb4a683.png
---
AlgoDaily code challenge, Day 29:

#### Sorted Two Sum

The setup is the same as[ Two Sum](http://challenges/two-sum)-- you're given an array of numbers, and a "goal" number.

Write a method to return an array of the indexes of the two elements in the array that sum up to the goal. If there are no such elements, return an empty array.

The caveat here is that the numbers are guaranteed to be sorted.

So let's say our goal number was `10`. Our numbers to sum to it would be `3 `and `7`, and their indices `1 `and `2 `respectively.

Is there an efficient way to figure this out?



#### Here's my solution:

```
var startArray = [1, 3, 7, 9, 11];
var endArray = [];
var goal = 10;

function twoSum() {
  for (i = 0; i < startArray.length; i++) {
    if (startArray[i] + startArray[i + 1] === goal) {
      endArray.push(i);
      endArray.push(i + 1);
    }
  }
}

twoSum();

console.log("Start Array = " + startArray);
console.log("Solution = " + endArray);

```

Once again, it works!!....... I mean, it better right? it's only 14 lines of code.

Wooty and the wootwoot-fish!

\-mr
