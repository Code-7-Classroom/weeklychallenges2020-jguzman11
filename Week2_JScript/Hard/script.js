var tomHeight = 9
var tomWeight = 8
//convert cm to in - formula is divide by 2.54 = 1 inch
var jerryHeight = 10 / 2.54
var jerryWeight = 45 / 454

var jerryBMI = (jerryWeight / (jerryHeight * jerryHeight))
var tomBMI = (tomWeight / (tomHeight * tomHeight))
var tomHealter = tomBMI > jerryBMI
if(tomHealter) {
    console.log("Is Toms BMI higher than Jerrys" + tomHealter)
}


// var tom, jerry, tomBMI, jerryBMI;
// tom = [9, 8];
// jerry = [3.937010, .099208]
// jerryBMI = (jerry[1]/(jerry[0]*jerry[0]));
// tomBMI = (tom[1]/(tom[0]*tom[0]));

// tomBMI<jerryBMI == false

// if(!false){
//     console.log('Is Toms BMI higher than Jerrys? ' + false)
// }