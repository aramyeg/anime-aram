import {UIModelRecommendations} from './recommendations.model'
import {unpackRecommendations} from './recommendations.mapper'

const getRecommendations = async () : Promise<UIModelRecommendations> => {
  const url = 'https://api.jikan.moe/v4/anime/1/recommendations'
  try{
    const response = await fetch(url.toString(), {method: 'GET'})
    const data = await response.json()
    console.log(data)
    return new UIModelRecommendations(unpackRecommendations(data))
  } catch (err){
    throw new Error(err)
  }
}

const RecommendationsService = {
  getRecommendations,
}

export default RecommendationsService