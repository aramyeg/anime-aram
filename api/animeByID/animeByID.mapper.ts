import * as Types from './animeByID.types'

export const unpackAnime = (response: Types.IServerResponseAnime): Types.IUIResponseAnime => ({
  title: response.data.title,
  titleEnglish: response.data.title_english,
  malID: response.data.mal_id,
  type: response.data.type,
  episodes: response.data.episodes,
  status: response.data.status,
  imageURL: response.data.images.jpg.image_url,
  largeImageURL: response.data.images.jpg.large_image_url,
  rank: response.data.rank,
  popularity: response.data.popularity,
  score: response.data.score,
  description: response.data.synopsis,
  verified: response.data.approved,
  source: response.data.source,
})