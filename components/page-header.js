class Pageheader{
  constructor(headerElement){
    this.headerElement = headerElement
  }

  updateAverage(newAverage){
     this.headerElement.querySelector('.badge').textContent = newAverage

  }
}
