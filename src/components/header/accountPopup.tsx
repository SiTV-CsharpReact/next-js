import colorConfigs from "@/configs/colorConfigs";
import {
  Button,
  Drawer,
  Box,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Link,
  styled,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { color } from "@mui/system";
import KeyIcon from "@mui/icons-material/Key";
import LockIcon from "@mui/icons-material/Lock";
import RestoreIcon from "@mui/icons-material/Restore";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import RateReviewIcon from "@mui/icons-material/RateReview";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import LogoutIcon from "@mui/icons-material/Logout";
import Image from "next/image";
import userMen from "../../../public/men.jpg";
import menuAvatar from "../../../public/menu-avatar.svg";

const ListItemAccount = styled(ListItemIcon)(({ theme }) => ({
  borderRadius: "4px",
  backgroundColor: theme.palette.mode === "dark" ? "#212121" : "#fff",
  height: 24,
  width: 24,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.mode === "dark" ? "#fff" : "#034e95",
  minWidth: 24,
}));

const Account = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box
        display="flex"
        position="relative"
        onClick={() => setOpen(true)}
        style={{ cursor: "pointer" }}
      >
        <Image
          alt="Vercel logo"
          src={userMen}
          width={40}
          height={40}
          style={{
            border: "2px solid #034e95",
            borderRadius: "50%",
            maxWidth: "100%",
          }}
        />
        <Image
          alt="Vercel logo"
          src={menuAvatar}
          width={16}
          height={16}
          style={{
            position: "absolute",
            borderRadius: "50%",
            maxWidth: "100%",
            height: "auto",
            top: 25,
            left: 27,
          }}
        />
        <Box paddingTop="2px" paddingLeft="7px">
          <Typography
            style={{
              fontSize: "14px",
              fontWeight: "600",
              color: colorConfigs.sidebar.colorSB,
            }}
          >
            Tạ Văn Sĩ
          </Typography>
          <Typography
            style={{
              fontSize: "12px",
              color: colorConfigs.sidebar.colorSB,
              padding: "unset",
            }}
          >
            058C222210
          </Typography>
        </Box>
      </Box>
      <Drawer open={open} anchor={"right"} onClose={() => setOpen(false)}>
        <Box
          sx={{
            width: 385,
            backgroundColor: colorConfigs.sidebar.colorSBRight,
            height: "100%",
            position: "relative",
          }}
        >
          <Box>
            {/* Header */}
            <Box
              sx={{
                backgroundColor: colorConfigs.sidebar.colorSB,
                height: 100,
                padding: "6px 10px",
              }}
            >
              <Box>
                <CloseIcon
                  style={{
                    color: "#fff",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                  onClick={handleClose}
                />
              </Box>
              <Box
                display="flex"
                justifyContent="space-between"
                paddingTop="5px"
              >
                <Box display="flex">
                  <Image
                    alt="Account"
                    src={userMen}
                    width={52}
                    height={52}
                    style={{
                      borderRadius: "50%",
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />

                  <Box paddingLeft="7px">
                    <Typography
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "white",
                      }}
                    >
                      Tạ Văn Sĩ
                    </Typography>
                    <Typography
                      style={{
                        fontSize: "14px",
                        color: "white",
                        padding: "unset",
                      }}
                    >
                      058C222210
                    </Typography>
                  </Box>
                </Box>
                <Box>
                  <Box
                    style={{
                      fontSize: "10px",
                      border: "1px solid #BEBEBE",
                      padding: "2px 5px",
                      color: "white",
                      borderRadius: "2px",
                      cursor: "pointer",
                    }}
                  >
                    Thông tin chi tiết tài khoản
                  </Box>
                </Box>
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
                      <ListItemAccount>
                        <KeyIcon style={{ fontSize: "18px" }} />
                      </ListItemAccount>
                      <ListItemText
                        primary="Thay đổi mật khẩu"
                        className="pl-2"
                      />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                  <ListItem
                    disablePadding
                    style={{ borderBottom: "1px solid #2F2F2F" }}
                  >
                    <ListItemButton>
                      <ListItemAccount>
                        <LockIcon style={{ fontSize: "18px" }} />
                      </ListItemAccount>
                      <ListItemText primary="Quản trị Token" className="pl-2" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    disablePadding
                    style={{ borderBottom: "1px solid #2F2F2F" }}
                  >
                    <ListItemButton>
                      <ListItemAccount>
                        <RestoreIcon style={{ fontSize: "18px" }} />
                      </ListItemAccount>
                      <ListItemText
                        primary="Hoạt động gần đây"
                        className="pl-2"
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    disablePadding
                    style={{ borderBottom: "1px solid #2F2F2F" }}
                  >
                    <ListItemButton>
                      <ListItemAccount>
                        <LockOpenIcon style={{ fontSize: "18px" }} />
                      </ListItemAccount>
                      <ListItemText
                        primary="Cài đặt mật khẩu giao dịch"
                        className="pl-2"
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    disablePadding
                    style={{ borderBottom: "1px solid #2F2F2F" }}
                  >
                    <ListItemButton>
                      <ListItemAccount>
                        <HelpOutlineIcon style={{ fontSize: "18px" }} />
                      </ListItemAccount>
                      <ListItemText
                        primary="Hướng dẫn xóa cache"
                        className="pl-2"
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    disablePadding
                    style={{ borderBottom: "1px solid #2F2F2F" }}
                  >
                    <ListItemButton>
                      <ListItemAccount>
                        <RateReviewIcon style={{ fontSize: "18px" }} />
                      </ListItemAccount>
                      <ListItemText primary="Góp ý" className="pl-2" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem
                    disablePadding
                    style={{ borderBottom: "1px solid #2F2F2F" }}
                  >
                    <ListItemButton>
                      <ListItemAccount>
                        <GTranslateIcon style={{ fontSize: "18px" }} />
                      </ListItemAccount>
                      <ListItemText
                        primary="Hỗ trợ ngôn ngữ:"
                        className="pl-2"
                      />
                      <Link
                        display="flex"
                        sx={{
                          textDecoration: "none",
                        }}
                      >
                        <ListItemText primary="Tiếng việt" className="pl-2" />
                        <ListItemText primary="|" className="pl-2" />
                        <ListItemText primary="Tiếng anh" className="pl-2" />
                      </Link>
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
                  <LogoutIcon
                    style={{
                      color: colorConfigs.sidebar.colorSB,
                      fontSize: "22px",
                      marginLeft: "5px",
                    }}
                  />
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Account;
