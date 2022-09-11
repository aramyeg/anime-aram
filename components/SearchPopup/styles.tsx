import styled, {keyframes} from 'styled-components'

const fadeIn = keyframes`
  from {
    background-color: rgba(0, 0, 0, 0);
    padding-top: 0;
  }
  to {
    background-color: rgba(0, 0, 0, 0.6);
    padding-top: 238px;
  }
`

const hoverItem = keyframes`
  from {
    background-color: rgba(0, 0, 0, 0);
  }
  to {
    background-color: rgba(0, 0, 0, 0.2);
  }
`

const appearSearch = keyframes`
  from {
    scale: 0;
  }
  to {
    scale: 1;
  }
`

export const PopupOverlay = styled.div.attrs({
  className: 'PopupOverlay',
})`
  min-width: 380px;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-top: 238px;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
  display: flex;
  justify-content: center;
  animation: ${fadeIn} 0.4s ease-in-out;
  @media (max-width: 680px) {
    padding: 178px 10px 0px 10px;
    width: 100%;
  }
`

export const SearchItem = styled.div.attrs({
  className: 'SearchItem',
})`
  width: 100%;
  height: 62px;
  display: flex;
  background-color: white;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 12px;
  padding: 12px 5px 12px 10px;
  border-radius: 4px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
  :hover {
    animation: ${hoverItem} 0.4s ease-in-out;
    background-color: rgba(0, 0, 0, 0.2);
  }
`

export const SearchItemInfo = styled.div.attrs({
  className: 'SearchItemInfo',
})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 17px;
  span {
    font-size: 14px;
    color: #757575;
  }
`

export const InputContainer = styled.div.attrs({
  className: 'InputContainer',
})`
  width: 100%;
  max-width: 618px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  animation: ${appearSearch} 0.4s ease-in-out;
  button {
    background: none;
    outline: none;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
    cursor: pointer;
  }
`

export const InputSearch = styled.input.attrs({
  className: 'InputSearch',
})`
  width: 100%;
  height: 64px;
  background: #FFFFFF;
  border-radius: 32px;
  border: none;
  padding: 0 35px;
  outline: none;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 16px;
  ::placeholder {
    color: #BABABA;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`

export const SearchResults = styled.div.attrs({
  className: 'SearchResults',
})`
  display: flex;
  flex-direction: column;
  padding: 40px 40px 13px 40px;
  background-color: #FFFFFF;
  border-radius: 32px;
  width: 100%;
`

export const EmptyResult = styled.div.attrs({
  className: 'EmptyResult',
})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 0px 37px 0px;
  span {
    font-size: 14px;
    color: #757575;
  }
`

