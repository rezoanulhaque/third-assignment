function feetToMile(feet){
    if(feet<0){
        var invalidResult = "Please enter a valid Value";
        return invalidResult;
    }
    else{
        var mile = feet/5280;
        return mile;
    }
}
//var result = feetToMile(10560);
//console.log(result);

function woodCalculator(chair, table, khat ){
    if(chair<0||table<0||khat<0){
        var invalidResult = "Please enter a valid Value";
        return invalidResult;
    }
    else{
        var chairWood = chair * 1;
        var tableWood = table * 3;
        var khatWood = khat * 5;
        var totalWood = chairWood + tableWood + khatWood;
        return totalWood;
    }
}
//var result = woodCalculator(10,20,70);
//console.log(result);

function brickCalculator(numberOfFloor){
    if(numberOfFloor<0){
        var invalidResult = "Please enter a valid Value";
        return invalidResult;
    }
    else if(numberOfFloor>20){
        var numberOfBrick = 270000 + (numberOfFloor-20) * 10000;
        return numberOfBrick;
    }
    else if(numberOfFloor>10){
        var numberOfBrick = 150000 + (numberOfFloor-10) * 12000;
        return numberOfBrick;
    }
    else{
        var numberOfBrick = numberOfFloor * 15000;
        return numberOfBrick;
    }
}
//var result = brickCalculator(23);
//console.log(result);

function tinyFriend(params){
    var len = friendName.length;
    var nameLenghtArray = [];
    if(len == 0){
        var invalidResult = "Please enter a valid Value";
        return invalidResult;
    }
    else{
        for(var i = 0; i < len; i++){
            var indivisualName = friendName [i];
            var indivisualNameLenght = indivisualName.length;
            nameLenghtArray.push(indivisualNameLenght);
        }
        var minimumLenghtName = Math.min(...nameLenghtArray);
        var indexOfName = nameLenghtArray.indexOf(minimumLenghtName);
        var printName = (friendName[indexOfName]);
        return printName;
    }
}
//var friendName = ['anis', 'bashar', 'hubby', 'kalam', 'bhairao', 'ohago', 'khas', 'khu'] ;
//var friendName = [];
//var result = tinyFriend(friendName);
//console.log(result);

