import { RouteType } from "./config"
import AttachMoneyTwoToneIcon from '@mui/icons-material/AttachMoneyTwoTone';
import HouseSharpIcon from '@mui/icons-material/HouseSharp';
import ManageSearchOutlinedIcon from '@mui/icons-material/ManageSearchOutlined';
import Home from "@/app/page";
const appRoutes: RouteType[]= [
  
    {
        path:"/home",
        element:<Home/>,
        state:"home",
        sidebarProps:{
            displayText:"Trang chủ",
            icon:<HouseSharpIcon/>
        }
      
    },
    {
        path:"/home",
        element:<Home/>,
        state:"home",
        sidebarProps:{
            displayText:"Trang chủ",
            icon:<HouseSharpIcon/>
        }
      
    },
    {
        path:"/home",
        element:<Home/>,
        state:"home",
        sidebarProps:{
            displayText:"Trang chủ",
            icon:<HouseSharpIcon/>
        }
      
    },
    {
        path:"/home",
        element:<Home/>,
        state:"home",
        sidebarProps:{
            displayText:"Trang chủ",
            icon:<HouseSharpIcon/>
        }
      
    },
    // {
    //     path:"/dashboard",
    //     element:<DashboardPageLayout/>,
    //     state:"dashboard",
    //     sidebarProps:{
    //         displayText:"Lịch sử GD",
    //         icon:<ManageSearchOutlinedIcon/>
    //     }
       
    // },
    // {
    //     path:"/dashboard",
    //     element:<DashboardPageLayout/>,
    //     state:"dashboard",
    //     sidebarProps:{
    //         displayText:"GD tiền",
    //         icon:<AttachMoneyTwoToneIcon/>
    //     },
        
    // },
    // {
    //     path:"/dashboard",
    //     element:<DashboardPageLayout/>,
    //     state:"dashboard",
    //     sidebarProps:{
    //         displayText:"Lịch sử GD",
    //         icon:<ManageSearchOutlinedIcon/>
    //     },
      
    // },
] 

export default appRoutes