import {UIModelSearchAnimes} from './searchAnime.model'
import {unpackAnimes} from './searchAnime.mapper'

const getSearchAnime = async (searchQuery : string | number, limit = 5)  => {
  const url = `https://api.jikan.moe/v4/anime?q=${searchQuery}&limit=${limit}`
  try{
    const response = await fetch(url.toString(), {method: 'GET'})
    const data = await response.json()
    return new UIModelSearchAnimes(unpackAnimes(data))
  } catch (err){
    throw new Error(err)
  }
}

const SearchAnimeService = {
  getSearchAnime,
}

export default SearchAnimeService