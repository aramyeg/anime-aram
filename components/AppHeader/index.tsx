import React, {FC} from 'react'
import {Header, Container, Text, Date, InputContainer, Input, Icon} from './styles'

interface IAppHeader {
  onInputFocus: React.Dispatch<React.SetStateAction<boolean>>
}

const AppHeader : FC<IAppHeader> = ({onInputFocus}) => {
  return (
    <Header>
      <Container>
        <Text>Anime</Text>
        <InputContainer>
          <Icon>O</Icon>
          <Input onFocus={()=>onInputFocus(true)} placeholder="Search.."/>
        </InputContainer>
        <Date>Today is the <span>10th of September</span></Date>
      </Container>
    </Header>
  )
}

export default AppHeader