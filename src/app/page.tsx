
"use client"

import { useTranslation } from "react-i18next";
import Marketwatch from './marketwatch';
import Order from './order';

export default function Home( ) {
  const {t} = useTranslation(['home','report']);

  return (
   
     <div>
       <Marketwatch/>
        <Order/>
        </div>

    
  )
}
