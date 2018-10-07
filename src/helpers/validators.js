import {REGEX_EMAIL} from '../constants/Regex';

export const required = (value) => (value == null ? 'Required' : undefined)

export const validateEmail = (email) => {
  if (!email) {
    return 'Email is required.'
  }
  if (!REGEX_EMAIL.test(email)) {
    return 'Invalid Email'
  }
  return undefined
}
