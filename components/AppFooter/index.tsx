import React from 'react'
import {Footer, FooterContent, FooterDescription, FooterName, PageButton, FooterDescriptionContainer} from './styles'
import {ChevronUp} from '../../public/svg'

const footerDesc = 'Originally I found Coinable via angel.co, but I am really invested in web3 ecosystem' +
  'and reached out through discord and twitter and I really love the idea.\n '  +
  'Regarding the task it was pretty thorough as I had to work with fetching data, updating states,' +
  'writing CSS, animations, adding hooks, etc.. all of which are the tools used by frontend developers almost every day.' +
  'For some functionalities I even had to use ref-s which is pretty cool. I would love to go into detail about' +
  'the task and my solution and explain the thinking behind my code design.'

const AppFooter = () => {

  const handleButton = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
  }

  return (
    <Footer>
      <FooterContent>
        <FooterDescriptionContainer>
          <FooterName>Aram Yeghiazaryan</FooterName>
          <FooterDescription>{footerDesc}</FooterDescription>
        </FooterDescriptionContainer>
        <PageButton onClick={handleButton} >
          <ChevronUp size={16} color={'#666666'}/>
        </PageButton>
      </FooterContent>
    </Footer>
  )
}

export default AppFooter