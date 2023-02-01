import colorConfigs from '@/configs/colorConfigs'
import { Button, Drawer, Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider,Link, IconButton, Tooltip } from '@mui/material'
import React from 'react'
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { color } from "@mui/system";
import KeyIcon from '@mui/icons-material/Key';
import LockIcon from '@mui/icons-material/Lock';
import RestoreIcon from '@mui/icons-material/Restore';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import RateReviewIcon from '@mui/icons-material/RateReview';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FilterListTwoToneIcon from '@mui/icons-material/FilterListTwoTone';
import SettingsIcon from '@mui/icons-material/Settings';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Noti = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <>
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
}} onClick={() => setOpen(true)}>
  <Tooltip title="Thông báo">
  <IconButton>
  <NotificationsIcon style={{color:'#034e95',fontSize:'30px'}}/>
  </IconButton>
</Tooltip>

</Box>
      <Drawer open={open} anchor={"right"} onClose={() => setOpen(false)} >
      <Box
          sx={{
            width:550,
            backgroundColor:colorConfigs.sidebar.hoverBg,
            height:'100%',
            position: 'relative',
            
          }}>
        <Box>
          {/* Header */}
        <Box sx={{
          
          height:90,
          padding:'8px 10px'
        }}>
     
          <Box  paddingTop="5px">
      
          <Box display='flex' justifyContent="space-between">
          <Box display='flex'>
          <CloseIcon style={{ color: '#fff',cursor:'pointer',fontWeight:'bold' }}  onClick={handleClose}/>
   
   <Typography style={{fontSize:'18px', fontWeight:'500', color:'white',paddingLeft:'10px'}}>
  Tin nhắn
   </Typography>
          </Box>
    
            
 
            <Box display='flex' color="#bebebe">
            <Tooltip title="Thêm">
            <IconButton>
  <FilterListTwoToneIcon style={{color:'#bebebe'}}/>  
  </IconButton>
</Tooltip>
<Tooltip title="Thiết lập">
<IconButton>
            <SettingsIcon/>
            </IconButton>
            </Tooltip>
            <Tooltip title="Thêm">
            <IconButton>
            <MoreVertIcon/>
            </IconButton>  
            </Tooltip>
     
            </Box>
           
          </Box>
          
          </Box>
        </Box>
   {/* body */}
        <Box sx={{
          backgroundColor:colorConfigs.sidebar.colorSBRightContent,}}>
      <nav aria-label="main mailbox folders">
        <List style={{color:"#fff"}} disablePadding>
          <ListItem disablePadding style={{borderBottom:'1px solid #2F2F2F'}} >
            <ListItemButton>
              <ListItemIcon sx={{
              borderRadius:"4px",
              backgroundColor: colorConfigs.sidebar.colorDrawerBgIcon,
              height:24,
              width:24,
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              color:"white",
              minWidth:24
              }}>
                <KeyIcon style={{color:"#fff",fontSize:"18px"}}/>
              </ListItemIcon>
              <ListItemText primary="Thay đổi mật khẩu" className="pl-2"/>
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding style={{borderBottom:'1px solid #2F2F2F'}}>
            <ListItemButton>
              <ListItemIcon sx={{
              borderRadius:"4px",
              backgroundColor: colorConfigs.sidebar.colorDrawerBgIcon,
              height:24,
              width:24,
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              color:"white",
              minWidth:24
              }}>
           <LockIcon style={{color:"#fff",fontSize:"18px"}}/>
              </ListItemIcon>
              <ListItemText primary="Quản trị Token" className="pl-2"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding style={{borderBottom:'1px solid #2F2F2F'}}>
            <ListItemButton>
              <ListItemIcon sx={{
              borderRadius:"4px",
              backgroundColor: colorConfigs.sidebar.colorDrawerBgIcon,
              height:24,
              width:24,
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              color:"white",
              minWidth:24
              }}>
                <RestoreIcon style={{color:"#fff",fontSize:"18px"}}/>
              </ListItemIcon>
              <ListItemText primary="Hoạt động gần đây" className="pl-2"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding style={{borderBottom:'1px solid #2F2F2F'}}>
            <ListItemButton>
              <ListItemIcon sx={{
              borderRadius:"4px",
              backgroundColor: colorConfigs.sidebar.colorDrawerBgIcon,
              height:24,
              width:24,
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              color:"white",
              minWidth:24
              }}>
                <LockOpenIcon style={{color:"#fff",fontSize:"18px"}}/>
              </ListItemIcon>
              <ListItemText primary="Cài đặt mật khẩu giao dịch" className="pl-2"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding style={{borderBottom:'1px solid #2F2F2F'}}>
            <ListItemButton>
              <ListItemIcon sx={{
              borderRadius:"4px",
              backgroundColor: colorConfigs.sidebar.colorDrawerBgIcon,
              height:24,
              width:24,
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              color:"white",
              minWidth:24
              }}>
                <HelpOutlineIcon style={{color:"#fff",fontSize:"18px"}}/>
              </ListItemIcon>
              <ListItemText primary="Hướng dẫn xóa cache" className="pl-2"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding style={{borderBottom:'1px solid #2F2F2F'}}>
            <ListItemButton>
              <ListItemIcon sx={{
              borderRadius:"4px",
              backgroundColor: colorConfigs.sidebar.colorDrawerBgIcon,
              height:24,
              width:24,
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              color:"white",
              minWidth:24
              }}>
                <RateReviewIcon style={{color:"#fff",fontSize:"18px"}}/>
              </ListItemIcon>
              <ListItemText primary="Góp ý" className="pl-2"/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding style={{borderBottom:'1px solid #2F2F2F'}}>
            <ListItemButton>
              <ListItemIcon sx={{
              borderRadius:"4px",
              backgroundColor: colorConfigs.sidebar.colorDrawerBgIcon,
              height:24,
              width:24,
              display:"flex",
              justifyContent:"center",
              alignItems:"center",
              color:"white",
              minWidth:24
              }}>
                <GTranslateIcon style={{color:"#fff",fontSize:"18px"}}/>
              </ListItemIcon>
              <ListItemText primary="Hỗ trợ ngôn ngữ:" className="pl-2"/>
              <Link display="flex" sx={{
                textDecoration: "none"
                }}>
              <ListItemText primary="Tiếng việt" className="pl-2"/>
              <ListItemText primary="|" className="pl-2"/>
              <ListItemText primary="Tiếng anh" className="pl-2"/>
              </Link>
            
            </ListItemButton>
          </ListItem>
     
        </List>
      </nav>
     
      </Box>
      
      {/* Footer */}
      <Box sx={{
        position:'absolute',
        bottom: 0,
        width: '100%',
        height: 40,
        backgroundColor: colorConfigs.sidebar.colorSBRightContent
      }}>
        <Box sx={{
        position:'relative',     
        height: '100%',
        width: '100%',
        display:'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer'
        }}>
          <Typography color='#fff'>
          Thoát
       
          <LogoutIcon style={{color:colorConfigs.sidebar.colorSB,fontSize:"22px",marginLeft:'5px'}}/>
          </Typography>
       
          </Box>
          </Box>
       </Box>
         </Box>
      </Drawer>
    </>
  )
}

export default Noti