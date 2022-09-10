import React, {useState} from 'react'
import type {NextPage} from 'next'
import styles from '../styles/Home.module.css'
import {RecommendationsService} from '../api'
import {UIModelRecommendations} from '../api/recommendations/recommendations.models'
import AppHeader from '../components/AppHeader'
import AppContent from '../components/AppContent'
import SearchPopup from '../components/SearchPopup'

const Home: NextPage<UIModelRecommendations> = (data) => {
  const [popupOpened, setPopupOpened] = useState<boolean>(false)

  console.log(data, 'data')
  return (
    <div className={styles.container}>
      {popupOpened && <SearchPopup onClose={(ev)=>setPopupOpened(false)}/>}
      <AppHeader onInputFocus={setPopupOpened}/>
      <AppContent recommendations={data}/>
    </div>
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
