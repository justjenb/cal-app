// save button event listener
$(".saveBtn").on("click", function (event) {
  var rowId = event.currentTarget.parentNode.id;
  var rowTextContentArea = $("#" + rowId).find("textarea");
  var rowTextContent = rowTextContentArea.val();
  var newEvent = {
    id: rowId,
    text: rowTextContent,
  };
  var calEvents = readEventsFromStorage();
  calEvents.push(newEvent);
  localStorage.setItem("calEvents", JSON.stringify(calEvents));
});

// clears all data from the calendar
$("#clearCalendarBtn").on("click", function () {
  localStorage.removeItem("calEvents");
  $(".time-block textarea").val("");
});

// populates all the events saved in storage
function populateEvents() {
  var calEvents = readEventsFromStorage();

  for (var i = 0; i < calEvents.length; i += 1) {
    var event = calEvents[i];
    var rowId = event.id;
    var rowTextContent = event.text;
    $("#" + rowId)
      .find("textarea")
      .val(rowTextContent);
  }
}

// returns an empty array if there are no events saved
function readEventsFromStorage() {
  var storedCalEvents = localStorage.getItem("calEvents");
  if (storedCalEvents) {
    return JSON.parse(storedCalEvents);
  } else {
    return [];
  }
}

// changes events color based on the id hour match with dayJS
function changeEventColor() {
  const timeBlocks = $("div").filter(".time-block");
  var currentHour = dayjs().format("H");

  for (var i = 0; i < timeBlocks.length; i += 1) {
    var timeBlock = timeBlocks[i];
    var id = timeBlock.id;
    var idHourMatch = id.match(/[0-9]+/);
    var idHour = parseInt(idHourMatch, 10);

    if (idHour < currentHour) {
      $(timeBlock).addClass("past");
    } else if (idHour == currentHour) {
      $(timeBlock).addClass("present");
    } else if (idHour > currentHour) {
      $(timeBlock).addClass("future");
    }
  }
}

// display current date/time
function displayTime() {
  var dateDisplayEl = $("#currentDay");
  var rightNow = dayjs().format("dddd, MMM DD, YYYY [at] hh:mm:ss a");
  dateDisplayEl.text(rightNow);
}

// when document is ready, run these functions
$(document).ready(function () {
  displayTime();
  setInterval(displayTime, 1000);
  changeEventColor();
  populateEvents();
});
