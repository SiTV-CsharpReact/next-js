'use client'
import { alpha, Button, createTheme, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, InputBase, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, SwipeableDrawer, Tooltip, Typography } from "@mui/material"
import Box from "@mui/material/Box"

import * as React from 'react';
import colorConfigs from "@/configs/colorConfigs";

import InsertChartIcon from '@mui/icons-material/InsertChart';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import TocIcon from '@mui/icons-material/Toc';
import NotificationsIcon from '@mui/icons-material/Notifications';
import accountPopup from "./accountPopup";
import Account from "./accountPopup";
import Noti from "./notiPopup";
import SearchIcon from '@mui/icons-material/Search';
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
    <Box className="header-fpts flex p-2.5 justify-between">
      <Box className="header-left flex" >

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

        <Box sx={{
          width: '40px',
          height: '40px',
          display: 'flex',
          justifyContent: 'center',
          border: '1px solid #034e95',
          borderRadius: '5px',
          alignItems: 'center',
          boxSizing: 'border-box',
          marginRight: '10px'
        }}>
          <Tooltip title="Bảng giá">
            <IconButton>
              <InsertChartIcon style={{ color: '#034e95', fontSize: '30px' }} />
            </IconButton>
          </Tooltip>

        </Box>
        <Box sx={{
          width: '40px',
          height: '40px',
          display: 'flex',
          justifyContent: 'center',
          border: '1px solid #034e95',
          borderRadius: '5px',
          alignItems: 'center',
          boxSizing: 'border-box',
          marginRight: '10px'
        }}>
          <Tooltip title="Chứng khoán phái sinh">
            <IconButton>
              <ShuffleIcon style={{ color: 'green', fontSize: '30px' }} />
            </IconButton>
          </Tooltip>

        </Box>

        <Search sx={{marginLeft:'0px !important',marginRight:'10px !important'}}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Tìm kiếm..."
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Box sx={{
          width: '40px',
          height: '40px',
          display: 'flex',
          justifyContent: 'center',
          border: '1px solid #034e95',
          borderRadius: '5px',
          alignItems: 'center',
          boxSizing: 'border-box',
          marginRight: '10px'
        }}>
          <Tooltip title="Danh sách">
            <IconButton>
              <TocIcon style={{ color: '#034e95', fontSize: '30px' }} />
            </IconButton>
          </Tooltip>

        </Box>
        <Noti />
        <Account />

      </Box>
    </Box>
  )
}

export default Header