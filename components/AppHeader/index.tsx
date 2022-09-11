import React, {FC} from 'react'
import {Header, Container, Text, Date, InputContainer, HeaderInput, HeaderSearchIcon} from './styles'
import {SearchIcon} from '../../public/svg'
import {getDate} from '../../helpers/getDate'
import useIsMobile from '../../hooks/useIsMobile'

interface IAppHeader {
  setPopupOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const AppHeader : FC<IAppHeader> = ({setPopupOpened}) => {

  const isMobile = useIsMobile()

  return (
    <Header>
      <Container>
        <Text>Anime</Text>
        <InputContainer>
          <HeaderSearchIcon><SearchIcon size={18} color={'#BABABA'}/></HeaderSearchIcon>
          <HeaderInput onFocus={()=> {
            setPopupOpened(true)
          }} placeholder="Search..."/>
        </InputContainer>
        {
          isMobile ?
            <Date>{getDate().short}</Date> :
            <Date>Today is the <span>{getDate().long}</span></Date>
        }
      </Container>
    </Header>
  )
}

export default AppHeader