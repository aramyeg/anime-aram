import React, {useState} from 'react'
import type {NextPage} from 'next'
import {RecommendationsService} from '../api'
import {UIModelRecommendations} from '../api/recommendations/recommendations.model'
import AppHeader from '../components/AppHeader'
import AppContent from '../components/AppContent'
import SearchPopup from '../components/SearchPopup'
import Error from 'next/error'
import {GlobalContainer} from './styles'
import AppFooter from '../components/AppFooter'

const Home: NextPage<UIModelRecommendations> = (data) => {
  const [popupOpened, setPopupOpened] = useState<boolean>(false)

  return (
    <GlobalContainer>
      {!data.activeRecommendations.length ?
        <Error statusCode={404} /> : <>
          {popupOpened && <SearchPopup setPopupOpened={setPopupOpened} onClose={(ev)=> {
            ev.preventDefault()
            setPopupOpened(false)
          }}/>}
          <AppHeader setPopupOpened={setPopupOpened}/>
          <AppContent recommendations={data}/>
          <AppFooter />
        </>
      }
    </GlobalContainer>
  )
}

Home.getInitialProps = async ({ query: { page = 1 } }) => {
  try{
    const allRecommendations = await RecommendationsService.getRecommendations()
    allRecommendations.getNPage(page)
    return allRecommendations
  } catch (err){
    throw new Error(err)
  }
}

export default Home
