import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  align-items: center;
  padding: 38px;
  border-bottom: 1px solid #DDDDDD;
  max-width: 850px;
  
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Card = styled.div<{ url: string }>`
  display: flex;
  padding: 12px;
  color: #FFFFFF;
  align-items: flex-end;
  background-image: ${props => `url(${props.url})`};
  background-size: cover;
  background-repeat: no-repeat;
  height: 280px;
  position: relative;
  width: 200px;
  transition: 0.3s;
  border-radius: 10px;
  margin-bottom: 38px;
  &hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
`

export const Text = styled.span`
  z-index: 1;
`

export const Shadow = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200px;
  height: 54px;
  border-radius: 0 0 10px 10px;
  background: linear-gradient(180deg, #D9D9D9 0%, rgba(0, 0, 0, 0) 0.01%, rgba(0, 0, 0, 0.69) 100%);
`