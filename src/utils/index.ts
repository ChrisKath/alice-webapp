import { dialog, modal, notice } from './addon'

export { Hexadecimal } from './hex'
export { queryString } from './qs'

export class xs {
  static readonly alert = dialog
  static readonly modal = modal
  static readonly notice = notice
}

export function isIE() {
  return new RegExp('MSIE|Trident').test(navigator.userAgent)
}

export function generateId(radix: number = 16) {
  return Math.random().toString(radix).slice(2)
}

export function scrollOff(input: boolean = true) {
  document.body.style.overflowY = input ? 'hidden' : 'auto'
}

export function toCapitalize(input: string) {
  return input.charAt(0).toUpperCase() + input.slice(1)
}
