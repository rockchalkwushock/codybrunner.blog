---
date: "2018-08-01"
description: "A guide for how to build a stopwatch with JavaScript."
draft: false
keywords: "javascript, setInterval, stopwatch"
tags: ["javascript", "web-development"]
title: "Building a Stopwatch with JavaScript"
---

It's been a while since I have written anything about or in the realm of JavaScript. This little post is coming back to the basics of JavaScript and DOM manipulation. I will walk you through how to build a stop watch with start/pause, reset, and lap functionality built in to it.

## The Skeleton and Makeup

The below code snippets are the HTML and CSS I will be using. Feel free to copy and paste them into your editor.

```html
<div class="app">
  <div id="watch"></div>
  <div class="controls">
    <button id="start">Start</button>
    <button id="lap">Lap</button>
    <button id="reset">Reset</button>
  </div>
  <div id="laps"></div>
</div>
```

```css
.app {
  align-items: center;
  background-color: darkseagreen;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
}

.controls {
  display: flex;
  justify-content: space-around;
}

#watch {
  align-items: center;
  border: 2px solid darkslategray;
  color: darkslategray;
  display: flex;
  font-family: 'Courier New', Courier, monospace;
  font-size: 4rem;
  height: 10vh;
  justify-content: center;
  padding: 1rem;
  text-align: center;
  width: 80%;
}

#laps {
  color: darkslategray;
  font-family: 'Courier New', Courier, monospace;
  font-size: 2rem;
  height: 400px;
  overflow: scroll;
  text-align: center;
  width: 80%;
}

button {
  background-color: darkslategray;
  border: none;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  color: white;
  font-family: 'Courier New', Courier, monospace;
  font-size: 2rem;
  height: 3rem;
  margin: 1rem;
  outline: none;
}
```

## On to the JavaScript

So JavaScript has 2 native timing functions built in: `setTimeout`, `setInterval`.

`setTimeout` will run a timer one time for the set duration; where as,`setInterval` allows us to execute code at set intervals, so for example if we want to show a cat on the screen every 3 seconds this is the timing function we would want to use. Both timing functions return a timing id that is unique to the browser instance it is being ran in. The timer id is what we will need to clear the timer when we want to be done with it.

```javascript
setTimeout(() => {
  // Code here will execute one time 5 seconds from now.
}, 5000)

let timer = setInterval(() => {
  // Code here will continuously execute at 3 second intervals.
}, 3000)

console.log(timer) // 1234, the timer id
```

First we will grab our elements for later use and setup some temporary variables. Let's not forget to get something on the screen in our _watch_ div too!

```javascript
const startBtn = document.getElementById('start')
const lapBtn = document.getElementById('lap')
const resetBtn = document.getElementById('reset')
const watch = document.getElementById('watch')
const laps = document.getElementById('laps')
let RUNNING = false
let time = 0
let timer

watch.innerHTML = '00:00:00'
```

Our _start_ button needs to handle the functionality of being both a start button and a pause button. To do that we will check to see if the state of our application is running and if it isn't we will first set the state to running. Then we will start the stopwatch and finally toggle the text inside the button so the user knows they can pause the stopwatch as well.

```javascript
startBtn.addEventListener('click', event => {
  if (!RUNNING) {
    RUNNING = true
    stopwatch()
    startBtn.innerHTML = 'Pause'
  } else {
    RUNNING = false
    stopwatch()
    startBtn.innerHTML = 'Start'
  }
})
```

Now we get into the meat and potatoes of our application. Our `stopwatch` function needs to know the state of the application so it knows when to start an interval and when to clear the current interval. Instead of using the `Date.now` we are making use of a simple counter that will increment on every millisecond interval. We store our timer in a temporary variable so we have access to the _timer id_ we talked about earlier. It's through this id we will be able to clear the interval later on when we toggle the state of our application. We make use of ES6 template strings to build out the display of the time and make use of ternary expressions for when we need to pad values with zero.

```javascript
const stopwatch = () => {
  if (RUNNING) {
    timer = setInterval(() => {
      time++
      const minutes = Math.floor(time / (60 * 60))
      const seconds = Math.floor(time / 60) % 60
      const milliseconds = time % 100

      watch.innerHTML = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}:${
        milliseconds < 10 ? '0' + milliseconds : milliseconds
      }`
    }, 10)
  } else {
    clearInterval(timer)
  }
}
```

Our lap button and reset button are both pretty straightforward. For our lap button we are just going to peak in on the value in our `watch` div at the current moment and display that out as a lap value. For our reset button we will toggle the state of the application, change our button text and clear out the timer. We will also take the time to do some cleanup and reset the display.

```javascript
lapBtn.addEventListener('click', event => {
  const currentTime = watch.innerHTML
  const lap = document.createElement('p')
  lap.innerHTML = `${currentTime}`
  laps.appendChild(lap)
})

resetBtn.addEventListener('click', event => {
  RUNNING = false
  startBtn.innerHTML = 'Start'
  clearInterval(timer)
  watch.innerHTML = '00:00:00'
  laps.innerHTML = ''
})
```

And that's it! You've built a stopwatch using JavaScript. Pretty straightforward albeit not necessarily intuitive if it's your first time working with timers in JavaScript. I hope you enjoyed this post and choose to share it with your friends.

<!-- End of Post -->

> **Happy Coding!**

**~ Cody** :rocket:
