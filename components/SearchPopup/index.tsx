import React, {useState, useEffect, MouseEventHandler} from 'react'
import {PopupOverlay, SearchItem, SearchItemInfo, InputContainer, InputSearch, SearchResults, EmptyResult} from './styles'
import useOutsideClick from '../../hooks/useOutsideClick'
import useDebounce from '../../hooks/useDebounce'
import {SearchAnimeService} from '../../api'
import {UIModelAnime} from '../../api/animeByID/animeByID.model'
import {UIModelSearchAnimes} from '../../api/searchAnime/searchAnime.model'
import {Close, ChevronRight} from '../../public/svg'
import Router from 'next/router'
import useIsMobile from '../../hooks/useIsMobile'

interface ISearchPopup {
  onClose: (event: MouseEvent | KeyboardEvent) => void
  setPopupOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const SearchPopup : React.FC<ISearchPopup> = ({onClose, setPopupOpened}) => {
  const popupRef = React.useRef<HTMLDivElement>(null)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const isMobile = useIsMobile()
  useOutsideClick(popupRef, (event: MouseEvent) => onClose(event))
  const [searchAnime, setSearchAnime] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [searchResults, setSearchResults] = useState<UIModelSearchAnimes | undefined>(undefined)
  const debouncedNameParam = useDebounce(searchAnime, 400)
  const inputPlaceHolder = 'You can search for ‘Kyoukai no Kanata’ for example'

  useEffect(() => {
    const searchAnime = async () => {
      setSearchResults(undefined)
      setLoading(true)
      try {
        const searchResults = await SearchAnimeService.getSearchAnime(debouncedNameParam.trim(), 5)
        setSearchResults(searchResults)
      } catch (err){
        throw new Error(err)
      } finally {
        setLoading(false)
      }
    }
    debouncedNameParam.trim().length >= 1 && searchAnime()
  }, [debouncedNameParam])

  useEffect(()=>{
    inputRef?.current?.focus()
  }, [])

  useEffect(()=>{
    inputRef?.current?.focus()
  }, [])

  const handleInput = (ev : React.ChangeEvent<HTMLInputElement>) => {
    setSearchAnime(ev.target.value)
  }

  const handleClose : MouseEventHandler = (event) => {
    setPopupOpened(false)
  }

  const mapSearchSuggestions = () => (
    searchResults?.data.map((anime: UIModelAnime, index: number)=>(
      <SearchItem onClick={()=>{
        Router.push(`/anime/${anime.malID}`)
      }} key={index}>
        <img src={anime.imageURL} alt={'anime_cover'}/>
        <SearchItemInfo>
          <div>{anime.titleEnglish ?  `${anime.title}: ${anime.titleEnglish}` : anime.title }</div>
          <span>{`${anime.type} ∙ ${anime.episodes ? (anime.episodes > 1 ? anime.episodes + ' Episodes' : anime.episodes + ' Episode') : 'Unknown Episodes'} `} ∙ {anime.status}</span>
        </SearchItemInfo>
        {!isMobile && <ChevronRight size={12} color={'#BDBDBD'}/>}
      </SearchItem>
    ))
  )

  return (
    <PopupOverlay>
      <InputContainer ref={popupRef}>
        <button onClick={(event) => handleClose(event)}><Close size={14} color={'#FFFFFF'}/></button>
        <InputSearch ref={inputRef} value={searchAnime} onInput={(ev: React.ChangeEvent<HTMLInputElement>)=>handleInput(ev)} placeholder={inputPlaceHolder}/>
        {debouncedNameParam.trim() && searchResults?.data.length ?
          <SearchResults>
            {mapSearchSuggestions()}
          </SearchResults> :
          <>
            {
              debouncedNameParam.trim() && !loading ?
                <SearchResults>
                  <EmptyResult>
                    Oops it seems there is nothing for {`'${debouncedNameParam}'`}
                  </EmptyResult>
                </SearchResults> :

                <></>
            }
          </>
        }
      </InputContainer>
    </PopupOverlay>
  )
}

export default SearchPopup