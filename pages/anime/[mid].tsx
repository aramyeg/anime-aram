import React from 'react'
import Link from 'next/link'
import {
  Container,
  Header,
  Content,
  DetailsContainer,
  Details,
  Detail,
  Image,
  Title,
  Numbers,
  Line,
  Scores,
  Label,
  DescTitle,
  Desc,
  Description,
  CustomLink,
  Checkmark,
  AnimeTitle,
} from './styles'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import {AnimeByIDService} from '../../api'
import {UIModelAnime} from '../../api/animeByID/animeByID.model'
import {ChevronLeft, Check} from '../../public/svg'
import Error from 'next/error'

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const animeID = params?.mid
  try {
    const anime = await AnimeByIDService.getAnimeByID(animeID)
    if (!anime) {
      return {
        notFound: true,
      }
    }
    return {
      props: { ...anime },
    }
  } catch (err){
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

}

const AnimeDesc: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (anime: UIModelAnime) => {

  return (
    <>
      {!anime.malID ? <Error statusCode={404} /> :
        <Container>
          <Header><Link href="/"><div><button><ChevronLeft size={12} color={'#000000'}/></button><CustomLink>Go back to main</CustomLink></div></Link></Header>
          <Content>
            <DetailsContainer>
              <Image src={anime.largeImageURL}/>
              <Details>
                <AnimeTitle><Title>{anime.title}</Title>
                  {anime.verified && <Checkmark><Check size={12}/></Checkmark> }
                </AnimeTitle>
                <Detail> <Label>Type</Label> <Line/> <span>{anime.type}</span></Detail>
                <Detail> <Label>Source</Label> <Line/> <span>{anime.source}</span></Detail>
                <Detail> <Label>Episodes</Label> <Line/> <span>{anime.episodes}</span></Detail>
                <Detail> <Label>Status</Label> <Line/> <span>{anime.status}</span></Detail>
                <Numbers>
                  <Scores>
                    <span>{anime.score}</span>
                    <Label>Score</Label>
                  </Scores>
                  <Scores>
                    <span>{anime.rank}</span>
                    <Label>Rank</Label>
                  </Scores>
                  <Scores>
                    <span>{anime.popularity}</span>
                    <Label>Popularity</Label>
                  </Scores>
                </Numbers>
              </Details>
            </DetailsContainer>
            <Description>
              <DescTitle>Description</DescTitle>
              <Desc>{anime.description}</Desc>
            </Description>
          </Content>
        </Container>

      }
    </>

  )
}

export default AnimeDesc

