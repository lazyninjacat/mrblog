---
title: Find Uniques
date: 2020-02-18T23:46:19.651Z
description: In which I solve a coding challenge to find all unique numbers in an array
featuredImage: ../assets/unique.jpeg
---
AlgoDaily Coding Challenge, Day 33.

#### Uniqueness of Arrays

Given an array, return just the unique elements without using any built-in Array filtering. In other words, you're removing any duplicates.

Note: Order needs to be preserved, so no sorting should be done.

#### Here's my solution:

```
// Solution:

var startArray = [3, 5, 6, 9, 9, 4, 3, 12];
var endArray = [];
var isDuplicate = false;

function findUniques() {
  for (i = 0; i < startArray.length; i++) {
    for (x = 0; x < i; x++) {
      if (startArray[x] === startArray[i]) {
        isDuplicate = true;
      }
    }
    if (isDuplicate === false) {
      endArray.push(startArray[i]);
    }
    isDuplicate = false;
  }
}

findUniques();

console.log("Start array = " + startArray);
console.log("Uniques = " + endArray);
```

As before, pretty simple. I just use a boolean to keep track of whether it found a duplicate. If it did, then don't push that one to the solution array. Easy peasy.

Yippee Kie Yay! It works :-)

\-mr
