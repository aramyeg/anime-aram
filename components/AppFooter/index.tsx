import React from 'react'
import {Footer, FooterContent, FooterDescription, FooterName, PageButton} from './styles'
import {ChevronUp} from '../../public/svg'

const AppFooter = () => {

  const handleButton = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }

  return (
    <Footer>
      <FooterContent>
        <FooterDescription>
          <FooterName>Aram</FooterName>
          <span>Nevermind</span>
        </FooterDescription>
        <PageButton onClick={handleButton} >
          <ChevronUp size={16} color={'#666666'}/>
        </PageButton>
      </FooterContent>
    </Footer>
  )
}

export default AppFooter