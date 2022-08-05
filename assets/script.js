// global
var currentDay = document.getElementById(`currentDay`);
var currentTime = moment().format(`hA`);
var timeDay = document.querySelector(`.ToD`)
var textArea = document.querySelector(`textarea`)

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


// 
var alertDark = document.createAttribute(`class`);
alertDark.value = `alert alert-dark`


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

// functions that sets text-area as the stored value upon reload
function getEvent9() {
    var storedEvent9 = localStorage.getItem(`9AM`);
    var Event9 = ""
    if (textBlk9.textContent === "") {
        Event9 = storedEvent9;
    } 
    textBlk9.textContent = Event9;
    console.log(Event9);
}
function getEvent10() {
    var storedEvent10 = localStorage.getItem(`10AM`);
    var Event10 = ""
    if (textBlk10.textContent === "") {
        Event10 = storedEvent10;
    } 
    textBlk10.textContent = Event10;
    console.log(Event10);
}
function getEvent11() {
    var storedEvent11 = localStorage.getItem(`11AM`);
    var Event11 = ""
    if (textBlk11.textContent === "") {
        Event11 = storedEvent11;
    } 
    textBlk11.textContent = Event11;
    console.log(Event11);
}
function getEvent12() {
    var storedEvent12 = localStorage.getItem(`12PM`);
    var Event12 = ""
    if (textBlk12.textContent === "") {
        Event12 = storedEvent12;
    } 
    textBlk12.textContent = Event12;
    console.log(Event12);
}
function getEvent1() {
    var storedEvent1 = localStorage.getItem(`1PM`);
    var Event1 = ""
    if (textBlk1.textContent === "") {
        Event1 = storedEvent1;
    } 
    textBlk1.textContent = Event1;
    console.log(Event1);
}
function getEvent2() {
    var storedEvent2 = localStorage.getItem(`2PM`);
    var Event2 = ""
    if (textBlk2.textContent === "") {
        Event2 = storedEvent2;
    } 
    textBlk2.textContent = Event2;
    console.log(Event2);
}
function getEvent3() {
    var storedEvent3 = localStorage.getItem(`3PM`);
    var Event3 = ""
    if (textBlk3.textContent === "") {
        Event3 = storedEvent3;
    } 
    textBlk3.textContent = Event3;
    console.log(Event3);
}
function getEvent4() {
    var storedEvent4 = localStorage.getItem(`4PM`);
    var Event4 = ""
    if (textBlk4.textContent === "") {
        Event4 = storedEvent4;
    } 
    textBlk4.textContent = Event4;
    console.log(Event4);
}
function getEvent5() {
    var storedEvent5 = localStorage.getItem(`5PM`);
    var Event5 = ""
    if (textBlk5.textContent === "") {
        Event5 = storedEvent5;
    } 
    textBlk5.textContent = Event5;
    console.log(Event5);
}
function getEvent6() {
    var storedEvent6 = localStorage.getItem(`6PM`);
    var Event6 = ""
    if (textBlk6.textContent === "") {
        Event6 = storedEvent6;
    } 
    textBlk6.textContent = Event6;
    console.log(Event6);
}

console.log(currentTime);

// if-statements for the time indicators
if (currentTime === `9AM`) {
    textBlk5.classList.add(`alert-success`)
    textBlk9.classList.add(`alert-danger`)
    textBlk10.classList.add(`alert-success`)
    textBlk11.classList.add(`alert-success`)
    textBlk12.classList.add(`alert-success`)
    textBlk1.classList.add(`alert-success`)
    textBlk2.classList.add(`alert-success`)
    textBlk3.classList.add(`alert-success`)
    textBlk4.classList.add(`alert-success`)
    textBlk6.classList.add(`alert-success`)
} if (currentTime === `10AM`) {
    textBlk5.classList.add(`alert-success`)
    textBlk9.classList.add(`alert-dark`)
    textBlk10.classList.add(`alert-danger`)
    textBlk11.classList.add(`alert-success`)
    textBlk12.classList.add(`alert-success`)
    textBlk1.classList.add(`alert-success`)
    textBlk2.classList.add(`alert-success`)
    textBlk3.classList.add(`alert-success`)
    textBlk4.classList.add(`alert-success`)
    textBlk6.classList.add(`alert-success`)
} if (currentTime === `11AM`) {
    textBlk5.classList.add(`alert-success`)
    textBlk9.classList.add(`alert-dark`)
    textBlk10.classList.add(`alert-dark`)
    textBlk11.classList.add(`alert-danger`)
    textBlk12.classList.add(`alert-success`)
    textBlk1.classList.add(`alert-success`)
    textBlk2.classList.add(`alert-success`)
    textBlk3.classList.add(`alert-success`)
    textBlk4.classList.add(`alert-success`)
    textBlk6.classList.add(`alert-success`)
} if (currentTime === `12PM`) {
    textBlk5.classList.add(`alert-success`)
    textBlk9.classList.add(`alert-dark`)
    textBlk10.classList.add(`alert-dark`)
    textBlk11.classList.add(`alert-dark`)
    textBlk12.classList.add(`alert-danger`)
    textBlk1.classList.add(`alert-success`)
    textBlk2.classList.add(`alert-success`)
    textBlk3.classList.add(`alert-success`)
    textBlk4.classList.add(`alert-success`)
    textBlk6.classList.add(`alert-success`)
} if (currentTime === `1PM`) {
    textBlk5.classList.add(`alert-success`)
    textBlk9.classList.add(`alert-dark`)
    textBlk10.classList.add(`alert-dark`)
    textBlk11.classList.add(`alert-dark`)
    textBlk12.classList.add(`alert-dark`)
    textBlk1.classList.add(`alert-danger`)
    textBlk2.classList.add(`alert-success`)
    textBlk3.classList.add(`alert-success`)
    textBlk4.classList.add(`alert-success`)
    textBlk6.classList.add(`alert-success`)
} if (currentTime === `2PM`) {
    textBlk5.classList.add(`alert-success`)
    textBlk9.classList.add(`alert-dark`)
    textBlk10.classList.add(`alert-dark`)
    textBlk11.classList.add(`alert-dark`)
    textBlk12.classList.add(`alert-dark`)
    textBlk1.classList.add(`alert-dark`)
    textBlk2.classList.add(`alert-danger`)
    textBlk3.classList.add(`alert-success`)
    textBlk4.classList.add(`alert-success`)
    textBlk6.classList.add(`alert-success`)
} if (currentTime === `3PM`) {
    textBlk5.classList.add(`alert-success`)
    textBlk9.classList.add(`alert-dark`)
    textBlk10.classList.add(`alert-dark`)
    textBlk11.classList.add(`alert-dark`)
    textBlk12.classList.add(`alert-dark`)
    textBlk1.classList.add(`alert-dark`)
    textBlk2.classList.add(`alert-dark`)
    textBlk3.classList.add(`alert-danger`)
    textBlk4.classList.add(`alert-success`)
    textBlk6.classList.add(`alert-success`)
} if (currentTime === `4PM`) {
    textBlk5.classList.add(`alert-success`)
    textBlk9.classList.add(`alert-dark`)
    textBlk10.classList.add(`alert-dark`)
    textBlk11.classList.add(`alert-dark`)
    textBlk12.classList.add(`alert-dark`)
    textBlk1.classList.add(`alert-dark`)
    textBlk2.classList.add(`alert-dark`)
    textBlk3.classList.add(`alert-dark`)
    textBlk4.classList.add(`alert-danger`)
    textBlk6.classList.add(`alert-success`)
} if (currentTime === `5PM`) {
    textBlk5.classList.add(`alert-danger`)
    textBlk9.classList.add(`alert-dark`)
    textBlk10.classList.add(`alert-dark`)
    textBlk11.classList.add(`alert-dark`)
    textBlk12.classList.add(`alert-dark`)
    textBlk1.classList.add(`alert-dark`)
    textBlk2.classList.add(`alert-dark`)
    textBlk3.classList.add(`alert-dark`)
    textBlk4.classList.add(`alert-dark`)
    textBlk6.classList.add(`alert-success`)
} if (currentTime === `6PM`) {
    textBlk5.classList.add(`alert-dark`)
    textBlk9.classList.add(`alert-dark`)
    textBlk10.classList.add(`alert-dark`)
    textBlk11.classList.add(`alert-dark`)
    textBlk12.classList.add(`alert-dark`)
    textBlk1.classList.add(`alert-dark`)
    textBlk2.classList.add(`alert-dark`)
    textBlk3.classList.add(`alert-dark`)
    textBlk4.classList.add(`alert-dark`)
    textBlk6.classList.add(`alert-danger`)
};

// calls upon call the getEvent functions 
getEvent9();
getEvent10();
getEvent11();
getEvent12();
getEvent1();
getEvent2();
getEvent3();
getEvent4();
getEvent5();
getEvent6();