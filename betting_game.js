arrayOfLight = function(x){
    
    var someArray = []
    for(i=0; i < x+1; i++){
       // console.log(i);
        someArray.push(i);
    }
    //console.log(someArray);
    return someArray;
};

console.log(arrayOfLight(9));


var betAmount = prompt("Please enter your bet.");
