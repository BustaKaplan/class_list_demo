$(document).ready(function(){

    // instance of the student object/class
    var students = [
        new Student("Jones", "Skylar", "skylarM@school.edu"),
        new Student("Mathews", "Charlie", "Charlimander@school.edu"),
    ];

    for (var i = 0; i < students.length; i++) {
        var student = students[i];

        var studentHtml = '<div id="' + i + '" class="student">' +
            '<div>' + student.fullName() + '</div>' +
            '<div>' + student.email +  '</div>' +
            '<div>' + student.major + '</div>' +
            '<div>Total Grade: ' + student.totalGrade() + '</div>' +
            '<input type="number"></input>' +
            '<button>Add Grade</button>' +
        '</div>';

        $('.students').append(studentHtml);
    }

    /* Add Grade */
    $('body').on('click', 'button', function () {

        // get grade entered
        var gradeInput = $(this).closest('.student').find('input');
        var grade = gradeInput.val();

        // update student object
        var index = $(this).closest('.student').attr('id');
        console.log(index);
        var student = students[index];
        student.addGrade(grade);
        console.log(student.grades);
    });

});
