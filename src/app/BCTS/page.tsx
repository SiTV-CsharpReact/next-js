"use client";
import { ModelBCTS } from "@/models/Report/ReportBCTS";
import { TableRow,TableCell,Box, Paper,Table,TableBody,TableContainer, TableHead,styled,tableCellClasses,Typography,Collapse,List,ListItemButton,Tooltip,TableFooter, useTheme,} from "@mui/material";
import React, { useEffect, useState } from "react";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InfoIcon from "@mui/icons-material/Info";
import Chart from "./Chart";
import axios from "axios";
import LoadingComponent from "@/layout/LoaddingComponent";
import { useTranslation } from "react-i18next";
import TableBCTS from "./Table";
import { formatNumber} from "@/util/util";
type Props = [];

// sort

const TextBoldItaLic = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontStyle: "italic",
  fontSize: "0.8rem",
}));
const ListItemButtonS = styled(ListItemButton)(({ theme }) => ({
  paddingLeft: "60px",
  justifyContent: "space-between",
}));
const TextBase = styled(Typography)(({ theme }) => ({
  fontSize: "0.8rem",
}));



const pageBCTS = () => {
  const theme = useTheme()
  const {t} = useTranslation(['home','report']);
  const [loading,setLoading] = useState(true);
  const [products, setProducts] = useState<ModelBCTS | null>(null);
  const [openCK, setOpenCK] = useState(true);
  const [openMonney, setOpenMonney] = useState(true);
  const [openMonneyReturn, setOpenMonneyReturn] = useState(true);
   //sort 
   const [orderDirection,setOrderDirection] = useState('asc');
   const [valueToOrderBy, setValueToOrderBy] = useState('maCK');


   let TotalGTTSR = 0;

useEffect(() => {
    axios.get(`http://localhost:8480/api/stock/v1/report/bcts/058C222210`)
    .then(res=>setProducts(res.data))
    .catch(error=>{
      console.log(error);
    })
    .finally(()=> setLoading(false));
}, []);
if (loading) return <LoadingComponent message="Báo cáo tài sản"/>
if(!products) return <h3>Product not found...</h3>
const vRes = products?.Data.Table;
const dataTable= products?.Data?.Table1.sort()
const dataChart = products?.Data.Table2;
const datadate = products?.Data.Table3;
const dataDate = datadate?.map((v_time) => v_time.TIME);
const dataStatus = datadate?.map((v_status) => v_status.ASTATUS);
if(dataStatus[0] == 0) return <h3>FPTS đang thực hiện cập nhật số liệu cuối ngày cho Báo cáo, Quý khách vui lòng vào lại sau!</h3>

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
      <Box display="grid" gridTemplateColumns="400px 1fr">

        <Box>
        <Paper sx={{marginRight:'20px'}}>
          {vRes?.map(
            (v_Profit) => (
              (TotalGTTSR =
                v_Profit?.SUM_STOCK +
                v_Profit?.SUM_CASH +
                v_Profit?.AREMAIN_DEBT),
              (
                <List
                  key={v_Profit.ABUY_STOCK}
                  sx={{ width: "100%", bgcolor: theme.palette.mode === 'dark' ? '#323232' :'#ececec' }}
                  component="nav"
                  aria-labelledby="nested-list-subheader"
                >
                  <ListItemButton
                    sx={{ justifyContent: "space-between", height: "30px" }}
                  >
                    <TextBase sx={{ fontWeight: "bold" }}>
                    {t('report:BCTS.REPORT_GTTSR')}
                    </TextBase>
                    <TextBase sx={{ fontWeight: "bold" }}>
                      {TotalGTTSR}{" "}
                    </TextBase>
                  </ListItemButton>

                  <ListItemButton
                    onClick={() => setOpenCK(!openCK)}
                    sx={{ justifyContent: "space-between" }}
                  >
                    <Box display="flex">
                      <TextBoldItaLic> {t('report:BCTS.REPORT_CK_')}</TextBoldItaLic>

                      {openCK ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    </Box>

                    <TextBoldItaLic>{formatNumber(v_Profit.SUM_STOCK)} </TextBoldItaLic>
                  </ListItemButton>
                  <Collapse in={openCK} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButtonS>
                        <TextBase> {t('report:BCTS.REPORT_CKCS')}</TextBase>

                        <TextBase>{formatNumber(v_Profit.AVAL_STOCK)} </TextBase>
                      </ListItemButtonS>
                      <ListItemButtonS>
                        <TextBase>{t('report:BCTS.REPORT_CKMCV')}</TextBase>

                        <TextBase>{formatNumber(v_Profit.ABUY_STOCK)} </TextBase>
                      </ListItemButtonS>
                      <ListItemButtonS>
                        <TextBase>{t('report:BCTS.REPORT_CKQCV')}</TextBase>
                        <TextBase>{formatNumber(v_Profit.ARIGHT_STOCK)} </TextBase>
                      </ListItemButtonS>
                      <ListItemButtonS>
                        <Box display="flex">
                          <TextBase>{t('report:BCTS.REPORT_CKHC')}</TextBase>

                          <Tooltip title="Bao gồm CK hạn chế giao dịch, Cầm cố Ngân hàng">
                            <InfoIcon sx={{ ml: "5px", fontSize: "16px" }} />
                          </Tooltip>
                        </Box>

                        <TextBase>{formatNumber(v_Profit.ALIMIT_STOCK)} </TextBase>
                      </ListItemButtonS>
                    </List>
                  </Collapse>
                  <ListItemButton
                    onClick={() => setOpenMonney(!openMonney)}
                    sx={{ justifyContent: "space-between" }}
                  >
                    <Box display="flex">
                      <TextBoldItaLic>{t('report:BCTS.REPORT_TIEN_')}</TextBoldItaLic>

                      {openMonney ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    </Box>

                    <TextBoldItaLic> {formatNumber(v_Profit.SUM_CASH)} </TextBoldItaLic>
                  </ListItemButton>
                  <Collapse in={openMonney} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButtonS>
                        <TextBase>{t('report:BCTS.REPORT_TTTK')}</TextBase>

                        <TextBase>{formatNumber(v_Profit.ACASH_AMOUNT)}</TextBase>
                      </ListItemButtonS>
                      <ListItemButtonS
                        onClick={() => setOpenMonneyReturn(!openMonneyReturn)}
                      >
                        <Box display="flex">
                          <TextBase>{t('report:BCTS.REPORT_TBCTT')}</TextBase>

                          {openMonneyReturn ? (
                            <ArrowDropUpIcon />
                          ) : (
                            <ArrowDropDownIcon />
                          )}
                        </Box>

                        <TextBase>{formatNumber(v_Profit.AREC_CASH_SELL)} </TextBase>
                      </ListItemButtonS>
                      <Collapse
                        in={openMonneyReturn}
                        timeout="auto"
                        unmountOnExit
                      >
                        <List component="div" disablePadding>
                          <ListItemButtonS sx={{ pl: "180px" }}>
                            <TextBase>T0</TextBase>
                            <TextBase>{formatNumber(v_Profit.AREC_CASH_T0)}</TextBase>
                          </ListItemButtonS>
                          <ListItemButtonS sx={{ pl: "180px" }}>
                            <TextBase>T1 </TextBase>
                            <TextBase>{formatNumber(v_Profit.AREC_CASH_T1)} </TextBase>
                          </ListItemButtonS>
                          <ListItemButtonS sx={{ pl: "180px" }}>
                            <TextBase>T2 </TextBase>
                            <TextBase>{formatNumber(v_Profit.AREC_CASH_T2)} </TextBase>
                          </ListItemButtonS>
                        </List>
                      </Collapse>
                      <ListItemButtonS>
                        <TextBase>{t('report:BCTS.REPORT_TCTCV')}</TextBase>

                        <TextBase>{formatNumber(v_Profit.ARE_CASH_DEVIDEND)} </TextBase>
                      </ListItemButtonS>
                      <ListItemButtonS>
                        <Box display="flex">
                          <TextBase>{t('report:BCTS.REPORT_TCVK')}</TextBase>

                          <Tooltip title="Tiền thanh toán đáo hạn, chứng quyền chờ về">
                            <InfoIcon sx={{ ml: "5px", fontSize: "16px" }} />
                          </Tooltip>
                        </Box>
                        <TextBase>{formatNumber(v_Profit.ARE_CASH_OTHER)} </TextBase>
                      </ListItemButtonS>
                      <ListItemButtonS>
                        <TextBase>{t('report:BCTS.REPORT_TGTCV')}</TextBase>

                        <TextBase>{formatNumber(v_Profit.ASAVINGTOTAL)} </TextBase>
                      </ListItemButtonS>
                    </List>
                  </Collapse>
                  <ListItemButton
                    onClick={() => setOpenMonney(!openMonney)}
                    sx={{ justifyContent: "space-between" }}
                  >
                    <TextBoldItaLic >
                    {t('report:BCTS.REPORT_DNVKQ_')}
                    </TextBoldItaLic>
                    <TextBoldItaLic>{formatNumber(v_Profit.AREMAIN_DEBT)} </TextBoldItaLic>
                  </ListItemButton>
                </List>
              )
            )
          )}
            </Paper>
        </Box>
         {/* table BCTS */}
        <Box >
        <TableBCTS data={dataTable}/>
        </Box>
      </Box>
      <Box>
     
        <Box paddingTop="15px">   <Chart dataChart={dataChart}/></Box>
      </Box>
    </Box>
  );
};

export default pageBCTS;
