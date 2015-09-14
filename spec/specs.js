describe('arraySize', function() { //first arg is a string and the name of the function to be built
  it("has the same number of characters as the user input string", function() { //first arg is string descrip of behavior
    expect(arraySize("It's party time")).to.equal(15);
  });

});
