'use client'
import { Button, createTheme, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, IconButton, Link, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer, Tooltip, Typography } from "@mui/material"
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
// const theme = createTheme({
//   palette: {
//     primary: {
     
//     },
//     secondary: {
  
//     },
// })
const Header = () => {
 
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box className="header-fpts flex p-2 justify-between">
     <Box className="header-left flex" >
  
        <Link href="#" sx={
          {
            display: 'flex',
            fontStyle:'italic',
            textDecoration: 'none',
            fontWeight: 'bold',
            color:'black'
          }
        } >
        <Typography  fontSize="24px" fontWeight='bold'> 
      Ez</Typography>
          <Typography color= "#034e95"  fontSize="24px" fontWeight='bold'>
      Trade
      </Typography>
        </Link>
     
     </Box>
     <Box className="header-center">
       
</Box>
<Box className="header-right" display='flex'>

<Box sx={{
  width:'40px',
  height:'40px',
  display:'flex',
  justifyContent:'center',
  border:'1px solid #034e95',
  borderRadius:'5px',
  alignItems: 'center',
  boxSizing: 'border-box', 
   marginRight: '10px'
}}>
   <Tooltip title="Bảng giá">
  <IconButton>
  <InsertChartIcon style={{color:'#034e95',fontSize:'30px'}}/>
  </IconButton>
</Tooltip>

</Box>
<Box sx={{
  width:'40px',
  height:'40px',
  display:'flex',
  justifyContent:'center',
  border:'1px solid #034e95',
  borderRadius:'5px',
  alignItems: 'center',
  boxSizing: 'border-box',
  marginRight: '10px'
}}>
  <Tooltip title="Chứng khoán phái sinh">
  <IconButton>
  <ShuffleIcon style={{color:'green',fontSize:'30px'}}/>
  </IconButton>
</Tooltip>

</Box>
<Box sx={{
  width:'40px',
  height:'40px',
  display:'flex',
  justifyContent:'center',
  border:'1px solid #034e95',
  borderRadius:'5px',
  alignItems: 'center',
  boxSizing: 'border-box',
  marginRight: '10px'
}}>
  <Tooltip title="Danh sách">
  <IconButton>
  <TocIcon style={{color:'#034e95',fontSize:'30px'}}/>
  </IconButton>
</Tooltip>

</Box>
<Noti/>
<Account/>

</Box>
    </Box>
  )
}

export default Header