var table = document.querySelector("table")
var header = document.querySelector("header")
var form = document.querySelector("form")
var pageHeader = new Pageheader(header)
var gradeTable = new GradeTable(table)
var gradeForm = new GradeForm(form)
var app = new App(gradeTable,pageHeader,gradeForm)
app.start();
