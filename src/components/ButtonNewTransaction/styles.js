import styled from 'styled-components'

let whiteColor = '#fff'
let backgroundColor = '#7189CC'

export const Base = styled.button`
  margin: ${props => (props.margin ? props.margin : '0')};
  border: ${props => (props.border ? props.border : '')};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '5px')};
  padding: ${props => (props.padding ? props.padding : '12px 32px')};
  background: ${props =>
    props.background ? props.background : backgroundColor};
  height: ${props => (props.height ? props.height : '')};
  width: ${props => (props.width ? props.width : '')};
  color: ${props => (props.color ? props.color : whiteColor)};
  font-size: ${props => (props.fontSize ? props.fontSize : '1rem')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '600')};
  text-align: ${props => (props.textAlign ? props.textAlign : 'center')};
  line-height: ${props => (props.lineHeight ? props.lineHeight : '24px')};
  letter-spacing: ${props => (props.letterSpacing ? props.letterSpacing : '')};

  @media (max-width: 900px) {
    padding: 10px 15px;
  }
`
