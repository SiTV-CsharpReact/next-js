"use client"
import Header from '@/components/header/Header'
import Sidebar from '@/components/sidebar/Sidebar'
import '../styles/globals.css'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import { Suspense, useEffect, useState } from 'react'
import '../configs/configLanguage/i18n'
import Box from "@mui/material/Box";
import { Provider } from 'react-redux';
import { store_0001 } from '@/store/Store'

export default function RootLayout({
 
  children,
}: {
  children: React.ReactNode
}

) {
  const [darkMode,setDarkMode] = useState(true);
const paletteType = darkMode? 'dark':'light';
useEffect(() => {
  const themeType = localStorage.getItem("color") || "dark";
  if (themeType != "dark") {
    setDarkMode(false);
  }
}, []);
const theme = createTheme({
    palette:{
    mode: paletteType,
    background:{
      default:paletteType === 'light'?'#fff':'#000'
    }}
  // palette: {
  //   type: darkTheme ? "dark" : "light"
  //  }
  })

// const theme = createTheme({
//   palette:{
//     mode: paletteType,
//     background:{
//       default:paletteType === 'light'?'#fff':'#000'
//     }
//   }
// })
function handleThemeChange(){
  localStorage.setItem("color", darkMode ? "light" : "dark");
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
    <html lang="VI" >
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
