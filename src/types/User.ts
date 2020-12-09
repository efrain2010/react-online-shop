export interface UserProps {
  id: number | null
  email: string
  username: string
  password: string
  name: {
    firstname: string
    lastname: string
  }
  address: {
    city: string
    street: string
    number: number | null
    zipcode: string
    geolocation: {
      lat: string
      long: string
    }
  }
  phone: string
}
