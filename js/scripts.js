// var arrayLength = function(input) {
//   var length = input.replace(/\s+/g, '').split('').length;
//   return length;
// }


var getArray = function(input) {
  var charArray = input.replace(/\s+/g, '').split('');
  return charArray;
}

var getLength = function(charArray) {
  var arrayLength = charArray.length;
  return arrayLength;
}
