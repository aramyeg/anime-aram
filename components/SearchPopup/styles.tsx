import styled from 'styled-components'

export const PopupOverlay = styled.div.attrs({
  className: 'PopupOverlay',
})`
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
`