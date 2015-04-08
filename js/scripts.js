var coinCombination = function(input){

    var returnArray=[];

    if (input != 0){
        var quarter = parseInt(input/25);
        returnArray.push(quarter + " Quarter");
        input = input % 25;
        console.log(input);
    }

    if ((input != 0)&& (input > 9)) {
        var dime = parseInt(input/10);
        returnArray.push(dime + " Dime");
        input = input % 10;
        console.log(input);
    }

    if ((input != 0)&&(input > 4)){
        var nickel = parseInt(input/5);
        returnArray.push(nickel + " Nickel");
        input = input % 5;
        console.log(input);
    }

    if (input != 0){
        returnArray.push(input + " Penny");
    }



    var returnString = returnArray.join(" ");
    console.log(returnString);
    return returnString;


}
