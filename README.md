
# Vanilla-JS-Prompt

A simple JS (with html and css) function to show prompt modals. If you are only looking for the alert functionality with one button look at my [Vanilla-JS-Alert](https://github.com/lecoa/Vanilla-JS-Alert) project.


## Installation

To use this function you only need to follow these four steps:

1. Download the prompt.js and modal.css to your project.
2. Link to the prompt.js and modal.css in your html file.
3. Add the content of modal.html to the bottom of the body of your html file.
4. Start calling the show_prompt(); function. See below for examples.

## Usage
Open the index.html file to see examples in action

The function with parameters
```javascript
show_prompt(title, message, pribtnHide = false, pribtnLabel = "Close", secBtnLabel = '', secBtnAction = '')
```

Example with a custom text lanel for the close button
```javascript
show_prompt('Open website', 'Visit larrindell.com?', false, 'No', 'Yes', `window.open('https://larrindell.com');document.getElementById('modal-alert').style.display = 'none'`)
```
## Author

- [@lecoa](https://github.com/lecoa)

