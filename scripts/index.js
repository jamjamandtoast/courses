"use strict";

const TableForCourses = document.getElementById("TableForCourses");

window.onload = () => {
  coursesTableView();
};

function coursesTableView() {
  fetch("http://localhost:8081/api/courses/")
    .then(response => response.json())
    .then(courses => {
      courses.forEach((course, index) => {
        const row = document.createElement("tr");

        const indexCell = document.createElement("th");
        indexCell.setAttribute("scope", "row");
        indexCell.textContent = index + 1;
        row.appendChild(indexCell);

        const depertCell = document.createElement("th");
        depertCell.textContent = course.dept;
        row.appendChild(depertCell);

        const NumOfCourse = document.createElement("th");
        NumOfCourse.textContent = course.courseNum;
        row.appendChild(NumOfCourse);

        const nameOfCourse = document.createElement("th");
        nameOfCourse.textContent = course.courseName;
        row.appendChild(nameOfCourse);

        const CourseInstruct = document.createElement("th");
        CourseInstruct.textContent = course.instructor;
        row.appendChild(CourseInstruct);

        const CourseStart = document.createElement("th");
        CourseStart.textContent = course.startDate;
        row.appendChild(CourseStart);

        const courseDays = document.createElement("th");
        courseDays.textContent = course.numDays;
        row.appendChild(courseDays);
        
        const anchor = document.createElement("a");
        anchor.href = `details.html?courseid=${course.id}`; 
        anchor.textContent = course.courseName;

        const anchorCell = document.createElement("th");
        anchorCell.appendChild(anchor);
        row.appendChild(anchorCell);

        // Append the row to the table
        TableForCourses.appendChild(row);
      });
    });
}



