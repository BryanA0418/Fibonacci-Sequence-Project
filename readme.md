# The Fibonacci Sequence

## Introduction

The Fibonacci Sequence is a sequence in which each number is the sum of the two preceding ones. The sequence was first described by mathmaticians in india about 1300 years ago and it was introduced to the west in 1202 by leonardo of pisa. It is said that you see the fibonacci sequence in nature alot for example when you looking at flowers chances are the amount of pedals has a fibonacci number.

## Algorithm Description

1. Create an function with one param.

![function](https://github.com/10-6-pursuit/independent-study-project-example/assets/145965056/3fb83e93-07b4-4a9b-811a-108aba6d0618)

2. We will need create an array to put the first two numbers of the FS 0,1.

![array](https://github.com/10-6-pursuit/independent-study-project-example/assets/145965056/1711b250-60c6-4fb7-bf5a-46eb20866eb6)

3.We need to fill in the remaining elements from the 3rd index up to the nth because we've already got the first two in the array. Each number should be the sum of the previous two. So, we use a for loop starting at index 2 and going through the array up to the nth element. We assign values to these elements with fibArray[i] = fibArray[i - 1] + fibArray[i - 2]. This way, the code keeps adding the sum of the last two indices to the array. Finally return the array.

![carbon(1)](https://github.com/10-6-pursuit/independent-study-project-example/assets/145965056/8cea7c93-be83-41fd-af0c-5e83746e9a7e)

## Big O Evaluation

### Time complexity

![Time complexity](https://github.com/10-6-pursuit/independent-study-project-example/assets/145965056/e9accc82-51fa-46b3-b717-004b61b18021)

### Space Complexity


## Use Cases

The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones, usually starting with 0 and 1. Fibonacci sequence algorithms have various use cases in computer science and mathematics. Here are some common use cases:

1. **Mathematics and Number Theory:**
   - Fibonacci numbers are often used in mathematical and number theory research.
   - They appear in various mathematical properties and relationships, making them a subject of study in pure mathematics.

2. **Dynamic Programming:**
   - Fibonacci sequence is a classic example used in dynamic programming algorithms.
   - The recursive definition of Fibonacci numbers can be optimized using dynamic programming techniques to avoid redundant calculations and improve efficiency.

3. **Algorithm Analysis:**
   - The Fibonacci sequence is used in algorithm analysis to demonstrate time complexity and efficiency.
   - Analyzing the time complexity of recursive Fibonacci algorithms helps illustrate the importance of optimizing recursive functions.

4. **Coding Interviews:**
   - Fibonacci sequence problems are commonly used in coding interviews to assess a candidate's problem-solving skills.
   - Candidates may be asked to implement a function to generate Fibonacci numbers or solve related problems.

5. **Financial Modeling:**
   - Fibonacci numbers are sometimes used in financial modeling, particularly in technical analysis of financial markets.
   - Traders and analysts may use Fibonacci retracement levels to identify potential reversal points in price trends.

6. **Random Number Generation:**
   - The Fibonacci sequence can be used as the basis for generating pseudo-random numbers.
   - Certain algorithms use the Fibonacci sequence to produce sequences of numbers with properties useful in simulations and applications requiring randomness.

7. **Game Development:**
   - Fibonacci numbers and sequences can be applied in game development, such as in generating patterns or sequences of events in a game.
   - They may be used to create aesthetically pleasing patterns or structures within a game environment.

8. **Artificial Intelligence:**
   - Fibonacci numbers can be employed in various artificial intelligence algorithms and models.
   - They may be part of algorithms for pattern recognition, optimization problems, or other AI-related tasks.

9. **Educational Purposes:**
   - Fibonacci sequence algorithms are often used in educational settings to teach programming concepts and recursion.
   - They provide a practical and interesting example for students to understand recursion and algorithm design.

These are just a few examples, and the Fibonacci sequence's applications extend across various fields in computer science, mathematics, and beyond.

## Edge Cases

Edge cases refer to situations or input values that are at the extremes or boundaries of the input domain of a function. For Fibonacci sequence algorithms, some edge cases to consider include:

1. **Zero or Negative Input:**
   - What happens if the function is called with an input of 0 or a negative number? Some implementations may handle this case by returning an error, while others may define Fibonacci(0) as 0.

2. **First Few Fibonacci Numbers:**
   - How does the algorithm behave for small inputs, like Fibonacci(0), Fibonacci(1), or Fibonacci(2)? These are often the base cases for recursive implementations.

3. **Large Input Values:**
   - How does the algorithm perform for large input values, especially in terms of time and space complexity? Fibonacci numbers grow exponentially, so handling large values efficiently is crucial.

4. **Overflow:**
   - Depending on the data type used for storing Fibonacci numbers, there might be issues with integer overflow for very large Fibonacci numbers. This is particularly important in languages where integer types have maximum values.

5. **Memory Constraints:**
   - Consider cases where memory is constrained. For example, if the algorithm uses a lot of memory for recursion, it may run into stack overflow issues.

6. **Floating-Point Precision:**
   - If a floating-point type is used to store Fibonacci numbers, precision issues may arise for very large numbers due to the limited precision of floating-point representations.

7. **Performance for Caching Mechanisms:**
   - Some Fibonacci algorithms use caching or memoization to avoid redundant calculations. Edge cases may involve testing how well the caching mechanism works for various input scenarios.

8. **Testing Algorithm Variants:**
   - If there are multiple algorithms or variants (e.g., recursive, iterative, matrix exponentiation), edge cases can be used to compare their performance and behavior under different conditions.

9. **Fractional or Non-Integer Inputs:**
   - In some contexts, you might encounter cases where Fibonacci numbers are requested for non-integer inputs. How does the algorithm handle such situations?

10. **User Input:**
    - If the input is provided by a user or an external source, edge cases may include invalid or unexpected input formats. How robust is the algorithm in handling such inputs?

Testing these edge cases helps ensure the correctness, robustness, and efficiency of Fibonacci sequence algorithms across a wide range of scenarios.

## Citations

[CsDojo](https://www.youtube.com/watch?v=D6xkbGLQesk)
[SciShow](https://www.youtube.com/watch?v=wTlw7fNcO-0)
[LiveScience](https://www.livescience.com/37470-fibonacci-sequence.html)
[Wikipedia](https://en.wikipedia.org/wiki/Fibonacci_sequence)
[ChatGPT](https://chat.openai.com/c/d8b72438-1c49-4b44-bf1b-75207d239b5f)