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
        axios.get(`http://localhost:8480/api/stock/v1/report/nav/058C222210?from_date=31/12/2022&to_date=03/01/2023`)
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