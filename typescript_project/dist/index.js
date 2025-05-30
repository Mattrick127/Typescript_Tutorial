// Type annotations aren't necessary when Typescript can infer
let student = "John";
let grade1 = 8;
let grade2 = 9;
// When it can't, it is recommended to explicitly define the type
let isApproved;
// Type annotation for function arguments
function average(num1, num2) {
    return (num1 + num2) / 2;
}
let grades = ["8", "7", "9", "11", "6"];
function finalGrade(grades) {
    let sum = 0;
    grades.forEach(grade => sum += parseFloat(grade));
    return sum / grades.length;
}
;
;
function printStudent(student) {
    console.log("Name: ", student.name);
    console.log("Final grade: ", finalGrade(student.grades));
    console.log("Is Approved: ", student.isApproved);
}
let newStudent = {
    name: "John",
    grades: ["8", "7"]
};
let students = [
    {
        name: "John",
        grades: ["8", "4"],
        isApproved: true
    },
    {
        name: "Joan",
        grades: ["2", "3"],
        isApproved: false
    },
    {
        name: "Jane",
        grades: ["10", "9"],
        isApproved: true
    }
];
students.forEach(student => {
    printStudent(student);
});
function buttonStyle(size) {
    let style;
    if (size == "small") {
        style = {
            height: "60px",
            width: "100px"
        };
    }
    else {
        style = {
            height: "80px",
            width: "140px"
        };
    }
    return style;
}
console.log(buttonStyle("large"));
