---
date: "2018-06-28"
description: "How to build a simple black jack advice generator using Python."
draft: true
keywords: "python, black jack"
tags: ["python"]
title: "Building a Black Jack Advice Generator with Python"
---

I've been working on learning the in's and out's of Python in the last week and in this post want to share what I learned building a simple black jack advice generator. The gist of this project is to be able to tell the player what to do in the case of the three cards they currently have. So for example if the player is given an Ace, 5 and 7 should he or she _hit_ or _stay_.

## Python Dictionaries

The first thing we will need to do is build a dictionary that holds all the values for our cards. We will set the _Ace_ to be equal to a value of 11 for the time being:

```python
values = {
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    'J': 10,
    'Q': 10,
    'K': 10,
    'A': 11
}
```

Dictionaries are similar to objects in JavaScript however they are a little different in how we access the data and I will admit I get yelled at by Python alot of using dot notation which is no bueno.

```python
my_dict = {
  "a": 1, # Note the key is a string a: 1 will not work in Python
  "b": 2
}

my_dict["a"] # 1
my_dict.a # Nastygram from Python
```

Now we will build two helper functions for later use in the main program. One will return the card value based on the supplied card and the other will sum the player's cards.

```python
def get_value(card):
    return values[card] # supply the string input from the player in bracket notation


def sum_values(a, b, c):
    return a + b + c
```

We can also build a helper function that will handle the logic of what advice to display to the player based on the sum of his or her cards. I'm using Python 3.6 so I'm using f-strings to do formatted printing.

```python
def advice(total):
    if total < 17:
        print(f'Total is {total}, Hit!')
    elif total >= 17 and total < 21:
        print(f'Total is {total}, Stay!')
    elif total == 21:
        print(f'Total is {total}, Black Jack!')
    elif total > 21:
        print(f'Total is {total}, Busted!')
```

We can start putting together our main program and requesting input from the player.

```python
def main():
    f = input('What is your first card? ')
    s = input('What is your second card? ')
    t = input('What is your third card? ')
    total = sum_values(
        get_value(f),
        get_value(s),
        get_value(t)
    )
    advice(total)

main()
```

The current code will work; however in Black Jack and Ace can be worth 1 or 11 based on the player's current hand so how can we go about assigning the correct value to the player's hand when they receive an ace instead of having a hard coded 11 as we do now?

We will build another helper method for this case called `is_ace`. Using boolean logic we will search the player's hand first to see if and Ace is present in their hand _and_ should they have an Ace check if the player's total is greater than 21. If this conditional is fullfilled we will subtract 10 from the total (making the Ace's value equal to 1).

```python
def is_ace(cards, total):
    if 'A' in cards and total > 21:
        total -= 10
    return total
```

Now we can slip this helper function into our main program and we should get the correct advice according to the proper rules of black jack.

```python
def main():
    f = input('What is your first card? ')
    s = input('What is your second card? ')
    t = input('What is your third card? ')
    total = sum_values(
        get_value(f),
        get_value(s),
        get_value(t)
    )
    total = is_ace([f, s, t], total)
    advice(total)

main()
```

## Wrap Up

It wasn't much but we learned how to use Python dictionaries to access key/value mappings and how to use boolean logic to handle the dynamic value of our player's Ace card. I'm liking Python so far and can't wait to learn more!

<!-- End of Post -->

> **Happy Coding!**

**~ Cody** :rocket:
