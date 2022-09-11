export interface IServerResponseAnimeData {
  title: string
  title_english: string
  images: {
    jpg: {
      image_url: string
      large_image_url: string
      small_image_url: string
    }
  }
  episodes: null | number
  mal_id: number
  type: string
  status: 'Currently Airing' | 'Finished Airing'
  rank: number
  popularity: number
  score: number
  synopsis: string
  approved: boolean
  source: string
}

export interface IServerResponseAnime {
  data : IServerResponseAnimeData
}

export interface IUIResponseAnime {
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
}