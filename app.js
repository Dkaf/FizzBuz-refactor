$(document).ready(function() {
  var userInput = prompt('Enter a number:');
  var userNum = parseInt(userInput);
  if (userNum < 0 || isNaN(userNum) == true || userNum % 1 != 0 ) {
    alert('please enter a positive value');
  }
  else {
    for (var i = 1; i< userNum + 1; i++) {
      if ( i%3 == 0) {
        $('ul').append('<li>fizz</li>');
      }
      else if (i%5 == 0) {
        $('ul').append('<li>buzz</li>');
      }
      else if (i%5 == 0 && i%3 == 0) {
        $('ul').append('<li>fizz buzz</li>');
      }
      else {
        $('ul').append('<li>' + i + '</li>');
      }
    }
}
})
