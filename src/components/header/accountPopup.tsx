import colorConfigs from '@/configs/colorConfigs'
import { Button, Drawer, Box, Typography, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Divider,Link } from '@mui/material'
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

const Account = () => {
    const [open, setOpen] = useState(false);
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <>
     <Box display='flex' onClick={() => setOpen(true)} style={{cursor:'pointer'}}>
          <AccountCircleIcon  style={{fontSize:'42px', color:colorConfigs.sidebar.colorSB}}/>  
            <Box  paddingTop="2px">
            <Typography style={{fontSize:'14px', fontWeight:'600', color:colorConfigs.sidebar.colorSB}}>
            Tạ Văn Sĩ
            </Typography>
            <Typography style={{fontSize:'12px', color:colorConfigs.sidebar.colorSB,padding:'unset'}} >
           058C222210
            </Typography>
            </Box>
          </Box>
      <Drawer open={open} anchor={"right"} onClose={() => setOpen(false)} >
      <Box
          sx={{
            width:385,
            backgroundColor:colorConfigs.sidebar.colorSBRight,
            height:'100%',
            position: 'relative',
            
          }}>
        <Box>
          {/* Header */}
        <Box sx={{
          backgroundColor:colorConfigs.sidebar.colorSB,
          height:100,
          padding:'6px 10px'
        }}>
          <Box >
           <CloseIcon style={{ color: '#fff',cursor:'pointer',fontWeight:'bold' }}  onClick={handleClose}/>
        
          </Box>
          <Box display='flex'justifyContent="space-between" paddingTop="5px">
      
          <Box display='flex'>
          <AccountCircleIcon  style={{fontSize:'52px', color:'white'}}/>  
            <Box  paddingTop="5px">
            <Typography style={{fontSize:'16px', fontWeight:'600', color:'white'}}>
            Tạ Văn Sĩ
            </Typography>
            <Typography style={{fontSize:'14px', color:'white',padding:'unset'}} >
           058C222210
            </Typography>
            </Box>
         
          </Box>
          <Box >
             <Box style={{fontSize:'10px',border:'1px solid #BEBEBE',padding:'2px 5px', color:'white',borderRadius:'2px',cursor:'pointer'}}>
              Chi tiết
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

export default Account