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

// create a for loop with jquery that will pull from local storage for each row and apply it after page is reloaded
for (var index = 1; index < 10; index++) {
    $(`#text${index}`).text(localStorage.getItem(`text${index}`));
    
}