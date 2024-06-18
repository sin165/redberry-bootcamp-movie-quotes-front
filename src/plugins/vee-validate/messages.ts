import { configure } from 'vee-validate'
import { localize, setLocale } from '@vee-validate/i18n'
import en from '@vee-validate/i18n/dist/locale/en.json'
import ka from '@vee-validate/i18n/dist/locale/ka.json'

const locale = localStorage.getItem('locale') || 'en'
setLocale(locale)

configure({
  generateMessage: localize({
    en: {
      ...en,
      messages: {
        required: 'This field is required',
        email: 'This input is not in email format',
        min: '{field} must have at least 0:{min} symbols',
        max: '{field} must have at most 0:{max} symbols',
        confirmed: 'Passwords should match',
        image: 'The file must be an image',
        lowercase: '{field} must only contain lowercase latin characters and numbers'
      },
      names: {}
    },
    ka: {
      ...ka,
      messages: {
        required: 'გთხოვთ შეავსოთ მოცემული ველი',
        email: 'თქვენს მიერ შეყვანილი ტექსტი არ აკმაყოფილებს მეილის ფორმატს',
        min: '{field} უნდა შეიცავდეს მინიმუმ 0:{min} სიმბოლოს',
        max: '{field} უნდა შეიცავდეს მაქსიმუმ 0:{max} სიმბოლოს',
        confirmed: 'პაროლები უნდა ემთხვეოდდეს',
        image: 'არჩეული ფაილი უნდა იყოს სურათი',
        lowercase: '{field} უნდა შეიცავდეს მხოლოდ დაბალი რეგისტრის ლათინურ სიმბოლოებს და რიცხვებს'
      },
      names: {
        password: 'პაროლი',
        name: 'სახელი',
        email: 'ელ-ფოსტა'
      }
    }
  })
})
