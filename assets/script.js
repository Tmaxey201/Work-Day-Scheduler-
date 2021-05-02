var nowHour = parseInt(moment().format("H"));
var saveButton = $('.row').children('.btn');
var rows = document.getElementsByClassName('row')

// added current day into header 
$("#today").text(moment().format("dddd, MMMM YYYY"))



// create function with an on click button event that saves content within text box to local storage and then inputs saved content to text box when page is reloaded.
saveButton.click(function(event) {
    event.preventDefault();
    var inputTxt = $(this.parentNode).children('.content').attr('id');
    var inputToStorage = $(this.parentNode).children('.content').val();
    localStorage.setItem(inputTxt, inputToStorage);
})

// create a for loop with jquery that will pull from local storage for each row and apply it after page is reloaded
for (var index = 1; index < 10; index++) {
    $(`#text${index}`).text(localStorage.getItem(`text${index}`));
    
}

// create a method of changing the color of the text box depending on the time(nowHour)



Array.from(rows).forEach(row => {           //used Array.from to create an array from all of the "row" classes
    var rowIDString = row.id,
    rowHour;                               
if (rowIDString) {
    rowHour = parseInt(rowIDString);        //used parseInt to parse a string and return it as an integer. 
}
