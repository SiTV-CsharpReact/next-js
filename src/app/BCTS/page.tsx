"use client";
import { ModelBCTS } from "@/models/report";
import {
  TableRow,
  TableCell,
  Button,
  Box,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  styled,
  tableCellClasses,
  Typography,
  Collapse,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Tooltip,
  TablePagination,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InfoIcon from "@mui/icons-material/Info";
var valuePTLL = "";
var TotalGTTSR = 0;
type Props = [];

const TextBoldItaLic = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  fontStyle: "italic",
  fontSize: "0.8rem",
}));
const ListItemButtonS = styled(ListItemButton)(({ theme }) => ({
  paddingLeft:'60px',
  justifyContent:'space-between'
}));
const TextBase = styled(Typography)(({ theme }) => ({
  fontSize: "0.8rem",
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#ececec',
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    padding:5
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


interface Column {
  id: 'name' | 'code' | 'population' | 'size' | 'density';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

function createData(
  name: string,
  code: string,
  population: number,
  size: number,
): Data {
  const density = population / size;
  return { name, code, population, size, density };
}

// const rows = [
//   createData('India', 'IN', 1324171354, 3287263),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('Italy', 'IT', 60483973, 301340),
//   createData('United States', 'US', 327167434, 9833520),
//   createData('Canada', 'CA', 37602103, 9984670),
//   createData('Australia', 'AU', 25475400, 7692024),
//   createData('Germany', 'DE', 83019200, 357578),
//   createData('Ireland', 'IE', 4857000, 70273),
//   createData('Mexico', 'MX', 126577691, 1972550),
//   createData('Japan', 'JP', 126317000, 377973),
//   createData('France', 'FR', 67022000, 640679),
//   createData('United Kingdom', 'GB', 67545757, 242495),
//   createData('Russia', 'RU', 146793744, 17098246),
//   createData('Nigeria', 'NG', 200962417, 923768),
//   createData('Brazil', 'BR', 210147125, 8515767),
// ];
const pageBCTS = (props: any) => {

   // chia page 
   const [page, setPage] = React.useState(0);
   const [rowsPerPage, setRowsPerPage] = React.useState(10);
 
   const handleChangePage = (event: unknown, newPage: number) => {
     setPage(newPage);
   };
 
   const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
     setRowsPerPage(+event.target.value);
     setPage(0);
   };


  const [products, setProducts] = useState<ModelBCTS | null>(null);
  const [openCK, setOpenCK] = useState(true);
  const [openMonney, setOpenMonney] = useState(true);
  const [openMonneyReturn, setOpenMonneyReturn] = useState(true);
  useEffect(() => {
    //onst res =  fetch('http://localhost:8480/api/stock/v1/report/order_his/058C222210?buy_sell=ALL&exchange=ALL&stock_code=ALL&trading_account=ALL&order_status=ALL&from_date=01/10/2022&to_date=7/12/2022')
    const res = fetch(
      "http://localhost:8480/api/stock/v1/report/bcts/058C222210"
    )
      .then((res) => res.json())
      .then((res) => setProducts(res));
    console.log(res);
  }, []);
  console.log(products);
  const vRes = products?.Data.Table;
  const dataCTCK = products?.Data.Table1.sort();
  const dataChart = products?.Data.Table2;
  const datadate = products?.Data.Table3;
  const dataDate = datadate?.map((v_time) => v_time.TIME);
  const dataStatus = datadate?.map((v_status) => v_status.ASTATUS);
  console.log(dataCTCK, dataChart, vRes);

  return (
    <Box position="absolute" top="60px">
      <Box>
        <Typography color="red" fontStyle="italic">
          Dữ liệu cập nhật gần nhất : {dataDate}
        </Typography>
        <Box></Box>
      </Box>
      <Box display="flex">
        <Box width="400px">
          {vRes?.map((v_Profit) => (
            TotalGTTSR = v_Profit?.SUM_STOCK + v_Profit?.SUM_CASH + v_Profit?.AREMAIN_DEBT,

            <List key={v_Profit.ABUY_STOCK}
              sx={{ width: "100%", maxWidth: 380, bgcolor: "#ececec" }}
              component="nav"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemButton
                sx={{ justifyContent: "space-between", height: "30px" }}
              >
                <TextBase sx={{ fontWeight: "bold" }}>
                  GIÁ TRỊ TÀI SẢN RÒNG (I + II + III)
                </TextBase>
                <TextBase sx={{ fontWeight: "bold" }}>{TotalGTTSR} </TextBase>
              </ListItemButton>

              <ListItemButton
                onClick={() => setOpenCK(!openCK)}
                sx={{ justifyContent: "space-between" }}
              >
                <Box display="flex">
                  <TextBoldItaLic>I. CHỨNG KHOÁN </TextBoldItaLic>

                  {openCK ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                </Box>

                <TextBoldItaLic>{v_Profit.SUM_STOCK} </TextBoldItaLic>
              </ListItemButton>
              <Collapse in={openCK} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButtonS >
                  <TextBase>Chứng khoán có sẵn</TextBase>
                 
                    <TextBase>{v_Profit.AVAL_STOCK} </TextBase>
                  </ListItemButtonS>
                  <ListItemButtonS >
                  <TextBase>Chứng khoán mua chờ về</TextBase>
                
                    <TextBase>{v_Profit.ABUY_STOCK} </TextBase>
                  </ListItemButtonS>
                  <ListItemButtonS>
                  <TextBase>Chứng khoán quyền chờ về</TextBase>
                    <TextBase>{v_Profit.ARIGHT_STOCK} </TextBase>
                  </ListItemButtonS>
                  <ListItemButtonS>
                    <Box display="flex">
                    <TextBase>Chứng khoán hạn chế</TextBase>
               
                      <Tooltip title="Bao gồm CK hạn chế giao dịch, Cầm cố Ngân hàng">
                        <InfoIcon sx={{ ml: "5px", fontSize: "16px" }} />
                      </Tooltip>
                    </Box>

                    <TextBase>{v_Profit.ALIMIT_STOCK} </TextBase>
                  </ListItemButtonS>
                </List>
              </Collapse>
              <ListItemButton
                onClick={() => setOpenMonney(!openMonney)}
                sx={{ justifyContent: "space-between" }}
              >
                <Box display="flex">
                  <TextBoldItaLic>II. TIỀN </TextBoldItaLic>

                  {openMonney ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                </Box>

                <TextBoldItaLic>{v_Profit.SUM_CASH} </TextBoldItaLic>
              </ListItemButton>
              <Collapse in={openMonney} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButtonS>
                  <TextBase>Tiền trong tài khoản</TextBase>
                    
                    <TextBase>{v_Profit.ACASH_AMOUNT} </TextBase>
                  </ListItemButtonS>
                  <ListItemButtonS
                    onClick={() => setOpenMonneyReturn(!openMonneyReturn)}
                  >
                    <Box display="flex">
                    <TextBase>Tiền bán chờ thanh toán</TextBase>
                     
                      {openMonneyReturn ? (
                        <ArrowDropUpIcon />
                      ) : (
                        <ArrowDropDownIcon />
                      )}
                    </Box>

                    <TextBase>{v_Profit.AREC_CASH_SELL} </TextBase>
                  </ListItemButtonS>
                  <Collapse in={openMonneyReturn} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                      <ListItemButtonS sx={{pl:'180px'}}>
                      <TextBase>T0</TextBase>
                        <TextBase >
                          {v_Profit.AREC_CASH_T0}
                        </TextBase>
                      </ListItemButtonS>
                      <ListItemButtonS  sx={{pl:'180px'}}>
                      <TextBase>T1 </TextBase>
                        <TextBase>{v_Profit.AREC_CASH_T1} </TextBase>
                      </ListItemButtonS>
                      <ListItemButtonS  sx={{pl:'180px'}}>
                      <TextBase>T2 </TextBase>
                        <TextBase>{v_Profit.AREC_CASH_T2} </TextBase>
                      </ListItemButtonS>
                    </List>
                  </Collapse>
                  <ListItemButtonS >
                  <TextBase>Tiền cổ tức chờ về</TextBase>
                   
                    <TextBase>{v_Profit.ARE_CASH_DEVIDEND} </TextBase>
                  </ListItemButtonS>
                  <ListItemButtonS >
                    <Box display="flex">
                    <TextBase>Tiền chờ về khác</TextBase>
                     
                      <Tooltip title="Tiền thanh toán đáo hạn, chứng quyền chờ về">
                        <InfoIcon sx={{ ml: "5px", fontSize: "16px" }} />
                      </Tooltip>
                    </Box>
                    <TextBase>{v_Profit.ARE_CASH_OTHER} </TextBase>
                  </ListItemButtonS>
                  <ListItemButtonS >
                  <TextBase>Tiền gửi, tiền cho vay </TextBase>
             
                    <TextBase>{v_Profit.ASAVINGTOTAL} </TextBase>
                  </ListItemButtonS>
                </List>
              </Collapse>
              <ListItemButton
                onClick={() => setOpenMonney(!openMonney)}
                sx={{ justifyContent: "space-between" }}
              >
                <TextBoldItaLic fontStyle="italic">
                  III. DƯ NỢ VAY KÝ QUỸ
                </TextBoldItaLic>
                <TextBoldItaLic>{v_Profit.AREMAIN_DEBT} </TextBoldItaLic>
              </ListItemButton>
            </List>
          ))}
        </Box>
        {/* <PageMonney prop={dataCTCK}/> */}

        <Box>
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
          <TableContainer   sx={{ maxHeight: 560 }}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell colSpan={11} >CHI TIẾT CHỨNG KHOÁN</StyledTableCell>
                  <StyledTableCell colSpan={4} align="right">LÃI/LỖ DỰ KIẾN</StyledTableCell>
                  
                  <StyledTableCell rowSpan={3}>Cơ cấu vốn</StyledTableCell>
                  <StyledTableCell rowSpan={3} align="right">Tỉ trọng DM</StyledTableCell>
        
           
                </TableRow>
                <TableRow>
                  <StyledTableCell rowSpan={2}>Mã CK</StyledTableCell>
                  <StyledTableCell rowSpan={2}>CK có sẵn</StyledTableCell>
                  <StyledTableCell colSpan={3}>CK mua chờ về</StyledTableCell>
                 
                  <StyledTableCell rowSpan={2}>CK quyền chờ về</StyledTableCell>
                  <StyledTableCell rowSpan={2}>CK cầm cố NH</StyledTableCell>
                  <StyledTableCell rowSpan={2}>CK hạn chế GD</StyledTableCell>
                  <StyledTableCell rowSpan={2}>
                    Tổng KL
                  </StyledTableCell>
                  <StyledTableCell rowSpan={2}>
                    Giá TT
                  </StyledTableCell>
                  <StyledTableCell rowSpan={2}>Thành tiền</StyledTableCell>
                  <StyledTableCell rowSpan={2}>Giá vốn TB</StyledTableCell>
                  <StyledTableCell rowSpan={2}>Tổng giá vốn</StyledTableCell>
                  <StyledTableCell rowSpan={2}>
                   Lãi/Lỗ
                  </StyledTableCell >
                  <StyledTableCell rowSpan={2}>
                 % Lãi/Lỗ
                  </StyledTableCell>
             
        
           
                </TableRow>
                <TableRow>
            
                  <StyledTableCell >T0</StyledTableCell>
                  <StyledTableCell >
                   T1
                  </StyledTableCell>
                  <StyledTableCell >
                  T2
                  </StyledTableCell>
                
               
                
        
           
                </TableRow>
              </TableHead>
              <TableBody>
                {dataCTCK?.map(
                  (vProfit2) => (
                    (valuePTLL = vProfit2?.APROFIT_LOSS_RATE),
                    vProfit2.AAVG_PRICE == 0
                      ? (valuePTLL = "-")
                      : (valuePTLL = "0"),
                    (
                      <StyledTableRow key={vProfit2.ASTOCKCODE}>
                        <StyledTableCell component="th" scope="row">
                          {vProfit2.ASTOCKCODE}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {" "}
                          {vProfit2.ATRADING_READY_TOTAL}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {vProfit2.ABUY_INTRADY}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {vProfit2.AT1}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {vProfit2.AT2}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {vProfit2.AWAIT_REC_RIGHT}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {vProfit2.AMORTGATE_BANK}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {vProfit2.ATRANSFER_RESTRICTED}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {vProfit2.ATOTAL_AMOUNT}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {vProfit2.AMARKET_PRICE}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {vProfit2.AMARKET_VALUE}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {vProfit2.AAVG_PRICE}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {vProfit2.AROOT_VALUE}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {vProfit2.APROFIT_LOSS_VAL}
                        </StyledTableCell>
                        <StyledTableCell align="right" >
                          {vProfit2.AAVG_PRICE}
                        </StyledTableCell>
                        <StyledTableCell align="right" >
                          {vProfit2.ACAPITAL_STRUCTURE}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {vProfit2.APORTFOLIO_RATE}
                        </StyledTableCell>
                      </StyledTableRow>
                    )
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
        <TableHead>
                <TableRow>
                  <StyledTableCell colSpan={11} >CHI TIẾT CHỨNG KHOÁN</StyledTableCell>
                  <StyledTableCell colSpan={4} align="right">LÃI/LỖ DỰ KIẾN</StyledTableCell>
                  
                  <StyledTableCell rowSpan={3}>Cơ cấu vốn</StyledTableCell>
                  <StyledTableCell rowSpan={3} align="right">Tỉ trọng DM</StyledTableCell>
        
           
                </TableRow>
                <TableRow>
                  <StyledTableCell rowSpan={2}>Mã CK</StyledTableCell>
                  <StyledTableCell rowSpan={2}>CK có sẵn</StyledTableCell>
                  <StyledTableCell colSpan={3}>CK mua chờ về</StyledTableCell>
                 
                  <StyledTableCell rowSpan={2}>CK quyền chờ về</StyledTableCell>
                  <StyledTableCell rowSpan={2}>CK cầm cố NH</StyledTableCell>
                  <StyledTableCell rowSpan={2}>CK hạn chế GD</StyledTableCell>
                  <StyledTableCell rowSpan={2}>
                    Tổng KL
                  </StyledTableCell>
                  <StyledTableCell rowSpan={2}>
                    Giá TT
                  </StyledTableCell>
                  <StyledTableCell rowSpan={2}>Thành tiền</StyledTableCell>
                  <StyledTableCell rowSpan={2}>Giá vốn TB</StyledTableCell>
                  <StyledTableCell rowSpan={2}>Tổng giá vốn</StyledTableCell>
                  <StyledTableCell rowSpan={2}>
                   Lãi/Lỗ
                  </StyledTableCell >
                  <StyledTableCell rowSpan={2}>
                 % Lãi/Lỗ
                  </StyledTableCell>
             
        
           
                </TableRow>
                <TableRow>
            
                  <StyledTableCell >T0</StyledTableCell>
                  <StyledTableCell >
                   T1
                  </StyledTableCell>
                  <StyledTableCell >
                  T2
                  </StyledTableCell>      
                </TableRow>
              </TableHead>
          <TableBody>
            {dataCTCK?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row:any) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.ASTOCKCODE}>
                    {columns.map((column) => {
                      const value = row[column.ASTOCKCODE];
                      return (
                        <TableCell key={column.ASTOCKCODE} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={dataCTCK?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper> */}
        </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default pageBCTS;
