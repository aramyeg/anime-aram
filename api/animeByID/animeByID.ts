import {UIModelAnime} from './animeByID.model'
import {unpackAnime} from './animeByID.mapper'

const getAnimeByID = async (id : undefined | string | string[])  => {
  const url = `https://api.jikan.moe/v4/anime/${id}`
  try{
    const response = await fetch(url.toString(), {method: 'GET'})
    const data = await response.json()
    return new UIModelAnime(unpackAnime(data))
  } catch (err){
    throw new Error(err)
  }
}

const AnimeByIDService = {
  getAnimeByID,
}

export default AnimeByIDService