
// Type annotations aren't necessary when Typescript can infer
let student = "John";
let grade1 = 8;
let grade2 = 9;
// When it can't, it is recommended to explicitly define the type
let isApproved : boolean;

// Type annotation for function arguments

function average(num1:number, num2:number){
    return (num1 + num2) / 2;
}

let grades = ["8", "7", "9", "11", "6"];

function finalGrade(grades : string[]) {
    let sum = 0;
    grades.forEach(grade => sum += parseFloat(grade));

    return sum / grades.length;

}

type Student = {
    name: string,
    grades: string[],
    isApproved?: boolean
};


function printStudent(student : Student) {
    console.log("Name: ", student.name);
    console.log("Final grade: ", finalGrade(student.grades));
    console.log("Is Approved: ", student.isApproved);
}

let newStudent = {
    name: "John",
    grades: ["8", "7"]
}


let students : Student[] = [
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
    }
];

students.forEach(student => {
    printStudent(student);
});
