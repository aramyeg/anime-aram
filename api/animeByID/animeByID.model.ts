import * as Types from './animeByID.types'
import {IUIResponseAnime} from './animeByID.types'

export class UIModelAnime implements IUIResponseAnime{
  title: string
  titleEnglish: string
  imageURL: string
  largeImageURL: string
  episodes: null | number
  malID: number
  type: string
  status: 'Currently Airing' | 'Finished Airing'
  rank: number
  popularity: number
  score: number
  description: string
  verified: boolean
  source: string

  constructor(response: Types.IUIResponseAnime) {
    this.title = response.title
    this.titleEnglish = response.titleEnglish
    this.imageURL = response.imageURL
    this.largeImageURL = response.largeImageURL
    this.episodes = response.episodes
    this.malID = response.malID
    this.type = response.type
    this.status = response.status
    this.rank = response.rank
    this.popularity = response.popularity
    this.score = response.score
    this.description = response.description
    this.verified = response.verified
    this.source = response.source
  }
}