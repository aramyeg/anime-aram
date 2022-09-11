import styled, {keyframes} from 'styled-components'

const scaleHeader = keyframes`
  0% {
    scale: 1;
  }
  40% {
    scale: 1.1;
  }
  100% {
    scale: 1;
  }
`

export const Container = styled.div.attrs({
  className: 'Container',
})`
  width: 100%;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 600px) {
    padding-top: 23px;
  }
`

export const Header = styled.div.attrs({
  className: 'Header',
})`
  width: 100%;
  max-width: 850px;
  display: flex;
  justify-content: flex-start;
  @media (max-width: 890px) {
    margin-left: 20px;
  }
  button {
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
  }
  @media (min-width: 890px) {
    :hover {
      animation: ${scaleHeader} 3s ease-in-out infinite;
    }
  }
`

export const CustomLink = styled.span.attrs({
  className: 'CustomLink',
})`
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  margin-left: 10px;
`

export const Content = styled.div.attrs({
  className: 'Content',
})`
  display: flex;
  flex-direction: column;
  max-width: 850px;
  padding: 40px 0;
  margin: 0 20px;
  height: 100%;
  @media (max-width: 600px) {
    padding-top: 23px;
  }
`

export const DetailsContainer = styled.div.attrs({
  className: 'DetailsContainer',
})`
  display: flex;
  justify-content: space-between;
  margin-bottom: 34px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`

export const Details = styled.div.attrs({
  className: 'Details',
})`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`

export const Detail = styled.div.attrs({
  className: 'Detail',
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    white-space: nowrap;
    font-weight: 600;
    font-size: 14px;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: fit-content;
    margin-bottom: 23px;
  }
`

export const Image = styled.img.attrs({
  className: 'Image',
})`
  width: 270px;
  height: 330px;
  border-radius: 10px;
  margin-right: 20px;
  @media (max-width: 600px) {
    width: 100%;
    height: fit-content;
  }
`

export const Title = styled.span.attrs({
  className: 'Title',
})`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 50px;
  margin-right: 10px;
  @media (max-width: 600px) {
    margin-top: 16px;
    margin-bottom: 16px;
    margin-right: 12px;
  }
`

export const Numbers = styled.div.attrs({
  className: 'Numbers',
})`
  display: flex;
  justify-content: space-between;
`

export const Line = styled.div.attrs({
  className: 'Line',
})`
  height: 1px;
  width: 100%;
  background-color: #D9D9D9;
  margin: 0 13px;
`

export const Label = styled.span.attrs({
  className: 'Label',
})`
  color: #A7A7A7;
`

export const Scores = styled.div.attrs({
  className: 'Scores',
})`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  span {
    font-weight: 600;
    font-size: 24px;
  }
`

export const Description = styled.div.attrs({
  className: 'Description',
})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const DescTitle = styled.span.attrs({
  className: 'DescTitle',
})`
  font-weight: 600;
  margin-bottom: 20px;
`

export const Desc = styled.div.attrs({
  className: 'Desc',
})`
  font-size: 14px;
  font-weight: 500;
`

export const Checkmark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #20BF12;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  @media (max-width: 600px) {
    margin-top: 16px;
  }
`

export const AnimeTitle = styled.div`
  display: flex;
`

