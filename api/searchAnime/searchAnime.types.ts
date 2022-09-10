export interface IServerResponseSearchAnime {
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
}

export interface IServerResponseSearchAnimes {
  data: IServerResponseSearchAnime[]
}

export interface IUIResponseSearchAnime {
  title: string
  titleEnglish: string
  imageURL: string
  episodes: null | number
  malID: number
  type: string
  status: 'Currently Airing' | 'Finished Airing'
}

