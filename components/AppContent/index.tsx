import React, {FC} from 'react'
import Router from 'next/router'
import {Container, Card, Content, Shadow, ShadowText, Pagination, PageButton} from './styles'
import {UIModelRecommendation, UIModelRecommendations} from '../../api/recommendations/recommendations.model'
import {LeftIcon, RightIcon} from '../../public/svg'

interface IAppContent {
  recommendations: UIModelRecommendations
}

const AppContent : FC<IAppContent> = ({recommendations}) => {
  return (
    <Container>
      <Content>
        {
          recommendations.activeRecommendations.map((item: UIModelRecommendation, index: number)=>(
            <Card onClick={()=>{
              Router.push(`/anime/${item.malID}`)
            }}
            largeImageURL={item.largeImageURL}
            key={index}
            imageURL={item.imageURL} >
              <ShadowText>{item.title}</ShadowText>
              <Shadow />
            </Card>
          ))
        }
      </Content>
      <Pagination>
        <PageButton
          onClick={() => Router.push(`/?page=${recommendations.activePage - 1}`)}
          disabled={recommendations.activePage <= 1}
        >
          <LeftIcon size={16} color={'#666666'}/>
        </PageButton>
        <span>
          {recommendations.activePage}
        </span>
        <PageButton
          onClick={() => Router.push(`/?page=${recommendations.activePage + 1}`)}
          disabled={recommendations.activePage === recommendations.totalPages}
        >
          <RightIcon size={16} color={'#666666'}/>
        </PageButton>
      </Pagination>
    </Container>

  )
}

export default AppContent