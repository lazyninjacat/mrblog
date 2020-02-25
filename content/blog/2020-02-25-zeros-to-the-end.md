---
title: Zeros to the end...
date: 2020-02-25T21:19:01.767Z
description: >-
  In which I solve a code challenge to move all zeros in an array to the array's
  end.
featuredImage: ../assets/the-end-is-near.jpg
---
Here's the code challenge, for AlgoDaily #25:

#### Zeros to the End

Write a method that moves all zeros in an array to its end. You should maintain the order of all other elements. Here's an example:

```
zerosToEnd([1, 0, 2, 0, 4, 0])
// [1, 2, 4, 0, 0, 0]
```

And another one:

```
zerosToEnd([1, 0, 2, 0, 4, 0])
// [1, 2, 4, 0, 0, 0]
```

Fill in the following function signature:

```
function zerosToEnd(nums) {
  return;
};
```

Can you do this without instantiating a new array?

#### My Solution:

```
var numsArray;

function zerosToEnd(nums) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(nums.length - 1, 0, 0);
      nums.splice(i, 1);
    }
  }
}

numsArray = [1, 0, 2, 0, 4, 0];

console.log("start array = " + numsArray);

zerosToEnd(numsArray);

console.log("end array = " + numsArray);
```

The solution I went with was to use the splice method, which adds/removes an elements from an array. Only 1 for loop necessary.

Yep, it works!

\-mr
