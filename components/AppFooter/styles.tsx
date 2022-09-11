import styled from 'styled-components'

export const Footer = styled.div.attrs({
  className: 'Footer',
})`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 130px;
  border-top: 1px solid #DDDDDD;
`

export const FooterContent = styled.div.attrs({
  className: 'FooterContent',
})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 850px;
  padding: 0 38px;
`

export const FooterDescriptionContainer = styled.span.attrs({
  className: 'FooterDescriptionContainer',
})`
  display: flex;
  flex-direction: column;
`

export const FooterName = styled.span.attrs({
  className: 'FooterName',
})`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 7px;
`

export const FooterDescription = styled.span.attrs({
  className: 'FooterDescriptionContainer',
})`
  font-weight: 500;
  font-size: 12px;
  color: #929292;
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
  :hover {
    box-shadow: 0 2px 3px 0 rgba(0,0,0,0.3);
  }
  :active {
    transform: scale(0.9);
  }
`