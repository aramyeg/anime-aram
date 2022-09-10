import * as Types from  './searchAnime.types'

export const unpackAnimes = (response: Types.IServerResponseSearchAnimes): Array<Types.IUIResponseSearchAnime> => (
  response.data.map(anime => unpackAnime(anime))
)

export const unpackAnime = (response: Types.IServerResponseSearchAnime): Types.IUIResponseSearchAnime => ({
  title: response.title,
  titleEnglish: response.title_english,
  malID: response.mal_id,
  type: response.type,
  episodes: response.episodes,
  status: response.status,
  imageURL: response.images.jpg.image_url,
})