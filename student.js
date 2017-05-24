function Student (lastName, firstName, email){
    this.lastName = lastName;
    this.firstName = firstName;
    this.email = email;
    this.major = "Undecided";
    this.photo = "";
    this.grades = [];
}

Student.prototype = {
    constructor: Student,
    addGrade: function (grade){
        this.grades.push(grade);
    },
    totalGrade: function (){
        var sum = 0;
        for (var i = 0; i < this.grades.length; i++) {
            sum += this.grades[i];
        }

        if (this.grades.length == 0){
            return 100.00;
        } else {
            return (sum / this.grades.length) * 100;
        }
    },
    changeEmail: function (newEmail){
        this.email = newEmail;
    },
    fullName: function () {
        return this.lastName + ", " + this.firstName;
    }
}

/* create new student object */
var student1 = new Student("Mathews", "Katie", "email@email.com");
