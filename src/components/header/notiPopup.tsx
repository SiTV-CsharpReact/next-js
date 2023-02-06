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
} from "@mui/material";
import React from "react";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FilterListTwoToneIcon from "@mui/icons-material/FilterListTwoTone";
import SettingsIcon from "@mui/icons-material/Settings";
import MoreVertIcon from "@mui/icons-material/MoreVert";

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

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));
const Noti = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
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
            <Badge badgeContent={9} color="error">
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
                 Xem tất cả
                 
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default Noti;
