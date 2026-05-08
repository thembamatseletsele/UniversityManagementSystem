document.getElementById("registrationForm").addEventListener("submit", function(e){

e.preventDefault();

let sem1 = document.querySelectorAll('input[name="sem1"]:checked').length;
let sem2 = document.querySelectorAll('input[name="sem2"]:checked').length;

if(sem1 < 4){
alert("Select at least 4 First Semester modules");
return;
}

if(sem2 < 4){
alert("Select at least 4 Second Semester modules");
return;
}

let studentData = {

fullName: document.getElementById("fullName").value,
email: document.getElementById("email").value,
studentId: document.getElementById("studentId").value,
campus: document.getElementById("campus").value,
course: document.getElementById("course").value,

gender: document.getElementById("gender").value,
dob: document.getElementById("dob").value,
education: document.getElementById("education").value,

company: document.getElementById("company").value,
jobTitle: document.getElementById("jobTitle").value,
department: document.getElementById("department").value

};

localStorage.setItem("studentProfile", JSON.stringify(studentData));

alert("Registration successful!");

window.location.href = "Profile.html";

});