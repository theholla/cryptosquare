function getArray(input) {
  var charArray = input.replace(/\W+/g, "").split('');
  return charArray;
}

function getCryptoLength(charArray) {
  var arrayLength = charArray.length;
  var squareRoot = Math.sqrt(arrayLength);
  var cryptoLength = Math.ceil(squareRoot);
  return cryptoLength;
}

// function makeCryptoArrays(charArray, squareRoot) {
//   while(charArray.length) {
//     var cryptoArrays[] = charArray.splice(0, squareRoot);
//     return cryptoArrays[];
//   }
// }
