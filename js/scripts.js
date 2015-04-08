var coinCombination = function(input) {

        var returnArray = [];
        //input = input.toFixed(2);


        input = input * 100;

        if ((input != 0) && (input > 999)) {
            var tenDollar = Math.floor(input / 1000);
            tenDollar > 1 ? returnArray.push(tenDollar + " Tens") : returnArray.push(tenDollar + " Ten");
            input = input % 1000;
            console.log(input);
        }

        if ((input != 0) && (input > 499)) {
            var fiveDollar = Math.floor(input / 500);
            fiveDollar > 1 ? returnArray.push(fiveDollar + " Fives") : returnArray.push(fiveDollar + " Five");
            input = input % 500;
            console.log(input);
        }

        if ((input != 0) && (input > 99)) {
            var dollar = Math.floor(input / 100);
            dollar > 1 ? returnArray.push(dollar + " Dollars") : returnArray.push(dollar + " Dollar");
            input = input % 100;
            console.log(input);
        }

        if ((input != 0) && (input > 24)) {
            var quarter = Math.floor(input / 25);
            quarter > 1 ? returnArray.push(quarter + " Quarters") : returnArray.push(quarter + " Quarter");
            input = input % 25;

        }

        if ((input != 0) && (input > 9)) {
            console.log(input);
            var dime = Math.floor(input / 10);
            dime > 1 ? returnArray.push(dime + " Dimes") : returnArray.push(dime + " Dime");
            input = input % 10;

        }

        if ((input != 0) && (input > 4)) {
            var nickel = Math.floor(input / 5);
            nickel > 1 ? returnArray.push(nickel + " Nickels") : returnArray.push(nickel + " Nickel");
            input = input % 5;

        }

        input = Math.floor(input);
        if ((input != 0) && (input < 5)) {

            input > 1 ? returnArray.push(input + " Pennies") : returnArray.push(input + " Penny");

        }



        var returnString = returnArray.join(" ");
        console.log(returnString);
        return returnString;


    }
    // var multipleCombos = function(input){

// }

$(document).ready(function() {
    $("form#changeForm").submit(function(event) {
        console.log("submit happened!");
        var change = $("input#change").val();
        var result = coinCombination(change);
        $(".combo").text(result);


        event.preventDefault();




    });

});
