---
date: "2018-06-29"
description: "Writing a program that will read moves and populate a game board for the popular game Connect Four using Python."
draft: true
keywords: "connect four, python, PDX Code Guild"
tags: ["python"]
title: "Writing a Connect Four Game Reader in Python"
---

A recent assignment handed out in the bootcamp I'm a part of, [PDX Code Guild](https://pdxcodeguild.com/), was to desgin a program that could read a file full of moves for populating a Connect Four game board. The following post is a walk through of how I solved this problem.

## Reading the file

First we need to read the file that contains the moves our players are making. The file consists of single lines of numbers ranging from 1-7 alternating between players. So our `connect-four-moves.txt` would look something like the following:

```text
4 <-- player one's selection
3 <-- player two's selection
5
6
4
```

```python
def open_file(filename, encoding='utf-8'):
    """
    Returns a list of the lines of text.
    """
    with open(filename, encoding=encoding) as f:
        return f.readlines()

text = open_file('connect-four-moves.txt')
print(text) # ['4\n', '3\n', '5\n', '6\n', '4\n']
```

## Grouping the players moves

Now we can read the data from the text file and group the moves together for each player. We will also remove that pesky newline character we are seeing returned from our `open_file` function using `rstrip()`. We will add the moves to two different lists depending on whether or not `i` is even or odd and then return those two lists in a tuple for later unpacking.

```python
def read_plays(moves):
    player_one = []
    player_two = []
    for i in range(len(moves)):
        if i % 2 == 0:
            player_two.append(moves[i].rstrip())
        else:
            player_one.append(moves[i].rstrip())
    return (player_one, player_two) # (['4', '5', '4'], ['3', '6'])
```

## Building & Printing the Board

Our board is just a list of lists so we will loop over the height of the board and append our _rows_ of lists and then loop over our width and append an empty string for each space. Our `print_board` function is pretty self-explanatory :wink:

```python
BOARD_HEIGHT = 6
BOARD_WIDTH = 7

def build_board():
    board = []
    for y in range(BOARD_HEIGHT):
        board.append([])
        for x in range(BOARD_WIDTH):
            board[y].append(' ')
    return board


def print_board(board):
    for row in board:
        print(row)
```

What our board now looks like in the terminal:

```bash
[' ', ' ', ' ', ' ', ' ', ' ', ' ']
[' ', ' ', ' ', ' ', ' ', ' ', ' ']
[' ', ' ', ' ', ' ', ' ', ' ', ' ']
[' ', ' ', ' ', ' ', ' ', ' ', ' ']
[' ', ' ', ' ', ' ', ' ', ' ', ' ']
[' ', ' ', ' ', ' ', ' ', ' ', ' ']
```

## Making a Move on the Board

We will create another function that accepts three arguments: the current player, the selection made by the player, and the board. Using a nifty little trick we will loop through the board counting down instead of counting up the indices using `reversed()` By doing this now we will place the player's mark at the bottom of our board instead of at the top just like if you were dropping your piece into position on a real Connect Four board. We will look to see if the space selected on the board is taken or not, and if it is not taken we will replace the blank space with our player's icon and reassign the value to that location on the board. We will then break from the loop and return the board as to not populate all the blank spaces in that column with the player's icon.

```python
def make_move(player, column, board):
    # reversed() will cause 'i' to start at 6 instead of 1
    for i in reversed(range(BOARD_HEIGHT)):
        if board[i][column - 1] == ' ':
            board[i][column - 1] = board[i][column - 1].replace(' ', player)
            break
    return board
```

## Playing out the Game

To play out our player's moves on the board we will pass the moves we are returning from `read_plays` and the game board to a new function `play_game`. By setting a variable called `current_player` we can toggle who is up to make a move on the board later on with our if statements. We will start off by unpacking our tuple to get the player's moves and setup a while loop that will terminate when both lists are empty.

When we get to making our moves we will want to access the first index of the list so instead of just calling the `pop` method, who's default behavior is to return the last index of a list, we will pass an argument to `pop` of which index we want it to return. For those keeping score at home `move` is actually of type string so we need to cast it to an integer or trying to index in the `make_move` funciton will blow up. Lastly we will return the board and print it for every player's move.

```python
PLAYER_ONE_ICON = 'X'
PLAYER_TWO_ICON = 'O'

def play_game(moves, board):
    current_player = 1
    p1_moves, p2_moves = moves
    while p1_moves or p2_moves:
        if current_player == 1:
            move = p1_moves.pop(0)
            current_player += 1
            board = make_move(PLAYER_ONE_ICON, int(move), board)
            print_board(board)
        elif current_player == 2:
            move = p2_moves.pop(0)
            current_player -= 1
            board = make_move(PLAYER_TWO_ICON, int(move), board)
            print_board(board)
```

## Ready to Go!

And we are set to run the game!

```python
text = open_file('connect-four-moves.txt')
moves = read_plays(text)
board = build_board()
play_game(moves, board)
```

What our game board looks like now:

```bash
[' ', ' ', ' ', ' ', ' ', ' ', ' ']
[' ', ' ', ' ', ' ', ' ', ' ', ' ']
[' ', ' ', ' ', ' ', ' ', ' ', ' ']
[' ', ' ', ' ', ' ', ' ', ' ', ' ']
[' ', ' ', ' ', 'X', ' ', ' ', ' ']
[' ', ' ', 'X', 'O', 'O', 'X', ' ']
```

## Bonus: Clean up

To clean up the output in the terminal we can use the `os` module and create a function to insert before printing our board out. This function is basically Python telling the OS to run the command to clear the terminal for either Windows or macOS/Linux. Now our terminal will only show one board instead of a bunch.

```python
from os import name, system

def cls():
    system('cls' if name == 'nt' else 'clear')

def print_board(board):
    cls()
    for row in board:
        print(row)
```

## Wrap Up

It was an interesting taks and if you think this was an easy assignment I did get stuck a few times and did some real pondering. If you've got questions feel free to contact me and I'll help you understand the code. You can see the full code on my [Github](https://github.com/rockchalkwushock/pdx-code-labs/blob/master/connect_four.py).

<!-- End of Post -->

> **Happy Coding!**

**~ Cody** :rocket:
