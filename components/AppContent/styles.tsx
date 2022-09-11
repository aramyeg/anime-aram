import styled, {css, keyframes} from 'styled-components'

const scaleCard = keyframes`
  from {
    scale: 1;
  }
  to {
    scale: 1.1;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.3);
  }
`

export const Content = styled.div.attrs({
  className: 'Content',
})`
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  align-items: center;
  padding: 38px 38px 0 38px;
  max-width: 850px;
  width: 100%;
  flex: 1;
  @media (max-width: 520px) {
    padding: 17px 14px 0 15px;
  }
`

export const Container = styled.div.attrs({
  className: 'Container',
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100% - 64px);
`

export const Card = styled.div.attrs({
  className: 'Card',
})<{ largeImageURL: string, imageURL: string }>`
  display: flex;
  padding: 12px;
  margin-left: 12px;
  color: #FFFFFF;
  align-items: flex-end;
  background-image: ${props => `url(${props.imageURL})`};
  background-size: cover;
  background-repeat: no-repeat;
  height: 280px;
  position: relative;
  width: 200px;
  transition: 0.3s;
  border-radius: 10px;
  margin-bottom: 38px;
  cursor: pointer;
  :hover {
    animation: ${scaleCard} 0.6s ease-in-out;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.3);
    scale: 1.1;
  }
  @media (max-width: 520px) {
    background-image: ${props => `url(${props.largeImageURL})`};
    width: 100%;
    margin-bottom: 17px;
  }
`

export const ShadowText = styled.span.attrs({
  className: 'ShadowText',
})`
  z-index: 1;
`

export const Shadow = styled.div.attrs({
  className: 'Shadow',
})`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200px;
  height: 54px;
  border-radius: 0 0 10px 10px;
  background: linear-gradient(180deg, #D9D9D9 0%, rgba(0, 0, 0, 0) 0.01%, rgba(0, 0, 0, 0.69) 100%);
`

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 34px;
`

export const PageButton = styled.button.attrs({
  className: 'PageButton',
})<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #EBEBEB;
  border: none;
  outline: none;
  width: 32px;
  height: 32px;
  border-radius: 5px;
  margin: 0 10px;
  cursor: pointer;
  ${(props) =>
    props.disabled &&
          css`
            cursor: no-drop;
            background-color: rgba(0,0,0,0.35);

            :hover {
              box-shadow: none;
            }
            :active {
              transform: scale();
            }
  `}
  ${(props) =>

    !props.disabled &&
          css`
            :hover {
              box-shadow: 0 2px 3px 0 rgba(0,0,0,0.3);
            }
            :active {
              transform: scale(0.9);
            }
  `}
`
