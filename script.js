var description = {
    name: "Igor",
    surname: "Torgaiev",
    interst: "programming",
    age: 29,
    status: "single",
    hisStatus: function() {
        return this.name + " " + this.surname + " is still " + this.status;
    }
}
document.getElementById("demo").innerHTML = description.hisStatus();

// This separately

var word = this;
document.getElementById('demo1').innerHTML = word;

// Object Method Binding.

var description = {
    name: "Gary",
    surname: "Miller",
    age: 31,
    interest: "dancing",
    theFunction: function() {
        return this;
    }
}
document.getElementById("demo2").innerHTML = description.theFunction();

var description = {
    name: "James",
    surname: "Hanson",
    age: 30,
    interest: "football",
    hisInterest: function() {
        return this.name + " " + this.surname + " is interested in " + this.interest;
    }
};
document.getElementById("demo3").innerHTML = description.hisInterest();