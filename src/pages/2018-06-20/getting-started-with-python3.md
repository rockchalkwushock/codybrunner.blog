---
date: "2018-06-20"
description: "Installation and setup of Python3 on macOS & development with Visual Studio Code."
draft: false
keywords: "python3, visual studio code, macOS, PDX Code Guild"
tags: ["python", "vscode", "cli"]
title: "Getting Started with Python3"
---

I recently started the Full Stack Development Bootcamp at [PDX Code Guild](https://pdxcodeguild.com/) here in Portland. Being completely new to Python development I needed to learn how to get Python on my machine and how to set it up for development with Visual Studio Code, my editor of choice. This post is a short guide on how to do so.

## Installing Python3

macOS comes with `python` installed natively but as you can see it's not Python 3.

```bash
python --version
# Python 2.7.10
```

Being that I'm on a Mac I will be using [Homebrew](https://brew.sh/) to install Python 3. If you are unfamiliar with Homebrew please feel free to checkout my [tutorial](https://youtu.be/71LqoDuVMBw) on YouTube.

```bash
brew update
brew install python
```

After installation we should now have access to `python3` from the command line:

```bash
python3 --version
# Python 3.6.5

which python3
# usr/local/bin/python3
```

## Setting up Visual Studio Code

For VS Code we will want to install two extensions [Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python#review-details) and [Python for VSCode](https://marketplace.visualstudio.com/items?itemName=tht13.python#review-details). We can set up our editor for use the latest version of Python by pressing: `CMD + Shift + P`, selecting `Python: Select Interpreter`, and then selecting `Python 3.6.5`. Likewise we can choose our linter through the same process but selecting instead `Python: Select Linter`. I chose to enable `pep8`.

You should now see the following in your `settings.json` file:

```json
{
  "python.linting.pylintEnabled": false,
  "python.linting.pep8Enabled": true,
  "python.linting.enabled": true,
  "python.pythonPath": "/usr/local/bin/python3"
}
```

For more in depth setup you can go to the VS Code documentaion [here](https://code.visualstudio.com/docs/languages/python).

<!-- End of Post -->

> **Happy Coding!**

**~ Cody** :rocket:
