class App {
  constructor(gradeTable){
    this.gradeTable = gradeTable
    this.handleGetGradesError = this.handleGetGradesError.bind(this)
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this)
  }
  handleGetGradesError(error){
    console.log(error)
  }
  handleGetGradesSuccess(grades){
    // console.log(grades)
    this.gradeTable.updateGrades(grades)
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
  }
}
