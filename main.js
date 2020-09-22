var table = document.querySelector("table")
var header = document.querySelector("header")
var pageHeader = new Pageheader(header)
var gradeTable = new GradeTable(table)
var app = new App(gradeTable,pageHeader)
app.start();
