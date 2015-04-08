describe('coinCombination', function() {
    // it("Takes in value of 1 and return penny", function() {
    //     expect(CoinCombination(1)).to.equal("penny");
    // });
    // it("Takes in value of 5 and returns nickel", function() {
    //     expect(CoinCombination(5)).to.equal("nickel");
    // });
    it("Takes in value of 50 and return two quarters", function(){
        expect(coinCombination(.50)).to.equal("2 Quarters");
    });

    it("Takes in value of 55 and return two quarters 1 nickel", function(){
        expect(coinCombination(.55)).to.equal("2 Quarters 1 Nickel");
    });

    it("Takes in value of 60 and return two quarters 1 dime", function(){
        expect(coinCombination(.60)).to.equal("2 Quarters 1 Dime");
    });

    it("Takes in value of 68 and returns 2 Quarter 1 Dime 1 Nickel 3 Pennies", function(){
        expect(coinCombination(.68)).to.equal("2 Quarters 1 Dime 1 Nickel 3 Pennies");
    });

    it("Takes in value of 128 and return  5 quarters 3 pennies", function(){
        expect(coinCombination(1.28)).to.equal("1 Dollar 1 Quarter 3 Pennies");
    });
    it("Takes in value of 4.53 and returns 18 Quarter 3 Penny", function(){
        expect(coinCombination(4.53)).to.equal("4 Dollars 2 Quarters 3 Pennies");
    });

    it("Takes in value of 5 and return one nickel", function(){
        expect(coinCombination(.05)).to.equal("1 Nickel");
    });

    it("Takes in value of 10 and return one dime", function(){
        expect(coinCombination(.10)).to.equal("1 Dime");
    });

    it("Takes in value of 30 and return one Quarter 1 nickel", function(){
        expect(coinCombination(.30)).to.equal("1 Quarter 1 Nickel");
    });

    it("Takes in value of 565 and return one Quarter nickel", function(){
        expect(coinCombination(5.65)).to.equal("1 Five 2 Quarters 1 Dime 1 Nickel");
    });

    it("Takes in value of 15.65 and return one Quarter nickel", function(){
        expect(coinCombination(30.65)).to.equal("3 Tens 2 Quarters 1 Dime 1 Nickel");
    });


});
