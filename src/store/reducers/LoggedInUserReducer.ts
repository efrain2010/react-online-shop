import { UserProps } from '../../types/User'

const initialState = {
  id: null,
  email: '',
  username: '',
  password: '',
  name: {
    firstname: '',
    lastname: '',
  },
  address: {
    city: '',
    street: '',
    number: null,
    zipcode: '',
    geolocation: {
      lat: '',
      long: '',
    },
  },
  phone: '',
}

const userReducer = (
  state: UserProps = initialState,
  action: { type: string }
) => {
  switch (action.type) {
    default:
      return state
  }
}

export default userReducer
