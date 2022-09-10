import styled from 'styled-components'

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px;
  border-bottom: 1px solid #DDDDDD;
`

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 850px;
  padding: 0 38px;
`

export const Text = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
`

export const Date = styled.div`
  span {
    border-bottom: 1px solid #D9D9D9;
    padding-bottom: 3px;
  }
`

export const Input = styled.input`
  width: 362px;
  height: 35px;
  background: #EEEEEE;
  border-radius: 30px;
  border: none;
  padding: 0 14px 0 34px;
  outline: none;
  ::placeholder {
    color: #BABABA;
  }
`
export const InputContainer = styled.div`
  position: relative;
`

export const Icon = styled.div`
  position: absolute;
  top: 7px;
  left: 14px;
`