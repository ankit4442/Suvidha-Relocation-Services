export const COMPANY = {
  name: 'Suvidha Relocation Services',
  shortName: 'Suvidha',
  tagline: 'Trusted Packers & Movers for Stress-Free Relocation',
  email: 'suvidharelocationservices@gmail.com',
  phonePrimary: '9779682143',
  phoneSecondary: '9779782143',
}

// Digits only, used for tel: and wa.me links
export const phoneLink = (num) => `+91${num}`
export const whatsappLink = (num) =>
  `https://wa.me/91${num}?text=${encodeURIComponent(
    'Hi Suvidha Relocation Services, I would like to get a quote for relocation.',
  )}`
