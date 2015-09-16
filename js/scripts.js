/*  Transforms user input into a string with no spaces or special characters  */

function getMessage(userInput) {
  var message = userInput.toLowerCase().replace(/\W+/g, "");
  return message;
}

/*  Finds the square root of the length of the message string and rounds up.
    This is the ideal width of the cryptosquare.                             */

function getColumnAmount(message) {
  var messageLength = message.length;
  var columns = Math.ceil(Math.sqrt(messageLength));
  return columns;
}

/*  Turns the message into an array of strings, each no longer than the
    column amount                                                           */

function getRows(message, columns) {
  var rows = [];
  for (var i = 0; i < message.length; i ++) {
    if (i % columns == 0 && i != 0)
    rows.push(message.substring(i - columns, i));
    if (i == message.length - 1)
    rows.push(message.substring(i - (i % columns), i+1));
  }
  return rows;
}
