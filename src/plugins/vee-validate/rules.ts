import { defineRule } from 'vee-validate'
import { required, min, max, email, confirmed, image } from '@vee-validate/rules'

defineRule('required', required)
defineRule('min', min)
defineRule('max', max)
defineRule('email', email)
defineRule('confirmed', confirmed)
defineRule('image', image)

defineRule('lowercase', (value: any) => {
  return /^[a-z0-9]*$/.test(value)
})
