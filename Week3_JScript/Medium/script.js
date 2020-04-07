// Medium Challenge

function cutPizzaSlices(slices) {
    return function(sharePizza) {
        return "Each person gets " + (slices / sharePizza).toFixed(2) + " slices of pizza"
    }
}



var sharePizza = cutPizzaSlices(8);
console.log(sharePizza(2));                                                                                                                                                                    
  // prints "Each person gets 4.00 slices of pizza"
console.log(sharePizza(3)); 
  // prints "Each person gets 2.67 slices of pizza"
