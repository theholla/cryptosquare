describe('getArray', function() {
  it("is the user input without nonword characters", function() {
    expect(getArray("It's party time")).to.eql(["I", "t", "s", "p", "a", "r", "t", "y", "t", "i", "m", "e"]);
  })
})

describe('getCryptoLength', function() {
  it("gets the length of each encrypted string", function() {
    expect(getCryptoLength(["I", "t", "s", "p", "a", "r", "t", "y", "t", "i", "m", "e"])).to.equal(4);
  })
})

// describe('makeCryptoArrays', function() {
//   it("makes the appropriate number of arrays", function() {
//     expect(makeCryptoArrays(["I", "t", "s", "p", "a", "r", "t", "y", "t", "i", "m", "e"])).to.eql([ "I", "t", "s" ], [ "p", "a", "r" ], ["t", "y", "t"], ["i", "m", "e"]);
//   })
// })
