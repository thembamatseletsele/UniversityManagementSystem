document.addEventListener("DOMContentLoaded", function(){

let data = JSON.parse(localStorage.getItem("studentProfile"));

if(data){

document.getElementById("p_fullName").textContent = data.fullName;
document.getElementById("p_email").textContent = data.email;
document.getElementById("p_studentId").textContent = data.studentId;
document.getElementById("p_campus").textContent = data.campus;
document.getElementById("p_course").textContent = data.course;

document.getElementById("p_gender").textContent = data.gender;
document.getElementById("p_dob").textContent = data.dob;
document.getElementById("p_education").textContent = data.education;

document.getElementById("p_company").textContent = data.company;
document.getElementById("p_jobTitle").textContent = data.jobTitle;
document.getElementById("p_department").textContent = data.department;

}

});