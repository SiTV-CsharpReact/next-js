import Header from '@/components/header/Header'
import Sidebar from '@/components/common/Sidebar'
import '../styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
  
      <body >

      <Sidebar/>
      <Header/>
        <div className='home-section' id="scroll-bar">
        {children}
        </div>
      
        </body>
    </html>
  )
}
