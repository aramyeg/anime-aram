import React, {FC, useEffect, useState} from 'react'
import {Header, Container, Text, Date, InputContainer, HeaderInput, HeaderSearchIcon} from './styles'
import {SearchIcon} from '../../public/svg'
import {getDate} from '../../helpers/getDate'

interface IAppHeader {
  setPopupOpened: React.Dispatch<React.SetStateAction<boolean>>
}

const AppHeader : FC<IAppHeader> = ({setPopupOpened}) => {

  const [isMobile, setIsMobile] = useState(false)

  const handleResize = () => {
    if (window.innerWidth < 620) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  },[])

  return (
    <Header>
      <Container>
        <Text>Anime</Text>
        <InputContainer>
          <HeaderSearchIcon><SearchIcon size={18} color={'#BABABA'}/></HeaderSearchIcon>
          <HeaderInput onFocus={(ev)=> {
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