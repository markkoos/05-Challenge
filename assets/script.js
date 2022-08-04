// global
var currentDay = document.getElementById(`currentDay`);

// button for every hour in the schedule
var hourNine = document.querySelector(`.hour-9`);
var hourTen = document.querySelector(`.hour-10`);
var hourEl = document.querySelector(`.hour-11`);
var hourTwel = document.querySelector(`.hour-12`);
var hourOne = document.querySelector(`.hour-1`);
var hourTwo = document.querySelector(`.hour-2`);
var hourThree = document.querySelector(`.hour-3`);
var hourFour = document.querySelector(`.hour-4`);
var hourFive = document.querySelector(`.hour-5`);
var hourSix = document.querySelector(`.hour-6`);

// var for every textblock in schedule
var textBlk9 = document.querySelector(`.textblock9`);
var textBlk10 = document.querySelector(`.textblock10`);
var textBlk11 = document.querySelector(`.textblock11`);
var textBlk12 = document.querySelector(`.textblock12`);
var textBlk1 = document.querySelector(`.textblock1`);
var textBlk2 = document.querySelector(`.textblock2`);
var textBlk3 = document.querySelector(`.textblock3`);
var textBlk4 = document.querySelector(`.textblock4`);
var textBlk5 = document.querySelector(`.textblock5`);
var textBlk6 = document.querySelector(`.textblock6`);

// function to display date and time
function createTime() {
    dateTime = setInterval(function() {
        currentDay.textContent = moment().format("dddd, MMMM Do YYYY");
    }, 1000 );
}

// calls upon the function to display date and time
createTime();

// save buttons for every time in schedule
hourNine.addEventListener(`click`, function() {
    localStorage.setItem(`9AM`, textBlk9.value);
})

hourTen.addEventListener(`click`, function() {
    localStorage.setItem(`10AM`, textBlk10.value);
})

hourEl.addEventListener(`click`, function() {
    localStorage.setItem(`11AM`, textBlk11.value);
})

hourTwel.addEventListener(`click`, function() {
    localStorage.setItem(`12PM`, textBlk12.value);
})

hourOne.addEventListener(`click`, function() {
    localStorage.setItem(`1PM`, textBlk1.value);
})

hourTwo.addEventListener(`click`, function() {
    localStorage.setItem(`2PM`, textBlk2.value);
})

hourThree.addEventListener(`click`, function() {
    localStorage.setItem(`3PM`, textBlk3.value);
})

hourFour.addEventListener(`click`, function() {
    localStorage.setItem(`4PM`, textBlk4.value);
})

hourFour.addEventListener(`click`, function() {
    localStorage.setItem(`4PM`, textBlk4.value);
})

hourFive.addEventListener(`click`, function() {
    localStorage.setItem(`5PM`, textBlk5.value);
})

hourSix.addEventListener(`click`, function() {
    localStorage.setItem(`6PM`, textBlk6.value);
})

// sets text-area as the stored value upon reload
function getEvent9() {
    var storedEvent9 = localStorage.getItem(`9AM`);
    var Event9 = ""
    if (textBlk9 === null) {
        Event9 = storedEvent9;
    } 
    textBlk9.textContent = Event9;
    console.log(Event9);
    
}

getEvent9();