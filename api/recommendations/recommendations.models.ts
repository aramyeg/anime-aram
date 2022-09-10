import * as Types from './recommendations.types'

export class UIModelRecommendation {
  imageURL: string
  title: string

  constructor(response: Types.IUIResponseRecommendation) {
    this.imageURL = response.imageURL
    this.title = response.title
  }
}

export class UIModelRecommendations {
  recommendations: UIModelRecommendation[]
  activeRecommendations: UIModelRecommendation[]
  activePage: number

  constructor(response: UIModelRecommendation[]) {
    this.recommendations = response.map(recommendation => new UIModelRecommendation(recommendation))
    this.activePage = 1
  }

  getNPage (page: string | string[] | number) {
    if(typeof page === 'string'){
      this.activePage = parseInt(page)
      this.activeRecommendations = this.recommendations.slice((parseInt(page) - 1) * 9, (parseInt(page) - 1) * 9 + 9)
    } else{
      this.activeRecommendations = this.recommendations.slice(0, 9)
    }
  }
}