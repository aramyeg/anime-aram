import React, {useState, useEffect} from 'react'
import {PopupOverlay} from './styles'
import {Icon, Input, InputContainer} from '../AppHeader/styles'
import useOutsideClick from '../../hooks/useOutsideClick'
import useDebounce from '../../hooks/useDebounce'

interface ISearchPopup {
  onClose: (event: MouseEvent | KeyboardEvent) => void
}

const SearchPopup : React.FC<ISearchPopup> = ({onClose}) => {
  const popupRef = React.useRef<HTMLDivElement>(null)
  useOutsideClick(popupRef, (event: MouseEvent) => onClose(event))
  const [searchAnime, setSearchAnime] = useState<string | undefined | number>('')
  const debouncedNameParam = useDebounce(searchAnime, 300)

  useEffect(() => {
    console.log(debouncedNameParam)
  }, [debouncedNameParam])

  const handleInput = (ev : React.ChangeEvent<HTMLInputElement>) => {
    setSearchAnime(ev.target.value.trim())
  }

  return (
    <PopupOverlay>
      <InputContainer ref={popupRef}>
        <Icon>O</Icon>
        <Input value={searchAnime} onInput={(ev: React.ChangeEvent<HTMLInputElement>)=>handleInput(ev)} placeholder="Search.."/>
      </InputContainer>
    </PopupOverlay>
  )
}

export default SearchPopup