describe('coinCombination', function() {
    // it("Takes in value of 1 and return penny", function() {
    //     expect(CoinCombination(1)).to.equal("penny");
    // });
    // it("Takes in value of 5 and returns nickel", function() {
    //     expect(CoinCombination(5)).to.equal("nickel");
    // });
    it("Takes in value of 50 and return two quarters", function(){
        expect(coinCombination(50)).to.equal("2 Quarter");
    });

    it("Takes in value of 55 and return two quarters", function(){
        expect(coinCombination(55)).to.equal("2 Quarter 1 Nickel");
    });

    it("Takes in value of 60 and return two quarters", function(){
        expect(coinCombination(60)).to.equal("2 Quarter 1 Dime");
    });

    it("Takes in value of 68 and return two quarters", function(){
        expect(coinCombination(68)).to.equal("2 Quarter 1 Dime 1 Nickel 3 Penny");
    });

    it("Takes in value of 128 and return two quarters", function(){
        expect(coinCombination(128)).to.equal("5 Quarter 3 Penny");
    });
    it("Takes in value of 4 and returns 4 pennies", function(){
        expect(coinCombination(4)).to.equal("4 Penny");
    });


});
