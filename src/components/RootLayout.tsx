import '../app/globals.css'
import type { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

export default async function MainLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
