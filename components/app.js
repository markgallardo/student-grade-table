class App {
  constructor(gradeTable, pageHeader,gradeForm){
    this.gradeTable = gradeTable
    this.pageHeader =pageHeader
    this.gradeForm = gradeForm
    this.handleGetGradesError = this.handleGetGradesError.bind(this)
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
    this.createGrade =this.createGrade.bind(this)
    this.handleCreateGradesError = this.handleCreateGradesError.bind(this)
    this.handleCreateGradesSuccess = this.handleCreateGradesSuccess.bind(this)
  }
  handleGetGradesError(error){
    console.log(error)
  }
  handleGetGradesSuccess(grades){
    this.gradeTable.updateGrades(grades)

    var total = 0
    for(var i = 0; i < grades.length; i++){
      total += grades[i]['grade']
    }
    var average = Math.round(total/grades.length)
    this.pageHeader.updateAverage(average)
  }

  getGrades(){
    $.ajax({
      url: "https://sgt.lfzprototypes.com/api/grades",
      method: "GET",
      data: "none",
      headers:{
        "X-Access-Token": "BDeyLSyG"
      },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    });
  }
  start(){
    this.getGrades()
    this.gradeForm.onSubmit(this.createGrade)
  }
  createGrade(name,course,grade){
    console.log(name,course,grade)

    $.ajax({
      url: "https://sgt.lfzprototypes.com/api/grades",
      method: "POST",
      data: {
        "name": name,
        "course": course,
        "grade": grade
      } ,
      headers: {
        "X-Access-Token": "BDeyLSyG"
      },
      success: this.handleCreateGradesSuccess,
      error: this.handleCreateGradesError
    });
  }

  handleCreateGradesError(error){
    console.log(error)
  }
  handleCreateGradesSuccess(){
    this.getGrades()
  }

}
