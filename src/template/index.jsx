import {
  MContainer,
  MItemsDiv,
  MDiv,
  MCard,
  LContainer,
  LItemsDiv,
  LDiv,
  LCard,
  LCardDiv,
  Tbody,
  Tr,
  Td,
  Container,
  ItemsDiv,
  LResponsiveCard,
  Table,
  ResponsiveTable,
  ResponsiveContainerModal
} from './styles'
import { Logo } from '../components/Logo'
import { ButtonNewTransaction } from '../components/ButtonNewTransaction'
import { CardTitle } from '../components/CardTitle'
import { CardValue } from '../components/CardValue'
import { IDolarSign, IExit, IEntrance, IClose } from '../components/Icons'
import { TableText } from '../components/TableText'
import { useRef, useState, useEffect } from 'react'
import { FormTitle } from '../components/FormTitle'
import { Formik } from 'formik'
import { registerSchema } from '../schemes/Rules'
import { FormInput } from '../components/FormInput'
import { ButtonRegister } from '../components/ButtonRegister'
import Carousel from 'react-elastic-carousel'

export function Template(props) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 1, itemsToScroll: 3 }
  ]

  const [active, setActive] = useState({
    value: 'entry',
    type: null,
    modalState: false
  })

  const [items, setItems] = useState([
    {
      id: 1,
      type: 'entry',
      value: 12000,
      title: 'Wage',
      category: 'Work',
      date: '10/04/2021'
    },
    {
      id: 2,
      type: 'output',
      value: -9000,
      title: 'House rent',
      category: 'House',
      date: '10/08/2021'
    },
    {
      id: 3,
      type: 'output',
      value: -500,
      title: 'Month purchases',
      category: 'Feeding',
      date: '11/02/2021'
    }
  ])

  function MouseOut(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setActive({ ...active, modalState: false })
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }

  const modalOut = useRef(null)
  MouseOut(modalOut)

  const [states, setStates] = useState([
    {
      positive: 0,
      negative: 0,
      total: 0
    }
  ])

  useEffect(() => {
    let somaP = 0

    for (let i = 0; i < items.length; i++) {
      if (items[i].value > 0) {
        somaP += items[i].value
      }
    }

    let somaN = 0

    for (let i = 0; i < items.length; i++) {
      if (items[i].value < 0) {
        somaN += -items[i].value
      }
    }

    let soma = 0

    for (let i = 0; i < items.length; i++) {
      soma += items[i].value
    }

    setStates({ positive: somaP, negative: somaN, total: soma })
  }, [items])

  function setColor(type) {
    if (type == 'output') {
      return '#E62E4D'
    } else {
      return '#59E67F'
    }
  }

  const months = [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez'
  ]
  let date = new Date(items[items.length - 1].date)
  let dateFormated = date.getDate() + ' ' + months[date.getMonth()]
  function LandingPage() {
    return (
      <>
        <LContainer background="#5f7bc5" padding="32px 0 180px 0" margin="0">
          <LItemsDiv>
            <LDiv display="flex" justifyContent="space-between">
              <Logo />
              <ButtonNewTransaction
                onClick={() => setActive({ ...active, modalState: true })}
              >
                New transaction
              </ButtonNewTransaction>
            </LDiv>
          </LItemsDiv>
        </LContainer>

        <LContainer>
          <LItemsDiv>
            <LCardDiv>
              <LCard>
                <LDiv
                  display="flex"
                  justifyContent="space-between"
                  alignItems="top"
                  margin="0 0 10px 0"
                >
                  <CardTitle>Entrys</CardTitle>
                  <IEntrance />
                </LDiv>
                <CardValue>$ {states.positive},00</CardValue>
              </LCard>
              <LCard>
                <LDiv
                  display="flex"
                  justifyContent="space-between"
                  alignItems="top"
                  margin="0 0 10px 0"
                >
                  <CardTitle>Outputs</CardTitle>
                  <IExit />
                </LDiv>
                <CardValue>$ {states.negative},00</CardValue>
              </LCard>
              <LCard background="#59E67F">
                <LDiv
                  display="flex"
                  justifyContent="space-between"
                  alignItems="top"
                  margin="0 0 10px 0"
                >
                  <CardTitle color="#fff">Total</CardTitle>
                  <IDolarSign />
                </LDiv>
                <CardValue color="#fff">$ {states.total},00</CardValue>
              </LCard>
            </LCardDiv>

            <LResponsiveCard>
              <Carousel
                breakPoints={breakPoints}
                pagination={false}
                showArrows={false}
              >
                <LCard>
                  <LDiv
                    display="flex"
                    justifyContent="space-between"
                    alignItems="top"
                    margin="0 0 10px 0"
                  >
                    <CardTitle>Entrys</CardTitle>
                    <IEntrance />
                  </LDiv>
                  <CardValue>$ {states.positive},00</CardValue>
                  <CardTitle color="#969cb2">
                    Last entry day {dateFormated}
                  </CardTitle>
                </LCard>
                <LCard>
                  <LDiv
                    display="flex"
                    justifyContent="space-between"
                    alignItems="top"
                    margin="0 0 10px 0"
                  >
                    <CardTitle>Outputs</CardTitle>
                    <IExit />
                  </LDiv>
                  <CardValue>$ {states.negative},00</CardValue>
                </LCard>
                <LCard background="#59E67F">
                  <LDiv
                    display="flex"
                    justifyContent="space-between"
                    alignItems="top"
                    margin="0 0 10px 0"
                  >
                    <CardTitle color="#fff">Total</CardTitle>
                    <IDolarSign />
                  </LDiv>
                  <CardValue color="#fff">$ {states.total},00</CardValue>
                </LCard>
              </Carousel>
            </LResponsiveCard>

            <Table>
              <table
                cellspacing="0"
                cellpadding="0"
                style={{ borderSpacing: '0 8px' }}
              >
                <thead type="row">
                  <Tr background="none">
                    <Td widh="350px">
                      <TableText>Items</TableText>
                    </Td>
                    <Td>
                      <TableText>Transaction</TableText>
                    </Td>
                    <Td>
                      <TableText>Category</TableText>
                    </Td>
                    <Td widh="250px">
                      <TableText>Date</TableText>
                    </Td>
                  </Tr>
                </thead>
                <Tbody>
                  {items.map(item => {
                    return (
                      <Tr key={item.id}>
                        <Td widh="350px">{item.title}</Td>
                        <Td type={item.type}>$ {item.value},00</Td>
                        <Td color="#969cb2">{item.category}</Td>
                        <Td widh="250px" color="#969cb2">
                          {item.date}
                        </Td>
                      </Tr>
                    )
                  })}
                </Tbody>
              </table>
            </Table>

            <ResponsiveTable margin="32px 0 16px 0">
              <LDiv display="flex" justifyContent="space-between">
                <CardTitle color="#121317" fontSize="1.25rem">
                  Listing
                </CardTitle>
                <CardTitle color="#969cb2" fontWeight="500">
                  {items.length} items
                </CardTitle>
              </LDiv>

              <LDiv justifyContent="center">
                {items.map(item => {
                  return (
                    <LCard
                      key={item.id}
                      padding="17px 24px"
                      margin="16px auto 8px auto"
                      height="128px"
                      width="100%"
                    >
                      <CardTitle margin=" 0 0 2px 0">{item.title}</CardTitle>
                      <CardValue
                        lineHeight="30px"
                        fontWeight="400"
                        margin="0 0 20px 0"
                        fontSize="1.25rem"
                        color={setColor(item.type)}
                      >
                        $ {item.value},00
                      </CardValue>
                      <LDiv display="flex" justifyContent="space-between">
                        <CardTitle color="#969cb2">{item.category}</CardTitle>
                        <CardTitle color="#969cb2">{item.date}</CardTitle>
                      </LDiv>
                    </LCard>
                  )
                })}
              </LDiv>
            </ResponsiveTable>
          </LItemsDiv>
        </LContainer>
      </>
    )
  }

  const capitalize = str => {
    if (typeof str !== 'string') {
      return ''
    }
    return str.charAt(0).toUpperCase() + str.substr(1)
  }

  function adicionaZero(numero) {
    if (numero <= 9) return '0' + numero
    else return numero
  }
  let currentDate = new Date('2020-1-29') //29/01/2020
  let currentDateFormated =
    adicionaZero(currentDate.getDate().toString()) +
    '/' +
    adicionaZero(currentDate.getMonth() + 1).toString() +
    '/' +
    currentDate.getFullYear()
  // saída: 29/01/2020
  let currentDate2 = new Date('2020-10-2') //02/10/2020
  let currentDateFormated2 =
    adicionaZero(currentDate2.getDate().toString()) +
    '/' +
    adicionaZero(currentDate2.getMonth() + 1).toString() +
    '/' +
    currentDate2.getFullYear()

  function convertVal(price, status) {
    if (status == 'output') {
      return -price
    } else {
      return price
    }
  }

  function Modal() {
    function save(val) {
      setItems([
        ...items,
        {
          id: items.length + 1,
          type: val.status,
          value: convertVal(parseInt(val.price), val.status),
          title: capitalize(val.name),
          category: capitalize(val.category),
          date: currentDateFormated2
        }
      ])

      setActive({ ...active, modalState: false })
    }

    return (
      <>
        <MContainer>
          <MItemsDiv ref={modalOut}>
            <FormTitle margin="0 0 32px 0">Register Transaction</FormTitle>
            <MDiv
              position="absolute"
              top="21px"
              right="21px"
              cursor="pointer"
              onClick={() => setActive({ ...active, modalState: false })}
            >
              <IClose />
            </MDiv>
            <MDiv>
              <Formik
                initialValues={{
                  name: '',
                  price: '',
                  status: '',
                  category: ''
                }}
                validationSchema={registerSchema}
                onSubmit={values => {
                  save(values)
                }}
              >
                {({
                  handleChange,
                  handleBlur,
                  values,
                  errors,
                  touched,
                  handleSubmit
                }) => (
                  <>
                    <MDiv>
                      <FormInput
                        required
                        id="name"
                        placeholder="Name"
                        name="name"
                        autoComplete="current-name"
                        type="text"
                        onChange={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                        margin="0 0 16px 0"
                        errors={errors.name && touched.name}
                      />
                      {errors.name && touched.name}
                    </MDiv>

                    <MDiv>
                      <FormInput
                        required
                        id="price"
                        placeholder="Price"
                        name="price"
                        autoComplete="current-price"
                        onChange={handleChange('price')}
                        onBlur={handleBlur('price')}
                        value={values.price}
                        margin="0 0 16px 0"
                        errors={errors.price && touched.price}
                      />
                      {errors.price && touched.price}
                    </MDiv>

                    <MDiv
                      display="flex"
                      justifyContent="space-between"
                      errors={errors.status && touched.status}
                      value={(values.status = active.value)}
                    >
                      <MCard
                        border={active.type == true}
                        onClick={() =>
                          setActive({ ...active, value: 'entry', type: true })
                        }
                      >
                        <IEntrance />
                        <CardTitle>Entry</CardTitle>
                      </MCard>
                      <MCard
                        border={active.type == false}
                        onClick={() =>
                          setActive({ ...active, value: 'output', type: false })
                        }
                        padding="0 70px"
                      >
                        <IExit />
                        <CardTitle> Output</CardTitle>
                      </MCard>
                      {errors.status && touched.status}
                    </MDiv>

                    <MDiv>
                      <FormInput
                        required
                        id="category"
                        placeholder="Category"
                        name="category"
                        autoComplete="current-category"
                        onChange={handleChange('category')}
                        onBlur={handleBlur('category')}
                        value={values.category}
                        margin="0 0 24px 0"
                        errors={errors.category && touched.category}
                      />
                      {errors.category && touched.category}
                    </MDiv>

                    <MDiv>
                      <ButtonRegister onClick={() => handleSubmit()}>
                        Register
                      </ButtonRegister>
                    </MDiv>
                  </>
                )}
              </Formik>
            </MDiv>
          </MItemsDiv>
        </MContainer>

        <ResponsiveContainerModal top="100%">
          <MItemsDiv
            margin="0 auto 0 0"
            top="522px"
            padding="24px"
            ref={modalOut}
            width="100%"
            height="446px"
            borderRadius="16px 16px 0 0"
          >
            <FormTitle margin="0 0 24px 0">Register Transaction</FormTitle>
            <MDiv
              position="absolute"
              top="33px"
              right="24px"
              cursor="pointer"
              onClick={() => setActive({ ...active, modalState: false })}
            >
              <IClose />
            </MDiv>
            <MDiv>
              <Formik
                initialValues={{
                  name: '',
                  price: '',
                  status: '',
                  category: ''
                }}
                validationSchema={registerSchema}
                onSubmit={values => {
                  save(values)
                }}
              >
                {({
                  handleChange,
                  handleBlur,
                  values,
                  errors,
                  touched,
                  handleSubmit
                }) => (
                  <>
                    <MDiv>
                      <FormInput
                        required
                        id="name"
                        placeholder="Name"
                        name="name"
                        autoComplete="current-name"
                        type="text"
                        onChange={handleChange('name')}
                        onBlur={handleBlur('name')}
                        value={values.name}
                        margin="0 0 8px 0"
                        width="100%"
                        height="56px"
                        errors={errors.name && touched.name}
                      />
                      {errors.name && touched.name}
                    </MDiv>

                    <MDiv>
                      <FormInput
                        required
                        id="price"
                        placeholder="Price"
                        name="price"
                        autoComplete="current-price"
                        onChange={handleChange('price')}
                        onBlur={handleBlur('price')}
                        value={values.price}
                        margin="0 0 8px 0"
                        width="100%"
                        height="56px"
                        errors={errors.price && touched.price}
                      />
                      {errors.price && touched.price}
                    </MDiv>

                    <MDiv
                      display="flex"
                      justifyContent="space-between"
                      errors={errors.status && touched.status}
                      value={(values.status = active.value)}
                    >
                      <MCard
                        border={active.type == true}
                        onClick={() =>
                          setActive({ ...active, value: 'entry', type: true })
                        }
                        padding="0 40px"
                        width="160px"
                        height="56px"
                      >
                        <IEntrance />
                        <CardTitle>Entry</CardTitle>
                      </MCard>
                      <MCard
                        border={active.type == false}
                        onClick={() =>
                          setActive({ ...active, value: 'output', type: false })
                        }
                        padding="0 33px"
                        width="160px"
                        height="56px"
                      >
                        <IExit />
                        <CardTitle> Output</CardTitle>
                      </MCard>
                      {errors.status && touched.status}
                    </MDiv>

                    <MDiv>
                      <FormInput
                        required
                        id="category"
                        placeholder="Category"
                        name="category"
                        autoComplete="current-category"
                        onChange={handleChange('category')}
                        onBlur={handleBlur('category')}
                        value={values.category}
                        margin="0 0 24px 0"
                        width="100%"
                        height="56px"
                        errors={errors.category && touched.category}
                      />
                      {errors.category && touched.category}
                    </MDiv>

                    <MDiv>
                      <ButtonRegister
                        width="100%"
                        height="56px"
                        onClick={() => handleSubmit()}
                      >
                        Register
                      </ButtonRegister>
                    </MDiv>
                  </>
                )}
              </Formik>
            </MDiv>
          </MItemsDiv>
        </ResponsiveContainerModal>
      </>
    )
  }

  return (
    <Container>
      <ItemsDiv>
        {LandingPage()}
        {active.modalState ? Modal() : null}
      </ItemsDiv>
    </Container>
  )
}
