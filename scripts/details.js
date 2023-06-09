"use strict";

const cardoutputBody = document.getElementById("cardoutputBody");

window.onload = () => {
  const urlParams = new URLSearchParams(location.search);
  let id = -1;
  if (urlParams.has("courseid")) {
    id = urlParams.get("courseid");
    console.log(id);

    let URLCourse = "http://localhost:8081/api/courses/" + id;
    fetch(URLCourse)
      .then((response) => response.json())
      .then((course) => {
        DetailsforCard(course);
      });
  }
};

function DetailsforCard(course) {
    // Create elements for displaying course details
    const heading = document.createElement("h5");
    heading.className = "card-title";
    heading.textContent = `Course ID: ${course.id}`;
    cardoutputBody.appendChild(heading);
  
    const department = document.createElement("p");
    department.className = "card-text";
    department.textContent = `Department: ${course.dept}`;
    cardoutputBody.appendChild(department);
  
    const courseNumber = document.createElement("p");
    courseNumber.className = "card-text";
    courseNumber.textContent = `Course Number: ${course.courseNum}`;
    cardoutputBody.appendChild(courseNumber);
  
    const instructor = document.createElement("p");
    instructor.className = "card-text";
    instructor.textContent = `Instructor: ${course.instructor}`;
    cardoutputBody.appendChild(instructor);
  
    const startDate = document.createElement("p");
    startDate.className = "card-text";
    startDate.textContent = `Start Date: ${course.startDate}`;
    cardoutputBody.appendChild(startDate);
  
    const numOfDays = document.createElement("p");
    numOfDays.className = "card-text";
    numOfDays.textContent = `Number of Days: ${course.numDays}`;
    cardoutputBody.appendChild(numOfDays);
  
    // Append the elements to the card output body
  }
  
  
  
  
  
  
  