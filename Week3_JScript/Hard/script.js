// HARD CHALLENGE

var Person = (function() {
    var ssn = "social security"
    function Person(name) {
        this.name = name;
    }
    Person.prototype.getName = function() {
        return this.name;
    };
    return Person;
}());

var newUser = new Person('Jordan');
console.log(newUser.getName())

































