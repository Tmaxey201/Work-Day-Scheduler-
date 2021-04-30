var nowHour = parseInt(moment().format("H"));
var saveButton = $('.row').children('.btn');


// added current day into header 
$("#today").text(moment().format("dddd, MMMM YYYY"))



// create function with an on click button event that saves content within text box to local storage and then inputs saved content to text box when page is reloaded.
saveButton.click(function(event) {
    event.preventDefault();
    var inputTxt = $(this.parentNode).children('.content').attr('id');
    var inputToStorage = $(this.parentNode).children('.content').val();
    localStorage.setItem(inputTxt, inputToStorage);
})
