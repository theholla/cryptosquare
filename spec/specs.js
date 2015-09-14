describe('getArray', function() {
  it("is the user input without spaces", function() {
    expect(getArray("It's party time")).to.eql(["I", "t", "'", "s", "p", "a"+
    "", "r", "t", "y", "t", "i", "m", "e"]);
  })
})

describe('getLength', function() { //first arg is a string and the name of the function to be built
  it("is the length of the input without spaces", function() { //first arg is string descrip of behavior
    expect(getLength(["I", "t", "'", "s", "p", "a"+
    "", "r", "t", "y", "t", "i", "m", "e"])).to.equal(13);
  });

});
