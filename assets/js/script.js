// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

$(window).on("load",function(e) {
$(function () {

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  var saveBtn = $('.saveBtn');
  saveBtn.on('click', '.saveBtn', saveCalendarText);

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  function changeEventColor() {

    const timeBlocks = $( "div" ).filter(".time-block");
    var currentHour = dayjs().format('H');

    for (var i = 0; i < timeBlocks.length; i += 1) {
      var timeBlock = timeBlocks[i];
      var id = timeBlock.id;
      var idHourMatch = id.match(/[0-9]+/);
      var idHour = parseInt(idHourMatch, 10);
      console.log("id hour " + idHour);
  
      if (idHour < currentHour) {
        $(timeBlock).addClass('past');
      } else if (idHour == currentHour) {
        $(timeBlock).addClass('present');
      } else if (idHour > currentHour) {
        $(timeBlock).addClass('future');
      }
    }
  }
  
  changeEventColor();

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

  function saveCalendarText(event) {
    console.log("something");
  }

  // TODO: Add code to display the current date in the header of the page.
  function displayTime() {
    var dateDisplayEl = $('#currentDay');
    var rightNow = dayjs().format('dddd, MMM DD, YYYY [at] hh:mm:ss a');
    dateDisplayEl.text(rightNow);
  } 
  displayTime();
  setInterval(displayTime, 1000);

});
});
