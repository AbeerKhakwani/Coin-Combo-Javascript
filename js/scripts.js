var coinCombination = function(input){

    var returnArray=[];
    //input= input.toFixed(2);


    input = input * 100;

    if ((input != 0)&& (input > 999)){
        var tenDollar = Math.floor(input/1000);
        if(tenDollar > 1){
            returnArray.push(tenDollar + " Tens");
        }
        else{
            returnArray.push(tenDollar + " Ten");
        }

        input = input % 1000;
        console.log(input);
    }

    if ((input != 0)&& (input > 499)){
        var fiveDollar = Math.floor(input/500);
        if(fiveDollar > 1){
            returnArray.push(fiveDollar + " Fives");
        }
        else{
            returnArray.push(fiveDollar + " Five");
        }

        input = input % 500;
        console.log(input);
    }

    if ((input != 0)&& (input > 99)){
        var dollar = Math.floor(input/100);
        if(dollar > 1){
            returnArray.push(dollar + " Dollars");
        }
        else{
            returnArray.push(dollar + " Dollar");
        }

        input = input % 100;
        console.log(input);
    }

    if ((input != 0)&& (input > 24)){
        var quarter = Math.floor(input/25);
        if(quarter > 1){
            returnArray.push(quarter + " Quarters");
        }
        else{
            returnArray.push(quarter + " Quarter");
        }

        input = input % 25;

    }

    if ((input != 0)&& (input > 9)) {
        console.log(input);
        var dime = Math.floor(input/10);
        if(dime > 1){
            returnArray.push(dime + " Dimes");
        }
        else{
            returnArray.push(dime + " Dime");
        }


        input = input % 10;

    }

    if ((input != 0)&&(input > 4)){
        var nickel = Math.floor(input/5);
        if(nickel > 1){
            returnArray.push(nickel + " Nickels");
        }
        else{
            returnArray.push(nickel + " Nickel");
        }
        input = input % 5;

    }
    input = Math.floor(input);
    if ((input != 0)&&(input < 5)){
        if(input > 1){
            returnArray.push(input + " Pennies");
        }
        else{
            returnArray.push(input + " Penny");
        }

    }



    var returnString = returnArray.join(" ");
    console.log(returnString);
    return returnString;


}
