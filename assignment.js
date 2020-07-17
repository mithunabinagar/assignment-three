// feetToMile start

function feetToMile(feet){
    var mile = feet / 5280;
    return mile;
}
// console.log(mileResult);

// feetToMile end


// woodCalculator Start

function woodCalculator(chair, table, bed){
    var chairCount = chair * 1;
    var tableCount = table * 3;
    var bedCount = bed * 5;
    var totalWood = chairCount + tableCount + bedCount;
    return totalWood;
}
// var woodResult = woodCalculator(6, 3, 2);
// console.log(woodResult);

// woodCalculator end


// brickCalculator start

function brickCalculator(floor){
    const  brickPerFeet = 1000;
    var firstTenFloor = 10;
    var secondTenFloor = 10;
    
    if(floor > 20){
        var a = floor - 20;
        var totalBricks = (a * 10 * 1000) + (firstTenFloor * 15 * 1000) + (secondTenFloor * 12 * 1000);
        return totalBricks;
    }
    else if(floor > 10 && floor <= 20){
        var b = floor - secondTenFloor;
        var totalBricks = (firstTenFloor * 15 * 1000) + (b * 12 * 1000);
        return totalBricks;
    }
    else{
        floorHight = 15;
        var totalBricks = brickPerFeet * floorHight * floor;
        return totalBricks;
    }
}

// brickCalculator end

        
// tinyFriend start

function tinyFriend(names){
    var smallName = names[0].length;
    for(var i = 0; i < names.length; i++){
        var currentName = names[i].length;
        if(currentName < smallName){
            smallName = currentName;
        }
    }
    return smallName;
}
var smallestName = tinyFriend(["arif", "adnan", "arnob", "dev", "jisu", "jit", "ronjit"]);
console.log(smallestName);