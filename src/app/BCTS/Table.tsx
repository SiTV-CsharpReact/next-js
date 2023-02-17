import { formatNumber } from '@/util/util';
import { Box, Paper, TableContainer, Table, TableHead, TableRow, TableSortLabel, TableBody, TableFooter, styled, tableCellClasses, TableCell } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from "react-i18next";


  

const TableBCTS = (dataTable:any) => {
  
const dataCTCK = dataTable.data;
const {t} = useTranslation(['home','report']);
const [orderDirection,setOrderDirection] = useState('asc');
const [valueToOrderBy, setValueToOrderBy] = useState('maCK');
let valuePTLL = "";
let valuePTLLS = 0;
let colorTextS = "";
let colorTextTotal = "";
let m_totalThanhTien = 0;
let m_totalTONGGV = 0;
let m_totalLaiLo = 0;
let m_totalPTLaiLo = 0;
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.mode === 'dark' ? '#323232' :'#ececec',
          color:   theme.palette.mode === 'dark' ? '#fff' :'#000',
          padding: "5px 7px",
          fontWeight: 700,
          fontSize: "0.8rem",
          border: 1,
          borderStyle: "solid",
          borderColor: theme.palette.mode === "dark" ? "#fff" : "#dedede",
          position: "sticky",
          zIndex: 1,
         
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 12,
          padding: "5px 7px",
          border: 1,
          borderStyle: "solid",
          borderColor: theme.palette.mode === "dark" ? "#fff" : "#dedede",
        },
        [`&.${tableCellClasses.footer}`]: {
            backgroundColor: theme.palette.mode === 'dark' ? '#323232' :'#ececec',
            color:   theme.palette.mode === 'dark' ? '#fff' :'#000',
          padding: "5px 7px",
          border: 1,
          borderStyle: "solid",
          borderColor: theme.palette.mode === "dark" ? "#fff" : "#dedede",
          fontWeight: 700,
          fontSize: "0.8rem",
          position: "sticky",
          zIndex: 1,
          bottom: "-1px",
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        "&:nth-of-type(odd)": {
          backgroundColor: theme.palette.action.hover,
        },
      }));
  return (
          <Paper sx={{ width: "100%", overflow: "hidden" }}>
            <TableContainer sx={{ maxHeight: 585 }}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table"  >
                <TableHead>
                  <TableRow>
                    <StyledTableCell
                      colSpan={11}
                      sx={{ fontWeight: 700, fontSize: "0.8rem" ,top:'-1px'}}
                    >
              
                      {t('report:BCTS.REPORT_CTCK')}
                 
                   
                    </StyledTableCell>
                    <StyledTableCell
                      colSpan={4}
                      sx={{ fontWeight: 700, fontSize: "0.8rem",top:'-1px',textAlign: "center"}}
                    >
                      {t('report:BCTS.REPORT_LLDK')}
                    </StyledTableCell>

                    <StyledTableCell rowSpan={3} sx={{top:'-1px'}}>  {t('report:BCTS.REPORT_CCV')}</StyledTableCell>
                    <StyledTableCell rowSpan={3} sx={{top:'-1px'}} align="right">
                      {t('report:BCTS.REPORT_TTDM')}
                    </StyledTableCell>
                  </TableRow>
                  <TableRow sx={{ height: 22 }}>
                    <StyledTableCell rowSpan={2} sx={{top:34}}>
                    {t('report:BCTS.REPORT_MACK')}
                    {/* <TableSortLabel  
                 
                    direction="asc"
                    // onClick={createSortHandler()}
                    >
                      {t('report:BCTS.REPORT_MACK')}
                      </TableSortLabel> */}
                      </StyledTableCell>
                    <StyledTableCell rowSpan={2} sx={{ top: 34 }}>{t('report:BCTS.REPORT_CKCS_')}</StyledTableCell>
                    <StyledTableCell colSpan={3} sx={{ top: 34 }}>{t('report:BCTS.REPORT_CKMCV_')}</StyledTableCell>

                    <StyledTableCell rowSpan={2} sx={{ top: 34 }}>
                    {t('report:BCTS.REPORT_CKQCV_')}
                    </StyledTableCell>
                    <StyledTableCell rowSpan={2} sx={{ top: 34 }} >  {t('report:BCTS.REPORT_CKCCNH')}</StyledTableCell>
                    <StyledTableCell rowSpan={2} sx={{ top: 34 }}>{t('report:BCTS.REPORT_CKHCGD')}</StyledTableCell>
                    <StyledTableCell rowSpan={2} sx={{ top: 34 }}>{t('report:BCTS.REPORT_TKL')}</StyledTableCell>
                    <StyledTableCell rowSpan={2} sx={{ top: 34 }}>{t('report:BCTS.REPORT_GTT')}</StyledTableCell>
                    <StyledTableCell rowSpan={2} sx={{ top: 34 }}>{t('report:BCTS.REPORT_TT')}</StyledTableCell>
                    <StyledTableCell rowSpan={2} sx={{ top: 34 }}>{t('report:BCTS.REPORT_GVTB')}</StyledTableCell>
                    <StyledTableCell rowSpan={2} sx={{ top: 34 }}>{t('report:BCTS.REPORT_TGV')}</StyledTableCell>
                    <StyledTableCell rowSpan={2} sx={{ top: 34 }}>{t('report:BCTS.REPORT_LL')}</StyledTableCell>
                    <StyledTableCell rowSpan={2} sx={{ top: 34 }}>{t('report:BCTS.REPORT_PTLL_')}</StyledTableCell>
                  </TableRow>
                  <TableRow sx={{ height: 22 }}>
                    <StyledTableCell sx={{top:69}}>T0</StyledTableCell>
                    <StyledTableCell sx={{top:69}}>T1</StyledTableCell>
                    <StyledTableCell sx={{top:69}}>T2</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dataCTCK?.map(
                    (vProfit2:any) => (
                      (valuePTLLS =
                        (vProfit2?.APROFIT_LOSS_VAL / vProfit2?.AROOT_VALUE) *
                        100),
                      (colorTextS = valuePTLLS > 0 ? "#00b050" : "#FF0000"),
                      (m_totalThanhTien += vProfit2.AMARKET_VALUE),
                      (m_totalTONGGV += vProfit2.AROOT_VALUE),
                      (m_totalLaiLo += vProfit2.APROFIT_LOSS_VAL),
                      (m_totalPTLaiLo = (m_totalLaiLo / m_totalTONGGV) * 100),
                      (colorTextTotal =
                        m_totalPTLaiLo > 0 ? "#00b050 !important" : "#FF0000 !important"),
                      //  m_totalPTLaiLo = isFinite(m_totalPTLaiLo) && m_totalPTLaiLo != 0 ? m_totalPTLaiLo.toFixed(2): 0,
                      (valuePTLL = vProfit2?.APROFIT_LOSS_RATE),
                      vProfit2.AAVG_PRICE == 0
                        ? (valuePTLL = "-")
                        : (valuePTLL = "0"),
                      (
                        <StyledTableRow key={vProfit2.ASTOCKCODE}>
                          <StyledTableCell
                            component="th"
                            scope="row"
                            align="center"
                          >
                            {formatNumber(vProfit2.ASTOCKCODE)}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {formatNumber(vProfit2.ATRADING_READY_TOTAL)}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {formatNumber(vProfit2.ABUY_INTRADY)}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {formatNumber(vProfit2.AT1)}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {formatNumber(vProfit2.AT2)}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {formatNumber(vProfit2.AWAIT_REC_RIGHT)}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {formatNumber(vProfit2.AMORTGATE_BANK)}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {formatNumber(vProfit2.ATRANSFER_RESTRICTED)}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {formatNumber(vProfit2.ATOTAL_AMOUNT)}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {formatNumber(vProfit2.AMARKET_PRICE)}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {formatNumber(vProfit2.AMARKET_VALUE)}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {formatNumber(vProfit2.AAVG_PRICE)}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {formatNumber(vProfit2.AROOT_VALUE)}
                          </StyledTableCell>
                          <StyledTableCell
                            align="right"
                            sx={{ color: colorTextS }}
                          >
                            {formatNumber(vProfit2.APROFIT_LOSS_VAL)}
                          </StyledTableCell>
                          <StyledTableCell
                            align="right"
                            sx={{ color: colorTextS }}
                          >
                            {valuePTLLS.toFixed(2)}%
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {formatNumber(vProfit2.ACAPITAL_STRUCTURE)}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {formatNumber(vProfit2.APORTFOLIO_RATE)}
                          </StyledTableCell>
                        </StyledTableRow>
                      )
                    )
                  )}
                </TableBody>
                <TableFooter>
                  <StyledTableRow>
                    <StyledTableCell
                      scope="row"
                      align="center"
                      colSpan={10}
                      sx={{ color: "#000" }}
                    >
                     {t('report:BCTS.REPORT_TONG')}
                    </StyledTableCell>
                    <StyledTableCell align="right" sx={{ color: "#000" }}>
                      {formatNumber(m_totalThanhTien)}
                    </StyledTableCell>
                    <StyledTableCell align="right"></StyledTableCell>
                    <StyledTableCell align="right" sx={{ color: "#000" }}>
                      {formatNumber(m_totalTONGGV)}
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                      sx={{ color: colorTextTotal }}
                    >
                      {formatNumber(m_totalLaiLo)}
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                      sx={{ color: colorTextTotal }}
                    >
                      {formatNumber(m_totalPTLaiLo.toFixed(2))}%
                    </StyledTableCell>
                    <StyledTableCell align="right"></StyledTableCell>
                    <StyledTableCell align="right"></StyledTableCell>
                  </StyledTableRow>
                </TableFooter>
              </Table>
            </TableContainer>
          </Paper>
      
  )
}

export default TableBCTS