import styled from 'styled-components'

export const Header = styled.div.attrs({
  className: 'Header',
})`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px;
  border-bottom: 1px solid #DDDDDD;
`

export const Container = styled.div.attrs({
  className: 'Container',
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 850px;
  padding: 0 38px 0 50px;
  @media (max-width: 800px) {
    padding: 0px;
  }
`

export const Text = styled.span.attrs({
  className: 'Text',
})`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
`

export const Date = styled.div.attrs({
  className: 'Date',
})`
  span {
    border-bottom: 1px solid #D9D9D9;
    padding-bottom: 3px;
  }
`

export const HeaderInput = styled.input.attrs({
  className: 'HeaderInput',
})`
  width: 362px;
  height: 35px;
  background: #EEEEEE;
  border-radius: 30px;
  border: none;
  padding: 0 14px 0 34px;
  outline: none;
  @media (max-width: 820px) {
    width: 252px;
  }
  @media (max-width: 768px) {
    width: 202px;
  }
  ::placeholder {
    color: #BABABA;
  }
`
export const InputContainer = styled.div.attrs({
  className: 'InputContainer',
})`
  position: relative;
`

export const HeaderSearchIcon = styled.div.attrs({
  className: 'HeaderSearchIcon',
})`
  position: absolute;
  top: 10px;
  left: 14px;
`