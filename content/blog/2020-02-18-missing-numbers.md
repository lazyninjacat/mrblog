---
title: Missing Numbers
date: 2020-02-18T21:28:48.268Z
description: In which I solve the case of the missing numbers in an array...
featuredImage: ../assets/missing.jpg
---

Here's the problem statement, from AlgoDaily Day 34:

#### Day 34: Find Missing Number in Array

We're given an array of continuous numbers that should increment sequentially by 1, which just means that we expect a sequence like:

`[1, 2, 3, 4, 5, 6, 7]`

However, we notice that there are some missing numbers in the sequence.

`[1, 2, 4, 5, 7]`

Can you write a method that takes an array of continuous numbers and returns the missing integers?

#### Here's my solution:

```
//////////////////////////////////////////////////////////////////////
// Solution:

var startArray = [1, 2, 4, 5, 7];
var endArray = [];

function missingNumbers() {
  for (i = 0; i < startArray.length - 1; i++) {
    if (startArray[i + 1] !== startArray[i] + 1) {
      endArray.push(startArray[i] + 1);
    }
  }
}

missingNumbers();

console.log("Start Array = " + startArray);
console.log("Missing number = " + endArray);
```

Pretty simple, straightforward. The solution boils down to testing if the actual array index value (i.e. startArray\[i + 1]) is equal to the value it SHOULD be (i.e. startArrray\[i] + i).

Yees.

\-mr
