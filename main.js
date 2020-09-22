var table = document.querySelector("table")
var header = document.querySelector("header")
var gradeTable = new GradeTable(table)
var app = new App(gradeTable,header)
app.start();
