function getArray(userInput) {
  var input = userInput.toLowerCase().replace(/\W+/g, "");
  return input;
}

function getCryptoLength(input) {
  var inputLength = input.length;
  var squareRoot = Math.sqrt(inputLength);
  var cryptoLength = Math.ceil(squareRoot);
  return cryptoLength;
}

function makeCryptoArray(input, cryptoLength) {
  var columns = [];
  for (var i = 0; i < input.length; i ++) {
    if (i % cryptoLength == 0 && i != 0)
    columns.push(input.substring(i - cryptoLength, i));
    if (i == input.length - 1)
    columns.push(input.substring(i - (i % cryptoLength), i+1));
  }
  return columns;
}
