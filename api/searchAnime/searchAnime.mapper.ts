import * as Types from  './searchAnime.types'
import {unpackAnime} from '../animeByID/animeByID.mapper'
import {IUIResponseAnime} from '../animeByID/animeByID.types'

export const unpackAnimes = (response: Types.IServerResponseSearchAnimes): Array<IUIResponseAnime> => (
  response.data.map(anime => unpackAnime({data: anime}))
)