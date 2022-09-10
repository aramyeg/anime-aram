import * as Types from './searchAnime.types'

export class UIModelSearchAnime {
  title: string
  titleEnglish: string
  imageURL: string
  episodes: null | number
  malID: number
  type: string
  status: 'Currently Airing' | 'Finished Airing'

  constructor(response: Types.IUIResponseSearchAnime) {
    this.imageURL = response.imageURL
    this.title = response.title
    this.titleEnglish = response.titleEnglish
    this.episodes = response.episodes
    this.malID = response.malID
    this.status = response.status
  }
}

export class UIModelSearchAnimes {
  data: UIModelSearchAnime[]

  constructor(response: UIModelSearchAnime[]) {
    this.data = response.map(anime => new UIModelSearchAnime(anime))
  }

}