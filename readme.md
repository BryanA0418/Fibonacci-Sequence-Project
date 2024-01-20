# The Fibonacci Sequence

## Introduction

The Fibonacci Sequence is a sequence in which each number is the sum of the two preceding ones. The sequence was first described by mathmaticians in india about 1300 years ago and it was introduced to the west in 1202 by leonardo of pisa. It is said that you see the fibonacci sequence in nature alot for example when you looking at flowers chances are the amount of pedals has a fibonacci number.

## Algorithm Description

1. Create an function with one param.

![function](https://github.com/10-6-pursuit/independent-study-project-example/assets/145965056/3fb83e93-07b4-4a9b-811a-108aba6d0618)

2. We will need create an array to put the first two numbers of the FS 0,1.

![array](https://github.com/10-6-pursuit/independent-study-project-example/assets/145965056/1711b250-60c6-4fb7-bf5a-46eb20866eb6)

3.We need to fill in the remaining elements from the 3rd index up to the nth because we've already got the first two in the array. Each number should be the sum of the previous two. So, we use a for loop starting at index 2 and going through the array up to the nth element. We assign values to these elements with fibArray[i] = fibArray[i - 1] + fibArray[i - 2]. This way, the code keeps adding the sum of the last two indices to the array. Finally we return the array.
![carbon(1)](https://github.com/10-6-pursuit/independent-study-project-example/assets/145965056/8cea7c93-be83-41fd-af0c-5e83746e9a7e)
