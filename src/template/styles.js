import styled from 'styled-components'

export const Container = styled.div`
  max-width: ${props => (props.width ? props.width : '100%')};
  background-color: ${props => (props.background ? props.background : '')};
  overflow-x: hidden;
`

export const ItemsDiv = styled.div`
  display: ${props => (props.display ? props.display : '')};
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : ''};
  margin: ${props => (props.margin ? props.margin : '0 auto')};
`

//=============================================================================================

export const LContainer = styled.div`
  padding: ${props => (props.padding ? props.padding : '')};
  width: ${props => (props.width ? props.width : '100%')};
  background: ${props => (props.background ? props.background : '')};
  margin: ${props => (props.margin ? props.margin : '-68px 0 0 0')};

  @media (max-width: 900px) {
    margin: ${props => (props.margin ? props.margin : '-100px 0 0 0')};
  }
`

export const LItemsDiv = styled.div`
  display: ${props => (props.display ? props.display : 'block')};
  align-items: ${props => (props.alignItems ? props.alignItems : '')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'center'};
  padding: ${props => (props.padding ? props.padding : '0 160px')};

  @media (max-width: 900px) {
    padding: ${props => (props.padding ? props.padding : '0 24px')};
  }
`

export const LDiv = styled.div`
  max-width: ${props => (props.width ? props.width : '100%')};
  display: ${props => (props.display ? props.display : '')};
  margin: ${props => (props.margin ? props.margin : '0')};
  grid-template-columns: ${props =>
    props.gridTemplateColumns ? props.gridTemplateColumns : ''};
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : ''};
`

export const LCardDiv = styled.div`
  max-width: ${props => (props.width ? props.width : '100%')};
  display: ${props => (props.display ? props.display : 'flex')};
  margin: ${props => (props.margin ? props.margin : '0 0 64px 0')};
  grid-template-columns: ${props =>
    props.gridTemplateColumns ? props.gridTemplateColumns : ''};
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'space-between'};
  flex-wrap: wrap;
  overflow-x: hidden;

  @media (max-width: 1380px) {
    display: none;
  }
`

export const LResponsiveCard = styled.div`
  max-width: ${props => (props.width ? props.width : '100%')};
  display: ${props => (props.display ? props.display : 'none')};
  margin: ${props => (props.margin ? props.margin : '0')};
  grid-template-columns: ${props =>
    props.gridTemplateColumns ? props.gridTemplateColumns : ''};
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'center'};
  flex-wrap: wrap;
  overflow-x: hidden;

  @media (max-width: 1380px) {
    display: block;
    justify-content: ${props =>
      props.justifyContent ? props.justifyContent : 'center'};
    margin: 0 -30px 0 -10px;
  }

  @media (max-width: 900px) {
    overflow-x: scroll;
    flex-wrap: nowrap;
    scrollbar-color: none;
    max-width: ${props => (props.width ? props.width : '600px')};
  }
`

export const LCard = styled.div`
  display: ${props => (props.display ? props.display : '')};
  margin: ${props => (props.margin ? props.margin : '0')};
  grid-template-columns: ${props =>
    props.gridTemplateColumns ? props.gridTemplateColumns : ''};
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : ''};
  background: ${props => (props.background ? props.background : '#fff')};
  padding: ${props => (props.padding ? props.padding : '25px 32px 22px 21px')};
  height: ${props => (props.height ? props.height : '136px')};
  width: ${props => (props.width ? props.width : '352px')};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '5px')};

  @media (max-width: 1375px) {
    margin: ${props => (props.margin ? props.margin : '0 20px 20px 0')};
    height: ${props => (props.height ? props.height : '200px')};
    width: ${props => (props.width ? props.width : '100%')};
  }
`

export const Td = styled.td`
  width: ${props => (props.width ? props.width : '500px')};
  padding: ${props => (props.padding ? props.padding : '20px 32px')};
  margin: ${props => (props.margin ? props.margin : '0')};
  font-size: ${props => (props.fontSize ? props.fontSize : '1rem')};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : '400')};
  text-align: ${props => (props.textAlign ? props.textAlign : '')};
  line-height: ${props => (props.lineHeight ? props.lineHeight : '24px')};
  letter-spacing: ${props => (props.letterSpacing ? props.letterSpacing : '')};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '5px')};
  border: 0;

  color: ${props => {
    if (props.color) {
      return props.color
    }
    if (props.type == 'entry') {
      return '#59E67F'
    }
    if (props.type == 'output') {
      return '#E62E4D'
    } else {
      return '#121317'
    }
  }};
`

export const Tr = styled.tr`
  margin: ${props => (props.margin ? props.margin : '')};
  padding: ${props => (props.padding ? props.padding : '0')};
  background: ${props => (props.background ? props.background : '#fff')};
`

export const Tbody = styled.tbody`
  width: ${props => (props.width ? props.width : '100%')};
`
//=======================================================================================

export const MContainer = styled.div`
  height: ${props => (props.height ? props.height : '100%')};
  width: ${props => (props.width ? props.width : '100%')};
  top: ${props => (props.top ? props.top : '0')};
  background-color: ${props =>
    props.background ? props.background : 'rgba(0,0,0,0.5)'};
  position: ${props => (props.position ? props.position : 'absolute')};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 900px) {
    display: none;
  }
`

export const ResponsiveContainerModal = styled.div`
  height: ${props => (props.height ? props.height : '100%')};
  width: ${props => (props.width ? props.width : '100%')};
  bottom: ${props => (props.bottom ? props.bottom : '0')};
  background-color: ${props =>
    props.background ? props.background : 'rgba(0,0,0,0.5)'};
  position: ${props => (props.position ? props.position : 'absolute')};
  display: none;

  @media (max-width: 900px) {
    display: block;
  }
`

export const MItemsDiv = styled.div`
  display: ${props => (props.display ? props.display : 'block')};
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'center'};
  padding: ${props => (props.padding ? props.padding : '64px 48px')};
  background: ${props => (props.background ? props.background : '#F0F2F5')};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '5px')};
  height: ${props => (props.height ? props.height : '588px')};
  width: ${props => (props.width ? props.width : '576px')};
  position: relative;
  bottom: ${props => (props.bottom ? props.bottom : '')};
  top: ${props => (props.top ? props.top : '')};
`

export const MDiv = styled.div`
  max-width: ${props => (props.width ? props.width : '100%')};
  display: ${props => (props.display ? props.display : '')};
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  margin: ${props => (props.margin ? props.margin : '0 auto')};
  grid-template-columns: ${props =>
    props.gridTemplateColumns ? props.gridTemplateColumns : ''};
  max-width: ${props => (props.width ? props.width : '1300px')};
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'center'};
  cursor: ${props => (props.cursor ? props.cursor : '')};
  position: ${props => (props.position ? props.position : '')};
  top: ${props => (props.top ? props.top : '')};
  right: ${props => (props.right ? props.right : '')};
`

export const MCard = styled.div`
  width: ${props => (props.width ? props.width : '236px')};
  height: ${props => (props.height ? props.height : '64px')};
  display: ${props => (props.display ? props.display : 'flex')};
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  margin: ${props => (props.margin ? props.margin : '0 0 16px 0')};
  grid-template-columns: ${props =>
    props.gridTemplateColumns ? props.gridTemplateColumns : ''};
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'space-between'};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '5px')};
  padding: ${props => (props.padding ? props.padding : '0 77px')};
  cursor: ${props => (props.cursor ? props.cursor : 'pointer')};
  border: ${props =>
    props.border ? '3px solid #59E67F' : '1px solid #969CB2'};
`

export const Table = styled.div`
  display: block;

  @media (max-width: 900px) {
    display: none;
  }
`

export const ResponsiveTable = styled.div`
  display: ${props => (props.display ? props.display : 'none')};
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  margin: ${props => (props.margin ? props.margin : '0 0 16px 0')};
  grid-template-columns: ${props =>
    props.gridTemplateColumns ? props.gridTemplateColumns : ''};
  align-items: ${props => (props.alignItems ? props.alignItems : 'center')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'space-between'};
  border-radius: ${props => (props.borderRadius ? props.borderRadius : '5px')};

  @media (max-width: 900px) {
    display: block;
  }
`
