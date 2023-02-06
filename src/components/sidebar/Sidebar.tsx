"use client" 
import '../../styles/sidebar.css'
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import HistoryIcon from '@mui/icons-material/History';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PaidIcon from '@mui/icons-material/Paid';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SettingsIcon from '@mui/icons-material/Settings';
import Link from 'next/link';
import { useTranslation } from "react-i18next";
const Sidebar = () => {
  const {t} = useTranslation(['home','report']);
  return (
    <div className="sidebar close">
    <div className="logo-details" >
      <MenuIcon  style={{ color: '#fff' }} className="bx-menu"/>
      <span className="logo_name">CodingLab</span>
    </div>
    <ul className="nav-links">
      <li>
        <a href="#">
         <HistoryIcon  style={{ color: '#fff' }}/>
          <span className="link_name">LỊCH SỬ GD</span>
        </a>
        <ul className="sub-menu">
         
          <li><Link href="/Report">{t('report:menu.REPORT_LSDL')}</Link></li>
          <li><Link href="/Report">{t('report:menu.REPORT_LSKL')}</Link></li>
          <li><Link href="/Report">{t('menu.REPORT_LCKTT')}</Link></li>
        </ul>
      </li>
      <li>
        <div className="iocn-link">
          <a href="#">
           <AttachMoneyIcon style={{ color: '#fff' }}/>
            <span className="link_name">GD TIỀN</span>
          </a>
          <i className="bx bxs-chevron-down arrow" />
        </div>
        <ul className="sub-menu">
          <li><a  href="#">Chuyển tiền</a></li>
          <li><a href="#">Mẫu chuyển tiền</a></li>
          <li><a href="#">Chuyển tiền ký quỹ CK phái sinh</a></li>
          <li><a href="#">Lịch sử chuyển tiền</a></li>
          <li><a href="#">Tiền cho vay - EzSaving</a></li>
          <li><a href="#">Tất toán tiền cho vay</a></li>
          <li><a href="#">Danh sách hợp đồng cho vay</a></li>
          <li><a href="#">Lịch sử ứng trước tiền bán CK</a></li>
          <li><a href="#">Ứng trước tiền cổ tức</a></li>
          <li><a href="#">Lịch sử ứng trước tiền cổ tức</a></li>
        </ul>
      </li>
      <li>
        <div className="iocn-link">
          <a href="#">
          <AttachMoneyIcon style={{ color: '#fff' }}/>
            <span className="link_name">GD ĐẶC BIỆT</span>
          </a>
          <i className="bx bxs-chevron-down arrow" />
        </div>
        <ul className="sub-menu">
       
          <li><a href="#">Lịch sử bán CK lô lẻ</a></li>
          <li><a href="#">Thực hiền quyền</a></li>
          <li><a href="#">Đặt lệnh điều kiện</a></li>     
          <li><a href="#">Sổ lệnh điều kiện</a></li>
          <li><a href="#">Lưu ký trực tuyến</a></li>
        </ul>
      </li>
      <li>
        <a href="#">
        <AttachMoneyIcon style={{ color: '#fff' }}/>
          <span className="link_name">QUẢN LÝ TK</span>
        </a>
        <ul className="sub-menu">
        <li><a href="#">Báo cáo tổng hợp số dư giao dịch</a></li>
          <li><a href="#">Báo cáo tài sản</a></li>
          <li><a href="#">Báo cáo biến động tài sản ròng</a></li>     
          <li><a href="#">Báo cáo lãi lỗ thực hiện</a></li>
          <li><a href="#">Báo cáo tổng hợp giao dịch theo mã chứng khoán</a></li>
          <li><a href="#">Số dư chứng khoán</a></li>
          <li><a href="#">Số dư tiền</a></li>
          <li><a href="#">Sao kê chứng khoán</a></li>     
          <li><a href="#">Sao kê tiền</a></li>
          <li><a href="#">Tra cứu phí lưu ký</a></li>
          <li><a href="#">Tra cứu tình trạng chứng quyền</a></li>
          <li><a href="#">Tra cứu biểu phí</a></li>
        </ul>
      </li>
      <li>
        <a href="#">
          <AutoStoriesIcon style={{ color: '#fff' }}/>
          <span className="link_name">TƯ VẤN ĐẦU TƯ</span>
          <ul className="sub-menu">
          <li><a className="link_name" href="#">TƯ VẤN ĐẦU TƯ</a></li>
       
        </ul>
        </a>
       
      </li>
      <li>
        <div className="iocn-link">
          <a href="#">
            <SupportAgentIcon style={{ color: '#fff' }}/>
            <span className="link_name">Hỗ trợ</span>
          </a>
          <i className="bx bxs-chevron-down arrow" />
        </div>
        <ul className="sub-menu">
          <li><a className="link_name" href="#">Hỗ trợ</a></li>
          <li><a href="#">Sản phẩm dịch vụ trực tuyến</a></li>
          <li><a href="#">Hướng dẫn Nhà đầu tư</a></li>
          <li><a href="#">Sản phẩm dịch vụ cho Tổ chức</a></li>
          <li><a href="#">Hướng dẫn sử dụng dịch vụ</a></li>
        </ul>
      </li>
    
  
   
      <li>
        <div className="profile-details">
        <li>
        <div className="icon-link-down">
          <a href="#">
            <SettingsIcon style={{ color: '#fff' }}/>
            <span className="link_name">Setting</span>
          </a>
          <i className="bx bxs-chevron-down arrow" />
        </div>
        <ul className="sub-menu blank">
       
          <li><a href="#">Sản phẩm dịch vụ trực tuyến</a></li>
          <li><a href="#">Hướng dẫn Nhà đầu tư</a></li>
          <li><a href="#">Sản phẩm dịch vụ cho Tổ chức</a></li>
          <li><a href="#">Hướng dẫn sử dụng dịch vụ</a></li>
        </ul>
      </li>
    
          {/* <div className="profile-content">
            <img src="image/profile.jpg" alt="profileImg" />
          </div>
          <div className="name-job">
            <div className="profile_name">Prem Shahi</div>
            <div className="job">Web Desginer</div>
          </div> */}
          <i className="bx bx-log-out" />
        </div>
      </li>
    </ul>
  </div>
  )

}

 


export default Sidebar