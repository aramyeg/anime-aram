export interface IServerResponseRecommendation {
  entry: {
    images: {
      jpg: {
        image_url: string
        large_image_url: string
        small_image_url: string
      }
      webp: {
        image_url: string
        large_image_url: string
        small_image_url: string
      }
    }
    mal_id: number
    title: string
    url: string
    votes: number
  }
}

export interface IUIResponseRecommendation {
  imageURL: string
  title: string
}

export interface IServerResponseRecommendations {
  data: IServerResponseRecommendation[]
}