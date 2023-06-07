"use strict";

let TableForCourses;

window.onload = () => {
  TableForCourses = document.getElementById("TableForCourses");
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

        // Append the row to the table
        TableForCourses.appendChild(row);
      });
    });
}
