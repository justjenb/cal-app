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
  
  $('.saveBtn').on('click', function(event){

    var rowId = event.currentTarget.parentNode.id;
    console.log(rowId);
    var rowTextContentArea = $('#' + rowId).find("textarea");
    console.log(rowTextContentArea);
    var rowTextContent = rowTextContentArea.val();
    console.log(rowTextContent);

  })

  function changeEventColor() {

    const timeBlocks = $( "div" ).filter(".time-block");
    var currentHour = dayjs().format('H');

    for (var i = 0; i < timeBlocks.length; i += 1) {
      var timeBlock = timeBlocks[i];
      var id = timeBlock.id;
      var idHourMatch = id.match(/[0-9]+/);
      var idHour = parseInt(idHourMatch, 10);
  
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







  function displayTime() {
    var dateDisplayEl = $('#currentDay');
    var rightNow = dayjs().format('dddd, MMM DD, YYYY [at] hh:mm:ss a');
    dateDisplayEl.text(rightNow);
  } 
  displayTime();
  setInterval(displayTime, 1000);

  });
});
