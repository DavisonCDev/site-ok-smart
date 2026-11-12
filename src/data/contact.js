export const WHATSAPP_NUMBER = '5511970807941'
export const WHATSAPP_MESSAGE = 'Olá! Gostaria de saber mais sobre os serviços da OK Smart.'
export const INSTAGRAM_URL = 'https://www.instagram.com/oksmartsolutions/'

export function getWhatsAppUrl() {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
}
