import * as Types from './recommendations.types'

export class UIModelRecommendation {
  imageURL: string
  largeImageURL: string
  title: string
  malID: number

  constructor(response: Types.IUIResponseRecommendation) {
    this.imageURL = response.imageURL
    this.largeImageURL = response.largeImageURL
    this.title = response.title
    this.malID = response.malID
  }
}

export class UIModelRecommendations {
  recommendations: UIModelRecommendation[]
  activeRecommendations: UIModelRecommendation[]
  activePage: number
  totalPages: number

  constructor(response: UIModelRecommendation[]) {
    this.recommendations = response.map(recommendation => new UIModelRecommendation(recommendation))
    this.activePage = 1
    this.lastPage()
  }

  getNPage (page: string | string[] | number) {
    if(typeof page === 'string'){
      this.activePage = parseInt(page)
      this.activeRecommendations = this.recommendations.slice((parseInt(page) - 1) * 9, (parseInt(page) - 1) * 9 + 9)
    } else{
      this.activeRecommendations = this.recommendations.slice(0, 9)
    }
  }

  lastPage (){
    this.totalPages = Math.ceil(this.recommendations.length / 9)
  }
}