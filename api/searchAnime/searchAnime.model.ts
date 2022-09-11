import {UIModelAnime} from '../animeByID/animeByID.model'

export class UIModelSearchAnimes {
  data: UIModelAnime[]

  constructor(response: UIModelAnime[]) {
    this.data = response.map(anime => new UIModelAnime(anime))
  }

}