// Easy Challenge

function exercise(sports) {
    return function () {
        return 'Todays exercise: ' + sports 
    } 
}

var run = exercise('running');
console.log(run());
var swim = exercise('swimming');
console.log(swim());

