var getArray = function(input) {
  var charArray = input.replace(/\W+/g, "").split('');
  return charArray;
}

var getLength = function(charArray) {
  var arrayLength = charArray.length;
  return arrayLength;
}
