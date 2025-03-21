// Collect user information 
let classInfo = {
    subjectTitle: prompt("Enter Subject Title:"),      // subject title
    classSchedule: prompt("Enter Class Schedule (Time, Days):"), // class schedule
    classroom: prompt("Enter Classroom:"),            // classroom number
    classInstructor: prompt("Enter Class Instructor:"), // instructor's name
    studentName: prompt("Enter Student Name:")        // student's name
};

// Log the collected information 
console.log(`${classInfo.studentName} is currently enrolled in ${classInfo.subjectTitle} with a class schedule of ${classInfo.classSchedule} at room ${classInfo.classroom}. The instructor for the subject is ${classInfo.classInstructor}.`);
