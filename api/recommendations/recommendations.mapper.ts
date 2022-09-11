import * as Types from  './recommendations.types'

export const unpackRecommendations = (response: Types.IServerResponseRecommendations): Array<Types.IUIResponseRecommendation> => (
  response.data.map(program => unpackRecommendation(program))
)

export const unpackRecommendation = (response: Types.IServerResponseRecommendation): Types.IUIResponseRecommendation => ({
  imageURL: response.entry.images.jpg.image_url,
  largeImageURL: response.entry.images.jpg.large_image_url,
  title: response.entry.title,
  malID: response.entry.mal_id,
})

