import React, {FC} from 'react'
import Router from 'next/router'
import {Container, Card, Content, Shadow, Text} from './styles';
import {UIModelRecommendation, UIModelRecommendations} from '../../api/recommendations/recommendations.models';

interface IAppContent {
  recommendations: UIModelRecommendations
}

const AppContent : FC<IAppContent> = ({recommendations}) => {
  return (
    <Container>
      <Content>
        {
          recommendations.activeRecommendations.map((item: UIModelRecommendation, index: number)=>(
            <Card key={index} url={item.imageURL}>
              <Text>{item.title}</Text>
              <Shadow />
            </Card>
          ))
        }
      </Content>
      <div>
        <button
          onClick={() => Router.push(`/?page=${recommendations.activePage - 1}`)}
          disabled={recommendations.activePage <= 1}
        >
          PREV
        </button>
        <span>
          {recommendations.activePage}
        </span>
        <button onClick={() => Router.push(`/?page=${recommendations.activePage + 1}`)}>
          NEXT
        </button>
      </div>
    </Container>

  );
};

export default AppContent;