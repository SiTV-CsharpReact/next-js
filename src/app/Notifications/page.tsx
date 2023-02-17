"use client"
import LoadingComponent from '@/layout/LoaddingComponent';
import { NotiGetModel } from '@/models/Noti/Noti';
import { Box, List, ListItem, ListItemButton, ListItemIcon, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Link from "next/link";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DraftsIcon from '@mui/icons-material/Drafts';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
const Notifications = () => {
    const [loading,setLoading] = useState(true);
    const [noti, setNoti] = useState<NotiGetModel | null>(null)
    useEffect(() => {
        axios.get(`http://10.26.7.197:8086/api/v1/notifications/058C222210/1/20`)
        .then(res=>setNoti(res.data))
        .catch(error=>{
          console.log(error);
        })
        .finally(()=> setLoading(false));},[])
        if (loading) return <LoadingComponent message="Noti"/>
        console.log(noti)
  return (
    <Box width="70%" margin="auto">
  <List>
  
  {noti?.map((not)=>(
      not.ATYPE == 3 ?
     <ListItem color="#000" key={not.AID} sx={{
      borderBottom:"1px solid #ececec",
      padding:0
     }}>
     <ListItemButton sx={{justifyContent:"space-between"}}>
       <ListItemIcon>
       <MonetizationOnIcon style={{color:"#717171", fontSize:30}}/>
       </ListItemIcon>
       <Box sx={{padding:"0px 5px"}}>
       <Typography >{not.ATITLE} </Typography>
       <Typography  fontSize={14}>{not.ACONTENT} </Typography>
       </Box>
       <Box>
        <Link href={not.AURL}>
        <ArrowForwardIcon style={{color:"#717171", fontSize:25}}/>
        <Typography  fontSize={14}>3h </Typography>
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
         <DraftsIcon style={{color:"#717171", fontSize:30}}/>
         </ListItemIcon>
         <Box sx={{padding:"0px 5px"}}>
         <Typography >{not.ATITLE} </Typography>
         <Typography  fontSize={14}>{not.ACONTENT} </Typography>
         </Box>
         <Box>
          <Link href={not.AURL}>
          <ArrowForwardIcon style={{color:"#717171", fontSize:25}}/>
          <Typography  fontSize={14}>3h </Typography>
          </Link>
         </Box>
        
       </ListItemButton>
     </ListItem>
  ))}
    
  </List>
</Box >
  )
}

export default Notifications