import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import HistoryIcon from '@mui/icons-material/History';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SettingsIcon from '@mui/icons-material/Settings';
import { useTranslation } from "react-i18next";
import '../../styles/sidebar.css'
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import colorConfigs from '@/configs/colorConfigs';
import CloseIcon from "@mui/icons-material/Close";
import { useState } from 'react';
const ListSideBar = styled(ListItem)(({ theme }) => ({
  paddingLeft:0

}));

export default function Sidebar() {
  const {t} = useTranslation(['home','report']);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box className="sidebar close">
      <Box       
        onClick={() => setOpen(true)}
        style={{ cursor: "pointer" }}
      >
        <MenuIcon  style={{
                    margin:14,
                    fontSize:30,
                    color: "#fff",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}/>
       
      </Box>     .
      <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
        <Box
          sx={{
           
            backgroundColor: colorConfigs.sidebar.colorSBRight,
            height: "100%",
           
          }}
        >
          <Box>
            {/* Header */}
            <Box
              sx={{
                backgroundColor: colorConfigs.sidebar.colorSB,
                height: 60,
                padding: "6px 10px",
              }}
            >
              <Box>
                <CloseIcon
                  style={{
                    color: "#fff",
                    cursor: "pointer",
                    fontWeight: "bold",
                    float: "right"
                  }}
                  onClick={handleClose}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                paddingTop="5px"
              >
              
                
              </Box>
            </Box>
            {/* body */}
            <Box
              sx={{
                backgroundColor: colorConfigs.sidebar.colorSBRightContent,
              }}
            >
              <nav aria-label="main mailbox folders">
                <List style={{ color: "#fff" }} disablePadding>
                  <ListItem
                    disablePadding
                    style={{ borderBottom: "1px solid #2F2F2F" }}
                  >
                    <ListItemButton>
                   
                     <Link href="/">Trang chủ</Link>
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem
                    disablePadding
                    style={{ borderBottom: "1px solid #2F2F2F" }}
                  >
                    <ListItemButton>
                   
                    <Link href="/BCTS">Báo cáo tài sản</Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    disablePadding
                    style={{ borderBottom: "1px solid #2F2F2F" }}
                  >
                    <ListItemButton>
                    
                    <Link href="/BCBDTSR">Báo cáo biến động tài sản ròng</Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    disablePadding
                    style={{ borderBottom: "1px solid #2F2F2F" }}
                  >
                    <ListItemButton>
                    
                    <Link href="/LSDL">Lịch sử đặt lệnh</Link>
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Box>

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
                <Typography color="#fff">
                  Thoát
               
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Drawer>
      </Box>
  //    <Box className="sidebar close">
  //   <Box className="logo-details" >
  //     <MenuIcon  style={{ color: '#fff' }} className="bx-menu"/>
  //     <span className="logo_name">CodingLab</span>ListSideBar
  //   </Box>
  //   <List  className="nav-links">
  //     <ListSideBar>
  //     <Box className="iocn-link">
        
  //          <HistoryIcon style={{ color: '#fff' }}/>
         

   
  //       </Box>
  //       <List className="sub-menu">
  //       <ListSideBar><Link href="/Report">{t('report:menu.REPORT_LSDL')}</Link></ListSideBar>
  //         <ListSideBar><Link href="/Report">{t('report:menu.REPORT_LSKL')}</Link></ListSideBar>
  //         <ListSideBar><Link href="/Report">{t('menu.REPORT_LCKTT')}</Link></ListSideBar>
  //         </List>
  //         </ListSideBar>
  //     <ListSideBar>
  //       <Box className="iocn-link">
     
  //          <AttachMoneyIcon style={{ color: '#fff' }}/>
      
  
     
  //       </Box>
  //       <List className="sub-menu">
  //         <ListSideBar><Link href="#">Chuyển tiền</Link></ListSideBar>
  //         <ListSideBar><Link href="#">Mẫu chuyển tiền</Link></ListSideBar>
  //         <ListSideBar><Link href="#">Chuyển tiền ký quỹ CK phái sinh</Link></ListSideBar>
  //         <ListSideBar><Link href="#">Lịch sử chuyển tiền</Link></ListSideBar>
  //         <ListSideBar><Link href="#">Tiền cho vay - EzSaving</Link></ListSideBar>
  //         <ListSideBar><Link href="#">Tất toán tiền cho vay</Link></ListSideBar>
  //         <ListSideBar><Link href="#">Danh sách hợp đồng cho vay</Link></ListSideBar>
  //         <ListSideBar><Link href="#">Lịch sử ứng trước tiền bán CK</Link></ListSideBar>
  //         <ListSideBar><Link href="#">Ứng trước tiền cổ tức</Link></ListSideBar>
  //         <ListSideBar><Link href="#">Lịch sử ứng trước tiền cổ tức</Link></ListSideBar>
  //       </List>
  //     </ListSideBar>
  //     <ListSideBar>
  //       <Box className="iocn-link">
         
  //         <AttachMoneyIcon style={{ color: '#fff' }}/>
      
     
  
  //       </Box>
  //       <List className="sub-menu">
       
  //         <ListSideBar><Link href="#">Lịch sử bán CK lô lẻ</Link></ListSideBar>
  //         <ListSideBar><Link href="#">Thực hiền quyền</Link></ListSideBar>
  //         <ListSideBar><Link href="#">Đặt lệnh điều kiện</Link></ListSideBar>     
  //         <ListSideBar><Link href="#">Sổ lệnh điều kiện</Link></ListSideBar>
  //         <ListSideBar><Link href="#">Lưu ký trực tuyến</Link></ListSideBar>
  //       </List>
  //     </ListSideBar>
  //     <ListSideBar>
    
  //       <AttachMoneyIcon style={{ color: '#fff' }}/>
  
      
  //       <List className="sub-menu">
  //       <ListSideBar><Link href="#">Báo cáo tổng hợp số dư giao dịch</Link></ListSideBar>
  //         <ListSideBar><Link href="#">Báo cáo tài sản</Link></ListSideBar>
  //         <ListSideBar><Link href="#">Báo cáo biến động tài sản ròng</Link></ListSideBar>     
  //         <ListSideBar><Link href="#">Báo cáo lãi lỗ thực hiện</Link></ListSideBar>
  //         <ListSideBar><Link href="#">Báo cáo tổng hợp giao dịch theo mã chứng khoán</Link></ListSideBar>
  //         <ListSideBar><Link href="#">Số dư chứng khoán</Link></ListSideBar>
  //         <ListSideBar><Link href="#">Số dư tiền</Link></ListSideBar>
  //         <ListSideBar><Link href="#">Sao kê chứng khoán</Link></ListSideBar>     
  //         <ListSideBar><Link href="#">Sao kê tiền</Link></ListSideBar>
  //         <ListSideBar><Link href="#">Tra cứu phí lưu ký</Link></ListSideBar>
  //         <ListSideBar><Link href="#">Tra cứu tình trạng chứng quyền</Link></ListSideBar>
  //         <ListSideBar><Link href="#">Tra cứu biểu phí</Link></ListSideBar>
  //       </List>
  //     </ListSideBar>
  //     <ListSideBar>
       
  //         <AutoStoriesIcon style={{ color: '#fff' }}/>
    
  //         <List className="sub-menu">
  //         <ListSideBar><Link className="link_name" href="#">TƯ VẤN ĐẦU TƯ</Link></ListSideBar>
       
  //       </List>
       
       
  //     </ListSideBar>
  //     <ListSideBar>
  //       <Box className="iocn-link">
        
  //           <SupportAgentIcon style={{ color: '#fff' }}/>
       
      
         
  //       </Box>
  //       <List className="sub-menu">
  //         <ListSideBar><Link className="link_name" href="#">Hỗ trợ</Link></ListSideBar>
  //         <ListSideBar><Link href="#">Sản phẩm dịch vụ trực tuyến</Link></ListSideBar>
  //         <ListSideBar><Link href="#">Hướng dẫn Nhà đầu tư</Link></ListSideBar>
  //         <ListSideBar><Link href="#">Sản phẩm dịch vụ cho Tổ chức</Link></ListSideBar>
  //         <ListSideBar><Link href="#">Hướng dẫn sử dụng dịch vụ</Link></ListSideBar>
  //       </List>
  //     </ListSideBar>
    
  
   
  //     <ListSideBar>
  //       <Box className="profile-details">
  //       <ListSideBar>
  //       <Box className="icon-link-down">
         
  //           <SettingsIcon style={{ color: '#fff' }}/>
         
        
       
  //       </Box>
  //       <List className="sub-menu blank">
       
  //         <ListSideBar><Link href="#">Sản phẩm dịch vụ trực tuyến</Link></ListSideBar>
  //         <ListSideBar><Link href="#">Hướng dẫn Nhà đầu tư</Link></ListSideBar>
  //         <ListSideBar><Link href="#">Sản phẩm dịch vụ cho Tổ chức</Link></ListSideBar>
  //         <ListSideBar><Link href="#">Hướng dẫn sử dụng dịch vụ</Link></ListSideBar>
  //       </List>
  //     </ListSideBar>
    
  //         {/* <div className="profile-content">
  //           <img src="image/profile.jpg" alt="profileImg" />
  //         </div>
  //         <div className="name-job">
  //           <div className="profile_name">Prem Shahi</div>
  //           <div className="job">Web Desginer</div>
  //         </div> */}
       
  //       </Box>
  //     </ListSideBar>
  //   </List>
  // </Box>

  );
}