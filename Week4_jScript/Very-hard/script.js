function coinAmount(coinsArr, target) {
    //we use sort method to make sure our number go in the order of least to greatest
   //array function keep them inorder (negative,zero,positive)
    coinsArr.sort((a,b) => a-b).reverse();
    var count = 0;
    for(var i = 0; i < coinsArr.length; i++)
    while(target >= coinsArr[i]) {
        target -= coinsArr[i];
        count++;
    }
    if(target != 0) {
        return -1;
    }
    return count;
}
 


var input = parseInt(prompt('Change for?'))
console.log(coinAmount([1,5,10,25], input));


// Find highest value coin

//Until we check all coins 
    //Subtract highest value coin that fits from amount
    // Check if new amount is more than highest coin
        // IF it is, subtract highest value coin again
        //IF it isn't, check the next highest value coin
