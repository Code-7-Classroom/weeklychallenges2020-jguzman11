/////////////// Function constructor (object / blueprint) - a pattern we want repeated..

var Person = function(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.exercise = function() {
        return "Running is fun! - said no one ever"
    }
    this.fetchJob = function() {
        return `${this.name} is a ${this.job}`
    }
}

//blueprint for our programmer
var Programmer = function(name, age, job, languages) {
    Person.call(this, name, age, job);
    //has to be an array
    this.languages = languages;
    this.busy = true;
    this.completeTask = function() {
        this.busy = false;        
    }

    this.acceptNewTask = function() {
        this.busy = true;
    }

    this.offerNewTask = function() {
        if(this.busy) {
            return `${this.name} cant accept any new tasks right now.`
        }
        return `${this.name} would love to take on a new responsibility.`
    }

    //this.languages must be an array for this to work 
    this.learnLanguage = function(language) {   
        //example:  this.languages = ["spanish", "english", "french", "chinese"]
        //and we want to add 1 more, so we are gonna push it to our list  
        this.languages.push(language) 
    }
    this.listLanguage = function() {
        console.log(this.languages)
        for(var i = 0; i < this.languages.length; i++) {
        
            console.log(this.languages[i])
        }
        return
    }
}
var jordan = new Programmer('jordan', 1998, 'dev', ["spanish", "english", "french", "chinese"]);

console.log(jordan.exercise());
console.log(jordan.fetchJob());
// console.log(jordan.completeTask());
console.log(jordan.offerNewTask())
//jordan.learnLanguage('chicken')

jordan.listLanguage()


/////////////////we just created a new Object - (instantiation)//////////////











