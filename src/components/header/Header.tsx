'use client'
import { alpha, Button, IconButton, InputBase, InputLabel, Menu, MenuItem, Paper, Select, SelectChangeEvent, styled, Switch, Tooltip, Typography, useTheme } from "@mui/material"
import Box from "@mui/material/Box"
import * as React from 'react';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import TocIcon from '@mui/icons-material/Toc';
import Account from "./accountPopup";
import Noti from "./notiPopup";
import SearchIcon from '@mui/icons-material/Search';
import Link from "next/link";
import LanguageIcon from '@mui/icons-material/Language';
import { createContext, useContext, useState } from "react";
import { useTranslation } from "react-i18next";
import iconLanguageVN from "../../../public/vietnam.png"
import iconLanguageEN from "../../../public/english.png"
import Image from 'next/image'
interface Props{
  darkMode:boolean;
  handleThemeChange: ()=>void;
}

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#fff' : '#000',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#000' : '#fff',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#034e95',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

const BoxIcon = styled(Box)(({ theme }) => ({
  width: '40px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  // borderColor: '#034e95',//This will not override the default color of the border.
  border: 1,
  borderStyle: "solid",
  borderColor: theme.palette.mode === 'dark' ? '#fff' :'#034e95',
  // border: '1px solid background.default',
  borderRadius: '5px',
  alignItems: 'center',
  boxSizing: 'border-box',
  marginRight: '15px'
}));


// const BoxIcon = createTheme({
//   status: {
 
//   },
// });

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  right:10,
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  border: '1px solid #034e95',
  borderRadius: 5,
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    paddingLeft: 15,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
const ColorModeContext = createContext({ toggleColorMode: () => {} });

const Header = ( {darkMode,handleThemeChange}:Props) => {

  //show language
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openPopupLanguage = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseLanguage = () => {
    setAnchorEl(null);
  };



  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const {i18n} = useTranslation(['home','report']);
  const theme = useTheme(); 
  const colorMode = useContext(ColorModeContext);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const changeLanguage = (lng : 'EN'|'VI') => {
    i18n.changeLanguage(lng);
    handleCloseLanguage();
  }
  return (
    <Box sx={
      {
        bgcolor:theme.palette.mode === 'dark' ? '#000' :'#fff',
        padding:'10px 18px',
        position:'fixed',
        display:'flex',
        justifyContent: 'space-between',
        zIndex:100,
        // borderColor: theme.palette.mode === 'dark' ? '#fff' :'#034e95',//This will not override the default color of the border.
        // borderBottom: 1,
        // borderStyle: "solid",

      }
    } padding='10px 18px' className="header-fpts">
      <Box className="header-left flex" >
     
       
        <Link href="/" className="flex italic">
          <Typography fontSize="24px" fontWeight='bold'>
            Ez</Typography>
          <Typography color="#034e95" fontSize="24px" fontWeight='bold'>
            Trade
          </Typography>
        </Link>

      </Box>
      <Box className="header-center">
  
      </Box>
      <Box className="header-right" display='flex'>
      <Box>
      <Tooltip title="Ngôn ngữ">
      <IconButton    id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
 
      <LanguageIcon style={{ color: '#034e95', fontSize: '25px' }} />
            </IconButton>
       
      </Tooltip>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openPopupLanguage}
        onClose={handleCloseLanguage}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem  onClick={()=> changeLanguage('VI')} ><Image
        alt="Account"
        src={iconLanguageVN}
        width={35}
        height={35}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      /><Typography paddingLeft={1}>Tiếng việt</Typography></MenuItem>
   <MenuItem  onClick={()=> changeLanguage('EN')} value="Tiếng Anh"><Image
        alt="Account"
        src={iconLanguageEN}
        width={35}
        height={35}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      /><Typography paddingLeft={1}>Tiếng anh</Typography>
      </MenuItem>
     
      </Menu>
      {/* <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
    
      <Paper elevation={3} />
    </Box> */}
      </Box>
      <Box>
          {/* <Button>
          <Image
        alt="Account"
        src={iconLanguageVN}
        width={35}
        height={35}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />
          </Button> */}
        {/* <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={age}
          onChange={handleChange}
          label="Age"
        >
        
          <MenuItem onClick={()=> changeLanguage('VI')} value="Tiếng Việt"></MenuItem>
          <MenuItem  onClick={()=> changeLanguage('EN')} value="Tiếng Anh">Tiếng anh<Image
        alt="Account"
        src={iconLanguageEN}
        width={35}
        height={35}
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      /></MenuItem>
     
        </Select> */}
      <Tooltip title="Giao diện">
      <MaterialUISwitch checked={darkMode} onChange={handleThemeChange}/>
      </Tooltip>

    </Box>
        <BoxIcon>
        <Link href="Marketwatch">
          <Tooltip title= "Bảng giá">
            <IconButton >
              <InsertChartIcon style={{ color: '#034e95', fontSize: '30px' }} />
            </IconButton>
          </Tooltip>
          </Link>
        </BoxIcon>
        <BoxIcon>
          <Tooltip title="Chứng khoán phái sinh">
            <IconButton>
              <ShuffleIcon style={{ color: 'green', fontSize: '30px' }} />
            </IconButton>
          </Tooltip>

        </BoxIcon>

        <Search sx={{marginLeft:'0px !important',marginRight:'15px !important'}}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Tìm kiếm..."
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <BoxIcon>
          <Tooltip title="Danh sách">
            <IconButton>
              <TocIcon style={{ color: '#034e95', fontSize: '30px' }} />
            </IconButton>
          </Tooltip>

        </BoxIcon>
        <Noti />
        <Account />

      </Box>
    </Box>
  )
}

export default Header