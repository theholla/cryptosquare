describe('getArray', function() {
  it("is the user input without nonword characters", function() {
    expect(getArray("It's party time")).to.eql("itspartytime");
  })
})

describe('getCryptoLength', function() {
  it("gets the number of columns based on the square root", function() {
    expect(getCryptoLength("itspartytime")).to.equal(4);
  })
})

describe('makeCryptoArray', function() {
  it("makes the appropriate array", function() {
    expect(makeCryptoArray("itspartytime", 4)).to.eql(["itsp", "arty", "time"]);
  })
})
