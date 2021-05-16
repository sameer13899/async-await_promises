//pretend that response is coming from server
var students = [
  { name: 'dhashree', subject: 'fullstack dev' },
  { name: 'Aditya', subject: 'frontend dev' },
  { name: 'Bhanu', subject: 'backend dev' },
]

// enrollStudent() => enroll a new student.
// getStudents() => print all my students.

function enrollStudent(student, callback) {
  //set time out is nothing but a way to fake an api call//
  setTimeout(function () {
    students.push(student)
    console.log('sucessfully enrolled the student')
    callback()
  }, 5000)
}

function getStudents() {
  setTimeout(function () {
    console.log(students)
    console.log('sucessfully fetched all the students details')
  }, 1000)
}

let newStudent = { name: 'sherin', subject: 'java' }
enrollStudent(newStudent, getStudents)
// getStudents()
