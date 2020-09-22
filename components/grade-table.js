class GradeTable {
  constructor(tableElement){
    this.tableElement = tableElement
  }
  updateGrades(grades){
    // console.log(grades)
    var tbody = this.tableElement.querySelector('tbody')
    tbody.textContent = " ";
    for( var i = 0; i < grades.length; i++){
      var tr = document.createElement('tr')

      var dataName = document.createElement('td')
      dataName.textContent = grades[i]['name']

      var dataCourse = document.createElement('td')
      dataCourse.textContent =grades[i]['course']

      var dataGrade = document.createElement('td')
      dataGrade.textContent = grades[i]['grade']

      tr.append(dataName, dataCourse, dataGrade)
      tbody.appendChild(tr)
    }
  }
}
