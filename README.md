# 05-Challenge

## This application displays my ability to utilize momentjs, bootstrap, and javascript to create a basic work day scheduler

You're able to input events for every timeblock given on the application and save them to local storage.

Your inputted values will be saved onto the timeblocks whenever you reload the page.

The timeblocks will also change colors based on whether or not they are in the past, present or future.

All of this was done using momentjs to display the date onto the header, using textarea bootstrap code applied to the HTML file along with created save buttons and boilerplate bootstrap to align all of the text inputs together. I created event listeners for the save button on every timeblock that stored the inputted value into local storage. I made functions for every timeblock to grabbed the saved event values from local storage and applied .textContent to every textblock so that the saved events persist on the application. I made if-statements for every timeblock that changed the classList depending on what time of the day it is (which was acquired using moment.js).

https://markkoos.github.io/05-Challenge/

![alt text](/assets/pictures/05-Challenge.png)

