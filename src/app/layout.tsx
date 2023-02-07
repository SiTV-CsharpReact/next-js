"use client"
import Header from '@/components/header/Header'
import Sidebar from '@/components/sidebar/Sidebar'
import '../styles/globals.css'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { Suspense, useState } from 'react'
import '../configs/configLanguage/i18n'
import Box from "@mui/material/Box";

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
const loadingLanguage = (
  <div>
    <span>
      Loading...
    </span>
  </div>
)
  return (
    <html lang="VI" className='dark'>
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
        <Box className='home-section' id="scroll-bar">
        {/* <Box component="main" sx={{ flexGrow: 1, p: 3 }}> */}
        {children}
        </Box>
      
        </body>
        </ThemeProvider>
    </html>
  )
}
