import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import HistoryIcon from "@mui/icons-material/History";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import SettingsIcon from "@mui/icons-material/Settings";
import { useTranslation } from "react-i18next";
import "../../styles/sidebar.css";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import {
  Box,
  Collapse,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import colorConfigs from "@/configs/colorConfigs";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ArticleIcon from "@mui/icons-material/Article";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import HomeIcon from '@mui/icons-material/Home';
const ListSideBar = styled(ListItem)(({ theme }) => ({
  paddingLeft: 0,
}));

export default function Sidebar() {
  const { t } = useTranslation(["home", "report"]);
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const [openListLS, setOpenListLS] = useState(false);
  // const [openListMonney, setOpenListMonney] = useState(false);
  const handleClickShow = () => {
    setOpenListLS(!openListLS);
  };
  // const handleClick = () => {
  //   setOpenListLS(!openListLS);
  // };
  return (
    <Box className="sidebar close">
      <Box className="logo-details">
        <MenuIcon
          onClick={() => setOpen(true)}
          style={{ color: "#fff",cursor: "pointer" }}
          className="bx-menu"
        />
     
      </Box>
      <List className="nav-links">
      <ListSideBar>
          <Box className="iocn-link">
            <Link href="/">    <HomeIcon style={{ color: "#fff" }} /></Link>
        
          <Typography color="#fff" fontSize={12} textAlign="center">
          {t("home:menu.HOME")} 
            </Typography>
          </Box>
        
        </ListSideBar>
        <ListSideBar>
          <Box className="iocn-link">
            <HistoryIcon style={{ color: "#fff" }} />
          <Typography color="#fff" fontSize={12} textAlign="center">
          {t("home:menu.LichSu")} 
            </Typography>
          </Box>
          <List className="sub-menu">
            <ListSideBar>
              <Link href="/Report">{t("report:menu.REPORT_LSDL")}</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="/Report">{t("report:menu.REPORT_LSKL")}</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="/Report">{t("menu.REPORT_LCKTT")}</Link>
            </ListSideBar>
          </List>
        </ListSideBar>

        <ListSideBar>
          <Box className="iocn-link">
            <AttachMoneyIcon style={{ color: "#fff" }} />
            <Typography color="#fff" fontSize={12} textAlign="center">
            {t("home:menu.Tien")} 
            </Typography>
          </Box>
          <List className="sub-menu">
            <ListSideBar>
              <Link href="#">Chuyển tiền</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Mẫu chuyển tiền</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Chuyển tiền ký quỹ CK phái sinh</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Lịch sử chuyển tiền</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Tiền cho vay - EzSaving</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Tất toán tiền cho vay</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Danh sách hợp đồng cho vay</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Lịch sử ứng trước tiền bán CK</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Ứng trước tiền cổ tức</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Lịch sử ứng trước tiền cổ tức</Link>
            </ListSideBar>
          </List>
        </ListSideBar>
        <ListSideBar>
          <Box className="iocn-link">
            <ManageAccountsIcon style={{ color: "#fff" }} />
            <Typography color="#fff" fontSize={12} textAlign="center">
            {t("home:menu.LichSu")} 
            </Typography>
          </Box>
          <List className="sub-menu">
            <ListSideBar>
              <Link href="#">Lịch sử bán CK lô lẻ</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Thực hiền quyền</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Đặt lệnh điều kiện</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Sổ lệnh điều kiện</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Lưu ký trực tuyến</Link>
            </ListSideBar>
          </List>
        </ListSideBar>
        <ListSideBar>
          <Box className="iocn-link" padding="15px 0px">
            <ArticleIcon style={{ color: "#fff" }} />
            <Typography color="#fff" fontSize={12} textAlign="center">
            {t("home:menu.BaoCao")} 
            </Typography>
          </Box>

          <List className="sub-menu">
            <ListSideBar>
              <Link href="#">Báo cáo tổng hợp số dư giao dịch</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="/BCTS">Báo cáo tài sản</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Báo cáo biến động tài sản ròng</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Báo cáo lãi lỗ thực hiện</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">
                Báo cáo tổng hợp giao dịch theo mã chứng khoán
              </Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Số dư chứng khoán</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Số dư tiền</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Sao kê chứng khoán</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Sao kê tiền</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Tra cứu phí lưu ký</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Tra cứu tình trạng chứng quyền</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Tra cứu biểu phí</Link>
            </ListSideBar>
          </List>
        </ListSideBar>
        <ListSideBar>
          <Box className="iocn-link" padding="15px 0px">
            {" "}
            <HeadsetMicIcon style={{ color: "#fff" }} />
            <Typography color="#fff" fontSize={12} textAlign="center">
            {t("home:menu.TuVan")} 
            </Typography>
          </Box>

          <List className="sub-menu">
            <ListSideBar>
              <Link className="link_name" href="#">
                TƯ VẤN ĐẦU TƯ
              </Link>
            </ListSideBar>
          </List>
        </ListSideBar>
        <ListSideBar>
          <Box className="iocn-link">
            <SupportAgentIcon style={{ color: "#fff" }} />
            <Typography color="#fff" fontSize={12} textAlign="center">
            {t("home:menu.HoTro")} 
            </Typography>
          </Box>
          <List className="sub-menu">
            <ListSideBar>
              <Link className="link_name" href="#">
                Hỗ trợ
              </Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Sản phẩm dịch vụ trực tuyến</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Hướng dẫn Nhà đầu tư</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Sản phẩm dịch vụ cho Tổ chức</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Hướng dẫn sử dụng dịch vụ</Link>
            </ListSideBar>
          </List>
        </ListSideBar>
        {/* <ListSideBar>
          <Box className="profile-details">
            <ListSideBar>
              <Box className="icon-link-down">
                <SettingsIcon style={{ color: "#fff" }} />
              </Box>
              <List className="sub-menu blank">
                <ListSideBar>
                  <Link href="#">Sản phẩm dịch vụ trực tuyến</Link>
                </ListSideBar>
                <ListSideBar>
                  <Link href="#">Hướng dẫn Nhà đầu tư</Link>
                </ListSideBar>
                <ListSideBar>
                  <Link href="#">Sản phẩm dịch vụ cho Tổ chức</Link>
                </ListSideBar>
                <ListSideBar>
                  <Link href="#">Hướng dẫn sử dụng dịch vụ</Link>
                </ListSideBar>
              </List>
            </ListSideBar>
          </Box>
        </ListSideBar> */}
    
      </List>
      
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
                    float: "right",
                  }}
                  onClick={handleClose}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                paddingTop="5px"
              ></Box>
            </Box>
            {/* body */}
            <List
      sx={{ width: 320, bgcolor: '#363636',color:"#fff" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
     
    ><Link href="/">  
      <ListItemButton>
        <ListItemIcon>
           <HomeIcon style={{ color: "#fff" }} />
       
        </ListItemIcon>
        <ListItemText primary={t("home:menu.HOME")} />
      </ListItemButton>
      </Link>
      <ListItemButton  onClick={handleClickShow}>
        <ListItemIcon>
        <HistoryIcon style={{ color: "#fff" }} />
        </ListItemIcon>
        <ListItemText primary="Lịch sử" />
        {openListLS ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openListLS} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <Link href="/LSDL">
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
           
              <StarBorder style={{ color: "#fff" }}/>
         
              
            </ListItemIcon>
            <ListItemText primary={t("home:menu.REPORT_LSDL")} />
          </ListItemButton>
          </Link>
          <Link href="/BCTS">
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
         
              <StarBorder style={{ color: "#fff" }}/>
        
          
            </ListItemIcon>
            <ListItemText primary={t("report:menu.REPORT_BCTS")} />
          </ListItemButton>
          </Link>
          <Link href="/BCBDTSR">
          <ListItemButton sx={{ pl: 3 }}>
            <ListItemIcon>
        
              <StarBorder style={{ color: "#fff" }}/>
           
            </ListItemIcon>
            <ListItemText primary={t("report:menu.REPORT_BCBDTSR")} />
          </ListItemButton>
          </Link>
        </List>
      </Collapse>
      {/* <ListItemButton >
        <ListItemIcon>
          <InboxIcon style={{ color: "#fff" }}/>
        </ListItemIcon>
        <ListItemText primary="Tiền" />
        {openListMonney ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openListMonney} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse> */}
    </List>
            {/* <Box
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
                      <Link href="/">{t("home:menu.HOME")}</Link>
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem
                    disablePadding
                    style={{ borderBottom: "1px solid #2F2F2F" }}
                  >
                    <ListItemButton>
                      <Link href="/BCTS">{t("report:menu.REPORT_BCTS")}</Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    disablePadding
                    style={{ borderBottom: "1px solid #2F2F2F" }}
                  >
                    <ListItemButton>
                      <Link href="/BCBDTSR">
                        {t("report:menu.REPORT_BCBDTSR")}
                      </Link>
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    disablePadding
                    style={{ borderBottom: "1px solid #2F2F2F" }}
                  >
                    <ListItemButton>
                      <Link href="/LSDL">{t("home:menu.REPORT_LSDL")}</Link>
                    </ListItemButton>
                  </ListItem>
                </List>
              </nav>
            </Box> */}

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
                <Typography color="#fff">Thoát</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
