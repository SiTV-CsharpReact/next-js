'use client'
import { alpha, Checkbox, createTheme, IconButton, InputBase, Link, styled, Tooltip, Typography } from "@mui/material"
import Box from "@mui/material/Box"
import * as React from 'react';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import TocIcon from '@mui/icons-material/Toc';
import Account from "./accountPopup";
import Noti from "./notiPopup";
import SearchIcon from '@mui/icons-material/Search';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const CustomBox = styled(Box)(({ theme }) => ({
  color: theme.status.danger,
  '&.Mui-checked': {
    color: theme.status.danger,
  },
}));

const BoxIcon = styled(Box)(({ theme }) => ({
  width: '40px',
  height: '40px',
  display: 'flex',
  justifyContent: 'center',
  border: '1px solid #034e95',
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


const Header = () => {

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box display='flex' position='fixed' justifyContent="space-between" padding='10px 18px' className="header-fpts">
      <Box className="header-left flex" >
        <Box>
          
        </Box>
        <Link href="/" sx={
          {
            display: 'flex',
            fontStyle: 'italic',
            textDecoration: 'none',
            fontWeight: 'bold',
            color: 'black'
          }
        } >
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

        <BoxIcon>
          <Tooltip title="Bảng giá">
            <IconButton >
              <InsertChartIcon style={{ color: '#034e95', fontSize: '30px' }} />
            </IconButton>
          </Tooltip>

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