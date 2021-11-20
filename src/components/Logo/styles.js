import styled from 'styled-components'

export const Div = styled.div`
  margin: ${props => (props.margin ? props.margin : '0')};
  display: ${props => (props.display ? props.display : 'flex')};
  align-items: ${props => (props.alignItems ? props.alignItems : '')};
`
export const Title = styled.h1`
  margin: ${props => (props.margin ? props.margin : '0 0 0 15px')};
  color: ${props => (props.color ? props.color : '#fff')};
  font-size: ${props => (props.fontSize ? props.fontSize : '1.5rem')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '')};
  text-align: ${props => (props.textAlign ? props.textAlign : '')};
  line-height: ${props => (props.lineHeight ? props.lineHeight : '')};
  letter-spacing: ${props => (props.letterSpacing ? props.letterSpacing : '')};

  @media (max-width: 900px){
    margin: 3px 0 0 15px;
  }
`
