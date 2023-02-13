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
import {
  Box,
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import MailIcon from "@mui/icons-material/Mail";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
const ListSideBar = styled(ListItem)(({ theme }) => ({
  paddingLeft: 0,
}));

export default function Sidebar() {
  const { t } = useTranslation(["home", "report"]);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  
  return (
    <Box className="sidebar close">
      <Box className="logo-details" onClick={() => setDrawerOpen(true)}>
        <MenuIcon style={{ color: "#fff" }} className="bx-menu" />
        <span className="logo_name">CodingLab</span>ListSideBar
      </Box>
      <Drawer
        open={drawerOpen}
        anchor="left"
        onClose={() => setDrawerOpen(false)}
      >
        <List className="nav-links">
          <ListSideBar>
          <AttachMoneyIcon style={{ color: "#fff" }} />
          <List className="sub-menu">
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <Link href="/Report">{t("report:menu.REPORT_LSDL")}</Link>
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <Link href="/Report">{t("report:menu.REPORT_LSDL")}</Link>
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <Link href="/Report">{t("menu.REPORT_LCKTT")}</Link>
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          
          </ListSideBar>
          <ListSideBar>
          <AttachMoneyIcon style={{ color: "#fff" }} />
          <List className="sub-menu">
             
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary= "Chuyển tiền" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Mẫu chuyển tiền" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary= "Chuyển tiền ký quỹ CK phái sinh"/>
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary= "Lịch sử chuyển tiền" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary= "Tiền cho vay - EzSaving" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary= "Tất toán tiền cho vay" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary= "Danh sách hợp đồng cho vay" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary= "Lịch sử ứng trước tiền bán CK" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary= "Ứng trước tiền cổ tức" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary= "Lịch sử ứng trước tiền cổ tức" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </ListSideBar>
          <ListSideBar>
            <Box className="iocn-link">
              <AttachMoneyIcon style={{ color: "#fff" }} />
            </Box>
           
          </ListSideBar>
          <ListSideBar>
            <Box className="iocn-link">
              <AttachMoneyIcon style={{ color: "#fff" }} />
            </Box>
            <List className="sub-menu">
            <ListSideBar>
            <List
              sx={{ width: "100%", maxWidth: 480, bgcolor: "background.paper" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
              
            >
             
             
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary= "Lịch sử bán CK lô lẻ" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Thực hiền quyền" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary= "Đặt lệnh điều kiện"/>
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary= "Sổ lệnh điều kiện" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary= "Lưu ký trực tuyến" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </ListSideBar>
            </List>
          </ListSideBar>
          <ListSideBar>
            <AttachMoneyIcon style={{ color: "#fff" }} />

            <List className="sub-menu">
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary= "Báo cáo tổng hợp số dư giao dịch" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary= "Báo cáo tài sản" />
                  </ListItemButton>
                </List>
              </Collapse> <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary= "Báo cáo biến động tài sản ròng" />
                  </ListItemButton>
                </List>
              </Collapse> <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary= "Báo cáo lãi lỗ thực hiện" />
                  </ListItemButton>
                </List>
              </Collapse> <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary= "Báo cáo tổng hợp giao dịch theo mã chứng khoán" />
                  </ListItemButton>
                </List>
              </Collapse> <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary= "Số dư chứng khoán" />
                  </ListItemButton>
                </List>
              </Collapse> <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary= "Số dư tiền" />
                  </ListItemButton>
                </List>
              </Collapse> <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary= "Sao kê chứng khoán" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary= "Sao kê tiền" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary= "Tra cứu phí lưu ký" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary= "Tra cứu tình trạng chứng quyền" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary= "Tra cứu biểu phí" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </ListSideBar>
        
          <ListSideBar>
          <AttachMoneyIcon style={{ color: "#fff" }} />
          <List className="sub-menu">
             
              <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary= "Sản phẩm dịch vụ trực tuyến" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary="Sản phẩm dịch vụ cho Tổ chức" />
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary= "Hướng dẫn Nhà đầu tư"/>
                  </ListItemButton>
                </List>
              </Collapse>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                      <StarBorder />
                    </ListItemIcon>
                    <ListItemText primary= "Sản phẩm dịch vụ trực tuyến" />
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </ListSideBar>

          
        </List>
      </Drawer>
    </Box>
  );
}
