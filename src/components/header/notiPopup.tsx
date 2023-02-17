"use client"
import colorConfigs from "@/configs/colorConfigs";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Tooltip,
  Badge,
  styled,
  alpha,
  Switch,
  useTheme,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FilterListTwoToneIcon from "@mui/icons-material/FilterListTwoTone";
import SettingsIcon from "@mui/icons-material/Settings";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { NotiGetModel } from "@/models/Noti/Noti";
import axios from "axios";
import LoadingComponent from "@/layout/LoaddingComponent";
import DraftsIcon from '@mui/icons-material/Drafts';
import Link from "next/link";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
    "&:before": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12,
    },
    "&:after": {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));


const stylesHovertext = {
  whiteSpace:'nowrap',
  width:'425px',
  overflow:'hidden',
  textOverflow:'ellipsis',
  // '&:hover': {
  //   overflow: 'visible',
  //   whiteSpace:'normal',
  //   transition:'1s'
  // }
};

const Noti = () => {
  const [loading,setLoading] = useState(true);
  const [noti, setNoti] = useState<NotiGetModel | null>(null);
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    axios.get(`http://10.26.7.197:8086/api/v1/notifications/058C222210/1/10`)
    .then(res=>setNoti(res.data))
    .catch(error=>{
      console.log(error);
    })
    .finally(()=> setLoading(false));
//     fetch('http://10.26.7.194:8086/api/v1/notifications/058C222210/1/10',{mode: 'no-cors',credentials: 'include',
//     method: 'GET'})
// // .then((response) => response.json())
// .then((response)=> setNoti(response.json()))
  },[])
  // if (loading) return <LoadingComponent message="Noti"/>
  
 
  return (
    <>
      <Box
        sx={{
          width: "40px",
          height: "40px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxSizing: "border-box",
          marginRight: "20px",
        }}
        onClick={() => setOpen(true)}
      >
        <Tooltip title="Thông báo">
          <IconButton>
            <Badge badgeContent={10} color="error">
              <NotificationsNoneIcon
                style={{ color: "#034e95", fontSize: "30px" }}
              />
            </Badge>
          </IconButton>
        </Tooltip>
      </Box>
      <Drawer open={open} anchor={"right"} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 550,
            backgroundColor: colorConfigs.sidebar.hoverBg,
            height: "100%",
            position: "relative",
          }}
        >
          <Box>
            {/* Header */}
            <Box
              sx={{
                height: 60,
                display: "flex",
                flexFlow: "column",
                justifyContent: "space-between",
                borderColor: theme.palette.mode === "dark" ? "#fff" : "#fff", //This will not override the default color of the border.
                borderBottom: 1,
                borderStyle: "solid",
              }}
            >
              <Box>
                <Box display="flex" justifyContent="space-between">
                  <Box display="flex" paddingTop="15px" paddingLeft="10px">
                    <CloseIcon
                      style={{
                        color: "#bebebe",
                        cursor: "pointer",
                        fontWeight: "bold",
                        marginTop: 2,
                      }}
                      onClick={handleClose}
                    />

                    <Typography
                      style={{
                        fontSize: "18px",
                        fontWeight: "500",
                        color: "white",
                        paddingLeft: "12px",
                      }}
                    >
                      Thông báo
                    </Typography>
                  </Box>
                  <Box display="flex" color="#bebebe">
                    <Typography
                      style={{
                        fontSize: "18px",
                        fontWeight: "500",
                        color: "white",
                        paddingLeft: "14px",
                        paddingTop: "15px",
                      }}
                    >
                      Bật/tắt thông báo:
                    </Typography>
                    <Box paddingTop="8px">
                      <Android12Switch />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            {/* body */}
            <Box maxHeight={860} sx={{
              maxHeight:860,
              overflowY:'auto'
            }}>
        <List>
        
        {noti?.map(not=>(
            not.ATYPE == 3 ?
           <ListItem color="#fff" key={not.AID} sx={{
            borderBottom:"1px solid #fff",
            color:"#fff",
            padding:0
           }}>
           <ListItemButton sx={{justifyContent:"space-between"}}>
             <ListItemIcon>
             <MonetizationOnIcon style={{color:"#fff", fontSize:30}}/>
             </ListItemIcon>
             <Box sx={{padding:"0px 5px"}}>
             <Typography color="#fff">{not.ATITLE} </Typography>
             <Typography color="#fff" fontSize={14} sx={stylesHovertext}>{not.ACONTENT} </Typography>
             </Box>
             <Box>
              <Link href={not.AURL}>
              <ArrowForwardIcon style={{color:"#fff", fontSize:25}}/>
              <Typography color="#fff" fontSize={14}>3h </Typography>
              </Link>
             </Box>
            
           </ListItemButton>
         </ListItem>
             :  <ListItem color="#000" key={not.AID} sx={{
              borderBottom:"1px solid #ececec",
              padding:0
             }}>
             <ListItemButton sx={{justifyContent:"space-between"}}>
               <ListItemIcon>
               <DraftsIcon  style={{color:"#fff", fontSize:30}}/>
               </ListItemIcon>
               <Box sx={{padding:"0px 5px"}}>
               <Typography color="#fff">{not.ATITLE} </Typography>
               <Typography color="#fff" fontSize={14}>{not.ACONTENT} </Typography>
               </Box>
               <Box>
                <Link href={not.AURL}>
                <ArrowForwardIcon style={{color:"#fff", fontSize:25}}/>
                <Typography color="#fff" fontSize={14}>3h </Typography>
                </Link>
               </Box>
              
             </ListItemButton>
           </ListItem>
        ))}
          
        </List>
      </Box >
            {/* Footer */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                height: 40,
                backgroundColor: colorConfigs.sidebar.colorSBRightContent,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <Link href="/Notifications">
                <Typography color="#fff">
                 Xem tất cả
                 
                </Typography></Link>
               
              </Box>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Noti;
