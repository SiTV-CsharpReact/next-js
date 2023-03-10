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
          {t("home:menu.LichSuGD")} 
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
            {t("home:menu.GDTien")} 
            </Typography>
          </Box>
          <List className="sub-menu">
            <ListSideBar>
              <Link href="#">Chuy???n ti???n</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">M???u chuy???n ti???n</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Chuy???n ti???n k?? qu??? CK ph??i sinh</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">L???ch s??? chuy???n ti???n</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Ti???n cho vay - EzSaving</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">T???t to??n ti???n cho vay</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Danh s??ch h???p ?????ng cho vay</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">L???ch s??? ???ng tr?????c ti???n b??n CK</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">???ng tr?????c ti???n c??? t???c</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">L???ch s??? ???ng tr?????c ti???n c??? t???c</Link>
            </ListSideBar>
          </List>
        </ListSideBar>
        <ListSideBar>
          <Box className="iocn-link">
            <ManageAccountsIcon style={{ color: "#fff" }} />
            <Typography color="#fff" fontSize={12} textAlign="center">
            {t("home:menu.LichSuGD")} 
            </Typography>
          </Box>
          <List className="sub-menu">
            <ListSideBar>
              <Link href="#">L???ch s??? b??n CK l?? l???</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Th???c hi???n quy???n</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">?????t l???nh ??i???u ki???n</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">S??? l???nh ??i???u ki???n</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">L??u k?? tr???c tuy???n</Link>
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
              <Link href="#">B??o c??o t???ng h???p s??? d?? giao d???ch</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="/BCTS">B??o c??o t??i s???n</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">B??o c??o bi???n ?????ng t??i s???n r??ng</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">B??o c??o l??i l??? th???c hi???n</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">
                B??o c??o t???ng h???p giao d???ch theo m?? ch???ng kho??n
              </Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">S??? d?? ch???ng kho??n</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">S??? d?? ti???n</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Sao k?? ch???ng kho??n</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Sao k?? ti???n</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Tra c???u ph?? l??u k??</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Tra c???u t??nh tr???ng ch???ng quy???n</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">Tra c???u bi???u ph??</Link>
            </ListSideBar>
          </List>
        </ListSideBar>
        <ListSideBar>
          <Box className="iocn-link" padding="15px 0px">
            {" "}
            <HeadsetMicIcon style={{ color: "#fff" }} />
            <Typography color="#fff" fontSize={12} textAlign="center">
            {t("home:menu.TuVanDauTu")} 
            </Typography>
          </Box>

          <List className="sub-menu">
            <ListSideBar>
              <Link className="link_name" href="#">
                T?? V???N ?????U T??
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
                H??? tr???
              </Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">S???n ph???m d???ch v??? tr???c tuy???n</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">H?????ng d???n Nh?? ?????u t??</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">S???n ph???m d???ch v??? cho T??? ch???c</Link>
            </ListSideBar>
            <ListSideBar>
              <Link href="#">H?????ng d???n s??? d???ng d???ch v???</Link>
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
                  <Link href="#">S???n ph???m d???ch v??? tr???c tuy???n</Link>
                </ListSideBar>
                <ListSideBar>
                  <Link href="#">H?????ng d???n Nh?? ?????u t??</Link>
                </ListSideBar>
                <ListSideBar>
                  <Link href="#">S???n ph???m d???ch v??? cho T??? ch???c</Link>
                </ListSideBar>
                <ListSideBar>
                  <Link href="#">H?????ng d???n s??? d???ng d???ch v???</Link>
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
        <ListItemText primary="L???ch s???" />
        {openListLS ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openListLS} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <Link href="/Report">
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
        <ListItemText primary="Ti???n" />
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
                <Typography color="#fff">Tho??t</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}
