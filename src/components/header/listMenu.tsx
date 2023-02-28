import Link from 'next/link';
import React from 'react'
import { useTranslation } from 'react-i18next';
import '@/styles/header.css'

const ListMenu = () => {
  const { t } = useTranslation(["home", "report"]);
   return (
    <>
      <div className='flex'>
        <div className="group inline-block py-1 px-4 border-r border-gray-300 " >
          <span className="uppercase text-sm hover-text-blue ">    {t("home:menu.LichSuGD")} </span>
          <ul className="absolute hidden text-gray-700 pt-2 group-hover:block">
            <li className='border-b border-gray-300 '>
              <Link className="rounded-t bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap border-b-1" href="/Report">{t("report:menu.REPORT_LSDL")}</Link>
            </li>
            <li className='border-b border-gray-300 '>
              <Link className="bg-white  hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap " href="/Report">{t("report:menu.REPORT_LSKL")}</Link>
            </li>
            <li >
              <Link className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/Report">{t("menu.REPORT_LCKTT")}</Link>
            </li>
          </ul>
        </div>
        <div className="group inline-block py-1  px-4 border-r">
          <span className="  uppercase text-sm hover-text-blue">    {t("home:menu.GDTien")} </span>
          <ul className="absolute hidden text-gray-700 pt-2 group-hover:block">
            <li >
              <a className="rounded-t bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">oke</a>
            </li>
            <li >
              <a className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a>
            </li>
            <li >
              <a className="rounded-b bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a>
            </li>
          </ul>
        </div>
        <div className="group inline-block py-1  px-4 border-r">
          <span className="  uppercase  text-sm hover-text-blue">    {t("home:menu.QuanLyTK")} </span>
          <ul className="absolute hidden text-gray-700 pt-2 group-hover:block">
            <li >
              <a className="rounded-t bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">oke</a>
            </li>
            <li >
              <a className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a>
            </li>
            <li >
              <a className="rounded-b bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a>
            </li>
          </ul>
        </div>
        <div className="group inline-block py-1  px-4 border-r">
          <span className="  uppercase text-sm hover-text-blue">    {t("home:menu.TuVanDauTu")} </span>
          <ul className="absolute hidden text-gray-700 pt-2 group-hover:block">
            <li >
              <a className="rounded-t bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">oke</a>
            </li>
            <li >
              <a className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a>
            </li>
            <li >
              <a className="rounded-b bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a>
            </li>
          </ul>
        </div>
        <div className="group inline-block py-1  px-4">
          <span className="  uppercase text-sm hover-text-blue">    {t("home:menu.HoTro")} </span>
          <ul className="absolute hidden text-gray-700 pt-2 group-hover:block">
            <li >
              <a className="rounded-t bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">oke</a>
            </li>
            <li >
              <a className="bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a>
            </li>
            <li >
              <a className="rounded-b bg-white hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a>
            </li>
          </ul>
        </div>
      </div>
    </>

  )
}

export default ListMenu