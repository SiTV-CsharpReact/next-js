"use client"

import LoadingComponent from '@/layout/LoaddingComponent';
import { ModelBCBDTSR } from '@/models/Report/ReportBCBDTSR';
import { Box, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next';

const pageBDTSR = () => {
    const [loading,setLoading] = useState(true);
    const {t} = useTranslation(['home','report']);
    const [products, setProducts] = useState<ModelBCBDTSR | null>(null);
    useEffect(() => {
        fetch('http://10.26.7.194:8086/api/v1/notifications/058C222210/1/10',{mode: 'no-cors',credentials: 'include',
        method: 'GET'})
  .then((response) => response.json())
 
        // axios.get(`http://10.26.7.194:8086/api/v1/notifications/058C222210/1/10`)
        // .then(res=>res.json());
        .then(res=>setProducts(res.data))
        .catch(error=>{
          console.log(error);
        })
        .finally(()=> setLoading(false));
    }, []);
    if (loading) return <LoadingComponent message="Báo cáo biến động tài sản ròng"/>
    const datadate = products?.Data.Table1;
    const dataDate = datadate?.map((v_time) => v_time.TIME);
  return (
    <Box
      position="absolute"
      top="20px"
      right="0px"
      padding="0px 20px"
      width="100%"
    >
      <Box>
        <Typography color="red" fontStyle="italic">
        {t('report:BCTS.REPORT_TIMEUPDATES')} {dataDate}
        </Typography>
        <Box></Box>
      </Box>
      
      <Box>
     
       
      </Box>
    </Box>
  )
}

export default pageBDTSR