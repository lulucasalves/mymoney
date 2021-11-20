import * as Yup from 'yup'

export const registerSchema = Yup.object().shape({
  name: Yup.string().required(),
  price: Yup.string().required().matches(/^\d+$/),
  status: Yup.string().required().max(7),
  category: Yup.string().required()
})
