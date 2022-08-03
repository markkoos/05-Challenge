// global
var currentDay = document.getElementById(`currentDay`);

// function to display date and time
function createTime() {
    dateTime = setInterval(function() {
        currentDay.textContent = moment().format("dddd, MMMM Do YYYY");
    }, 1000 );
}

// calls upon the function to display date and time
createTime();

