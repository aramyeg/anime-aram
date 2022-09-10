import React, {useState, useEffect} from 'react'
import {PopupOverlay, SearchItem, SearchItemInfo} from './styles'
import {Icon, Input, InputContainer} from '../AppHeader/styles'
import useOutsideClick from '../../hooks/useOutsideClick'
import useDebounce from '../../hooks/useDebounce'
import {SearchAnimeService} from '../../api'
import {UIModelSearchAnime, UIModelSearchAnimes} from '../../api/searchAnime/searchAnime.model'

interface ISearchPopup {
  onClose: (event: MouseEvent | KeyboardEvent) => void
}

const SearchPopup : React.FC<ISearchPopup> = ({onClose}) => {
  const popupRef = React.useRef<HTMLDivElement>(null)
  useOutsideClick(popupRef, (event: MouseEvent) => onClose(event))
  const [searchAnime, setSearchAnime] = useState<string | number>('')
  const [searchResults, setSearchResults] = useState<UIModelSearchAnimes | undefined>(undefined)
  const debouncedNameParam = useDebounce(searchAnime, 300)

  useEffect(() => {
    SearchAnimeService.getSearchAnime(debouncedNameParam, 5).then(
      (searchSuggestions) => {
        setSearchResults(searchSuggestions)
      },
    ).catch(err =>{
      throw new Error(err)
    })
  }, [debouncedNameParam])

  const handleInput = (ev : React.ChangeEvent<HTMLInputElement>) => {
    setSearchAnime(ev.target.value)
  }

  const mapSearchSuggestions = () => (
    searchResults?.data.map((anime: UIModelSearchAnime, index: number)=>(
      <SearchItem key={index}>
        <img src={anime.imageURL} alt={'anime_cover'}/>
        <SearchItemInfo>
          <div>${anime.titleEnglish ? anime.title : `${anime.title}: ${anime.titleEnglish}`}</div>
          <div>{`${anime.type} . ${anime.episodes > 1 ? anime.episodes + 'Episodes' : anime.episodes + 'Episode'}`}</div>
        </SearchItemInfo>
      </SearchItem>
    ))
  )

  return (
    <PopupOverlay>
      <InputContainer ref={popupRef}>
        <Icon>O</Icon>
        <Input value={searchAnime} onInput={(ev: React.ChangeEvent<HTMLInputElement>)=>handleInput(ev)} placeholder="Search.."/>
        {mapSearchSuggestions()}
      </InputContainer>
    </PopupOverlay>
  )
}

export default SearchPopup