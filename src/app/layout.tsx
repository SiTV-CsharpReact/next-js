"use client"
import Header from '@/components/header/Header'
import Sidebar from '@/components/common/Sidebar'
import '../styles/globals.css'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { useState } from 'react'


export default function RootLayout({
 
  children,
}: {
  children: React.ReactNode
}

) {
  const [darkMode,setDarkMode] = useState(false);
const paletteType = darkMode? 'dark':'light';
const theme = createTheme({
  palette:{
    mode: paletteType,
    background:{
      default:paletteType === 'light'?'#fff':'#000'
    }
  }
})
function handleThemeChange(){
  setDarkMode(!darkMode)
}
  return (
    <html lang="en" className='dark'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <body >
       
      <Sidebar/>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
        <div className='home-section' id="scroll-bar">
        {children}
        </div>
      
        </body>
        </ThemeProvider>
    </html>
  )
}
