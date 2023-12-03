import { Inter,Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const plusJakartaSans = Plus_Jakarta_Sans({subsets:['latin']})

export const metadata = {
  title: 'milton clone',
  description: 'Created by nidhin',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.className} bg-[#fef9f6]`}>{children}</body>
    </html>
  )
}
