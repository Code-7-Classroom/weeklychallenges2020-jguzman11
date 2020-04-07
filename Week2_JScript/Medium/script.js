var months = ['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec'];
var numberInputed = parseInt(prompt("enter a number"));
//if number is greater than 12 and less 1 retunrn alert
if(numberInputed > 12 || numberInputed < 1 || isNaN(numberInputed)){
    alert("Alert the user if they enter an invalid numbe")
    return
}


console.log(months[numberInputed])

