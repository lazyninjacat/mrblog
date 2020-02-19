---
title: Snack Distribution code challenge!
date: 2020-02-19T03:40:56.610Z
description: >-
  In which I solve a code challenge where you have to find the maximum possible
  unique snacks from a given array split between two siblings.
featuredImage: >-
  ../assets/Leo-Caillard-Hipsters-20s-jdp-3-tt-width-620-height-929-lazyload-0-crop-1-bgcolor-000000-except_gif-1.jpg
---
AlgoDaily code challenge for Day 33:

#### Treats Distribution

Say we are given an integer array of an even length, where different numbers in the array represent certain kinds of snacks or treats. Each number maps to, or represents, one kind of snack. So the following array would have two kinds: snack type `3`and type `2`:

```
// const snacks = [3, 3, 2, 2];
```

You need to distribute these snacks equally in number to a brother and sister duo. Write an algorithm `treatsDistribution(snacks: array) `to return the maximum number of unique kinds of snacks the sister could gain.

```
// const snacks = [2, 2, 3, 3, 4, 4];
// treatsDistribution(snacks);
// 3
```

In the above example, there are three different kinds of snacks (2, 3, and 4), and a quantity of two each. Thus, the sister can have snacks \[2, 3, 4] and the brother will have snacks \[2, 3, 4] as well. The sister has at most `3 `different unique kinds of snacks, so the answer is `3`.

```
// const snacks = [1, 1, 2, 4]
// treatsDistribution(snacks)
// 2
```

In this example, the sister can have a collection of snacks consisting of \[2, 4] and the brother has snack collection \[1, 1]. The sister can have up to 2 different kinds of snacks, while the brother has only 1 kind of snacks.

*You may assume that the length of the given array is in range is even, and that there's less than 10,000 elements.*



#### My Solution:

```
// Solution:

var snacksArray = [2, 2, 2, 3, 3, 3, 3, 2, 7, 7, 7, 11, 13, 14];
var maximumUniqueSnacks = 0;
var totalUniquesArray = [];
var isDuplicate;

function treatsDistribition(arr) {
  totalUniquesArray.push(arr[0]);

  for (i = 0; i < arr.length; i++) {
    for (x = 0; x < i; x++) {
      if (arr[x] === arr[i] && i !== x) {
        isDuplicate = true;
      }
    }
    if (isDuplicate === false) {
      totalUniquesArray.push(arr[i]);
    }
    isDuplicate = false;
  }
  if (totalUniquesArray.length >= snacksArray.length / 2) {
    maximumUniqueSnacks = snacksArray.length / 2;
  } else {
    maximumUniqueSnacks = totalUniquesArray.length;
  }
}

treatsDistribition(snacksArray);

console.log("Snacks Array = " + snacksArray);
console.log("snacks array lenght = " + snacksArray.length);
console.log("Maximum possible uniques for sister = " + maximumUniqueSnacks);
console.log("total uniques = " + totalUniquesArray);
console.log("total uniques length = " + totalUniquesArray.length);

```

Does the trick :-P

\-mr
