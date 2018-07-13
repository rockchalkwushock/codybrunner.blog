---
date: "2018-07-13"
description: "Working through Fibonacci using recursion and memoization in Python."
draft: false
keywords: "python, fibonacci, recursion, memoization"
tags: ["python"]
title: "Recursion & Memoization in Python"
---

Recursion can be a dirty word in programming. It gets a bad wrap for good reasons like stackoverflows and infinite loops. In this post we will look at the Fibonacci sequence and how we can apply recursive concepts to solve it. We will then look at how horribly inefficient this solution is and how the concept of memoization can drastically improve that efficiency.

## The Problem

The Fibonacci sequence, in case you have not heard of it, is a mathematical sequence where a number is the sum of the two previous numbers before it.

```text
0 1 1 2 3
```

So looking at these numbers 1 is the sum of `0 + 1` and 2 is the sum of `1 + 1` and so on and so forth.

## Enter Recursion

Recursion is when we call a function from within itself. With recursion we need to think in terms of our terminating case first, so at what point should our recursive function call end. We think in these terms to avoid entering an infinite loop since we will be calling the function from inside itself. In the case of fibonacci when we have made it to the last two numbers, 0 and 1, we have made it to our terminating case. We can check for this through the following conditional:

```python
if n < 2:
  return n
```

So our function will start off looking as:

```python
def fib(n):
  if n < 2:
    return n
```

Now since we know that fibonacci is the sum of the two previous numbers we can call our `fib()` and add the two calls together where we are taking one less and two less `n` as the inputs for each iteration:

```python
def fib(n):
  if n < 2:
    return n
  else:
    return fib(n - 1) + fib(n - 2)
```

## Executing Fibonacci

When we run our `fib` function we can see that it works with no issues with smaller numbers. Running `fib(8)` returns relatively quickly; however if we run `fib(40)` we will be waiting for a hot minute for the return value. This is due to the fact that we are processing a lot of the same computation over and over again. For example let's look at `fib(5)`:

```text
Pass 1: fib(4) + fib(3)
Pass 2: fib(3) + fib(2)
Pass 3: fib(2) + fib(1)
Pass 4: fib(1) + fib(0)
```

So looking at the above diagram we can see that we run the computation of `fib(3)` twice as well as other instances. If we have ran and know the value of this computation already it becomes redundant to process it over an over again.

## Enter Memoization

Memoization is a manner in which we can cache our results and then check to see if we have seen that function call before.

```python
def memoize(fn):
    cache = {}

    def helper(x):
        # If not in our cache store it.
        if x not in cache:
            cache[x] = fn(x)
        # else return the cached function call.
        return cache[x]
    return helper
```

Now when using memoization with our `fib()` our diagram changes to look like the following:

```text
Pass 1: fib(4) + fib(3)
Pass 2: value of fib(3) + fib(2)
Pass 3: value of fib(2) + fib(1)
Pass 4: value of fib(1) + fib(0)
```

We get this instead because we have stored the return value from `fib(n)` at the specified key in our cache.

## Using our memoization function

There are two ways to use this function in Python. We can just supply `fib` to it and reassign `fib` or we can use the _decorators_ feature:

```python
fib = memoize(fib)

fib(40)
```

```python
@memoize
def fib(n):
  if n < 2:
    return n
  else:
    return fib(n - 1) + fib(n - 2)
```

Now when running `fib(40)` we see a nearly instant return in the terminal just like we had seen before with lower input values. Memoization is a great way to increase the performance of a recursive function.

<!-- End of Post -->

> **Happy Coding!**

**~ Cody** :rocket:
