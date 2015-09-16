describe('getMessage', function() {
  it("is the user input without spaces or nonword characters", function() {
    expect(getMessage("It's party time")).to.eql("itspartytime");
  })
})

describe('getWidth', function() {
  it("gets the number of columns based on the square root", function() {
    expect(getWidth("itspartytime")).to.equal(4);
  })
})

describe('getRows', function() {
  it("turns the message into an array of strings, each no longer than the column amount", function() {
    expect(getRows("itspartytime", 4)).to.eql(["itsp", "arty", "time"]);
  })
})
