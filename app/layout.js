import Authprovider from './Components/Authprovider/Authprovider'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Todo_List',
  description: 'Created by Author:Muhammad Aneer Zaman',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Authprovider>
      {children}
      </Authprovider>
      </body>
    </html>
  )
}
