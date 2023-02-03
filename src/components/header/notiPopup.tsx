import colorConfigs from '@/configs/colorConfigs'
import { Drawer, Box, Typography, IconButton, Tooltip, Badge, styled, alpha } from '@mui/material'
import React from 'react'
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FilterListTwoToneIcon from '@mui/icons-material/FilterListTwoTone';
import SettingsIcon from '@mui/icons-material/Settings';
import MoreVertIcon from '@mui/icons-material/MoreVert';
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
const Noti = () => {

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box sx={{
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        marginRight: '20px'
      }} onClick={() => setOpen(true)}>

        <Tooltip title="Thông báo">
          <IconButton>
            <Badge badgeContent={9} color="error">
              <NotificationsNoneIcon style={{ color: '#034e95', fontSize: '30px' }} />
            </Badge>
          </IconButton>

        </Tooltip>

      </Box>
      <Drawer open={open} anchor={"right"} onClose={() => setOpen(false)} >
        <Box
          sx={{
            width: 550,
            backgroundColor: colorConfigs.sidebar.hoverBg,
            height: '100%',
            position: 'relative',

          }}>
          <Box>
            {/* Header */}
            <Box sx={{
              height: 90,
              display:'flex',
              flexFlow:'column',
              justifyContent:'space-between'
            }}>

              <Box >

                <Box display='flex' justifyContent="space-between">
                  <Box display='flex' paddingTop="12px" paddingLeft="10px">
                    <CloseIcon style={{ color: '#bebebe', cursor: 'pointer', fontWeight: 'bold',marginTop:2 }} onClick={handleClose} />

                    <Typography style={{ fontSize: '18px', fontWeight: '500', color: 'white', paddingLeft: '12px' }}>
                      Tin nhắn
                    </Typography>
                  </Box>
                  <Box display='flex' color="#bebebe">
                    <Tooltip title="Thêm">
                      <IconButton>
                        <FilterListTwoToneIcon style={{ color: '#bebebe' }} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Thiết lập">
                      <IconButton>
                        <SettingsIcon style={{ color: '#bebebe' }} />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Thêm">
                      <IconButton>
                        <MoreVertIcon style={{ color: '#bebebe' }} />
                      </IconButton>
                    </Tooltip>

                  </Box>

                </Box>

              </Box>
              <Box display='flex' justifyContent='center' alignContent='center'>
                <Box sx={{
                  color: '#034e95',
                  borderBottom:'2px solid #034e95',
                  width: '50%',
                  textAlign: 'center',
                  fontSize: '16px', fontWeight: '500', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
                }} >
                  Quan Tâm
                </Box>
                <Box sx={{
                  borderBottom:'2px solid #9d9d9d',
                  color: '#9d9d9d',
                  width: '50%',
                  textAlign: 'center',
                  fontSize: '16px', fontWeight: '500', alignItems: 'center', justifyContent: 'center', cursor: 'pointer'
                }} >
                  Khác
                </Box>
              </Box>
            </Box>
            {/* body */}


            {/* Footer */}

          </Box>


        </Box>

      </Drawer>
    </>
  )
}

export default Noti