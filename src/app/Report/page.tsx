"use client";
import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
  NativeSelect,
  Button,
  TextField,
  Stack,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  IconButton,
  useTheme,
  TableHead,
  styled,
  tableCellClasses,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import colorConfigs from "@/configs/colorConfigs";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { GetStaticProps, GetStaticPropsContext } from 'next'
interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

function createData(
  time: string,
  maCK: string,
  loaiGD: string,
  MB: string,
  loaiLenh: string,
  soLuong: string,
  gia: string,
  sanGD: string,
  tinhTrang: string,
  PthucDatLenh: string,
  SHL: string,
  thongBao: string
) {
  return {
    time,
    maCK,
    loaiGD,
    MB,
    loaiLenh,
    soLuong,
    gia,
    sanGD,
    tinhTrang,
    PthucDatLenh,
    SHL,
    thongBao,
  };
}
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor:
      theme.palette.mode === "dark" ? "#fff" : colorConfigs.sidebar.bg,
    color: theme.palette.mode === "dark" ? "#000" : "#fff",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const rows = [
  createData(
    "24/08/2022 12:21:20",
    "ABC",
    "EzMarPro",
    "Bán	",
    "Lệnh mới",
    "200",
    "12,000",
    "HSX",
    "Đã khớp",
    "INTERNET",
    "15321",
    "Lệnh đặt thành công!"
  ),
  createData(
    "24/08/2022 12:21:20",
    "AAA",
    "EzMargin",
    "Mua	",
    "Lệnh mới",
    "300",
    "13,000",
    "HSX",
    "Đã khớp",
    "INTERNET",
    "15322",
    "Lệnh đặt thành công!"
  ),
  createData(
    "24/08/2022 12:21:20",
    "AAV",
    "EzMarPro",
    "Mua	",
    "Lệnh mới",
    "200",
    "1,000",
    "HNX",
    "Đã khớp",
    "INTERNET",
    "15323",
    "Lệnh đặt thành công!"
  ),
  createData(
    "24/08/2022 12:21:20",
    "AAA",
    "EzMarPro",
    "Mua	",
    "Lệnh mới",
    "600",
    "12,000",
    "HSX",
    "Đã khớp",
    "INTERNET",
    "15324",
    "Lệnh đặt thành công!"
  ),
  createData(
    "24/08/2022 12:21:20",
    "AAA",
    "EzMarPro",
    "Mua	",
    "Lệnh mới",
    "200",
    "12,000",
    "HSX",
    "Đã khớp",
    "INTERNET",
    "15325",
    "Lệnh đặt thành công!"
  ),
  createData(
    "24/08/2022 12:21:20",
    "ABC",
    "EzMarPro",
    "Bán	",
    "Lệnh mới",
    "200",
    "12,000",
    "HSX",
    "Đã khớp",
    "INTERNET",
    "15326",
    "Lệnh đặt thành công!"
  ),
  createData(
    "24/08/2022 12:21:20",
    "AAA",
    "EzMargin",
    "Mua	",
    "Lệnh mới",
    "300",
    "13,000",
    "HSX",
    "Đã khớp",
    "INTERNET",
    "15327",
    "Lệnh đặt thành công!"
  ),
  createData(
    "24/08/2022 12:21:20",
    "AAV",
    "EzMarPro",
    "Mua	",
    "Lệnh mới",
    "200",
    "1,000",
    "HNX",
    "Đã khớp",
    "INTERNET",
    "15320",
    "Lệnh đặt thành công!"
  ),
  createData(
    "24/08/2022 12:21:20",
    "AAA",
    "EzMarPro",
    "Mua	",
    "Lệnh mới",
    "600",
    "12,000",
    "HSX",
    "Đã khớp",
    "INTERNET",
    "15330",
    "Lệnh đặt thành công!"
  ),
  createData(
    "24/08/2022 12:21:20",
    "AAA",
    "EzMarPro",
    "Mua	",
    "Lệnh mới",
    "200",
    "12,000",
    "HSX",
    "Đã khớp",
    "INTERNET",
    "15328",
    "Lệnh đặt thành công!"
  ),
];
type ProductsProps = {
  products:any[]
}
// export const getStaticProps :GetStaticProps<ProductsProps>= async(context:GetStaticPropsContext)=>{
//  const res = await fetch(`https://6110f09bc38a0900171f0ed0.mockapi.io/products`);
//  console.log('getStaticProps')
//   const posts = await res.json()
//   console.log("posts")
//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       products: posts.map((item:any) => ({id: item.id, name: item.name}))
//     },
//   }
// }
export const getStaticProps :GetStaticProps<ProductsProps>= async(context:GetStaticPropsContext)=>{
  const res = await fetch(`http://localhost:8480/api/stock/v1/report/bcts/058C222210`);
  console.log('getStaticProps')
   const posts = await res.json()
   console.log("posts")
   // By returning { props: { posts } }, the Blog component
   // will receive `posts` as a prop at build time
   return {
     props: {
       products: posts.map((item:any) => ({id: item.id, name: item.name}))
     },
   }
 }
 

// ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const handleUpdate = () =>{
   console.log("oke")
}

export default function ClientActivityRange({products}: ProductsProps) {
  const {t} = useTranslation(['home','report']);
  const [value, setValue] = useState("1");
  const [age, setAge] = useState("");
  const [valueSanGD, setValueSanGD] = useState("");
  const [valueMaCK, setValueMaCK] = useState("");
  const [valueTTLenh, setValueTTLenh] = useState("");
  const [valueDate, setValueDate] = useState<Dayjs | null>(dayjs());
  const handleChangeS = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  // san GD
  const handleChangeSanGD = (event: SelectChangeEvent) => {
    setValueSanGD(event.target.value);
  };
  // Ma CK
  const handleChangeMaCK = (event: SelectChangeEvent) => {
    setValueMaCK(event.target.value);
  };
  // Tinh trang lenh
  const handleChangeTTLenh = (event: SelectChangeEvent) => {
    setValueTTLenh(event.target.value);
  };
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const handleChangeDate = (newValueDate: Dayjs | null) => {
    setValueDate(newValueDate);
  };
 
//  useEffect(()=>{
//   //onst res =  fetch('http://localhost:8480/api/stock/v1/report/order_his/058C222210?buy_sell=ALL&exchange=ALL&stock_code=ALL&trading_account=ALL&order_status=ALL&from_date=01/10/2022&to_date=7/12/2022')
//   const res =  fetch('http://localhost:8480/api/stock/v1/report/bcts/058C222210')
//   .then(res=> res.json())

//   console.log(res)
//  },[])

  // table
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label={t('report:menu.REPORT_LSDL')} value="1" />
            <Tab label={t('report:menu.REPORT_LSKL')} value="2" />
            <Tab label={t('report:menu.REPORT_LCKTT')} value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
        {t('report:menu.REPORT_LSDL')}
          <Box display="flex" sx={{ float: "right" }}>
            <Box display='flex'> 
            <Box sx={{ minWidth: 100, marginRight: "20px" }}>
              <FormControl variant="standard" sx={{ minWidth: 100 }}>
                <InputLabel id="demo-simple-select-standard-label">
                {t('home:base.SanGD')} 
                </InputLabel>

                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={valueSanGD}
                  onChange={handleChangeSanGD}
                  label="Age"
                >
                  <MenuItem value={10}>   {t('home:base.TatCa')} </MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ minWidth: 80, marginRight: "20px" }}>
              <FormControl variant="standard" sx={{ minWidth: 80 }}>
                <InputLabel id="demo-simple-select-standard-label">
                {t('home:base.Stock')}
                </InputLabel>

                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={valueMaCK}
                  onChange={handleChangeMaCK}
                  label="Age"
                >
                  <MenuItem value={10}>     {t('home:base.TatCa')}</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ minWidth: 140, marginRight: "20px" }}>
              <FormControl variant="standard" sx={{ minWidth: 140 }}>
                <InputLabel id="demo-simple-select-standard-label">
                {t('home:base.TinhTrangLenh')}
                </InputLabel>

                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={valueTTLenh}
                  onChange={handleChangeTTLenh}
                  label="Age"
                >
                  <MenuItem value={10}>{t('home:base.TatCa')}</MenuItem>
                </Select>
              </FormControl>
            </Box>
            </Box>
           
            <Box sx={{ width: 155, marginRight: "20px",marginTop:"8px" }}>
              <Stack>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label=         {t('home:base.TuNgay')}
                    inputFormat="MM/DD/YYYY"
                    value={valueDate}
                    onChange={handleChangeDate}
                    renderInput={(params: any) => <TextField size="small" {...params} />}
                  />
                </LocalizationProvider>
              </Stack>
            </Box>
            <Box  sx={{ width: 155, marginRight: "20px" ,marginTop:"8px"}}>
              <Stack  >
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                  <DesktopDatePicker
                    label=      {t('home:base.DenNgay')}
                    
                    inputFormat="MM/DD/YYYY"
                    value={valueDate}
                    onChange={handleChangeDate}
                    renderInput={(params: any) => <TextField size="small" {...params} />}
                  />
                </LocalizationProvider>
              </Stack>
            </Box>

            <Button  sx={{marginTop:'8px'}} size="small" variant="outlined"    onClick={() => {handleUpdate()}} >{t('home:base.CapNhat')}</Button>
          </Box>
          <Box marginTop="50px">
            <TableContainer component={Paper}>
              <Table aria-label="custom pagination table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>{t('home:base.Time')}</StyledTableCell>
                    <StyledTableCell align="right">{t('home:base.Stock')}</StyledTableCell>
                    <StyledTableCell align="right">{t('home:base.LoaiGD')}</StyledTableCell>
                    <StyledTableCell align="right">{t('home:base.MuaBan')}</StyledTableCell>
                    <StyledTableCell align="right">{t('home:base.LoaiLenh')}</StyledTableCell>
                    <StyledTableCell align="right">{t('home:base.SoLuong')}</StyledTableCell>
                    <StyledTableCell align="right">{t('home:base.Gia')}</StyledTableCell>
                    <StyledTableCell align="right">{t('home:base.SanGD')}</StyledTableCell>
                    <StyledTableCell align="right">{t('home:base.TinhTrang')}</StyledTableCell>
                    <StyledTableCell align="right">
                    {t('home:base.PhuongThucDatLenh')}
                    </StyledTableCell>
                    <StyledTableCell align="right">{t('home:base.SHL')}</StyledTableCell>
                    <StyledTableCell align="right">{t('home:base.ThongBao')}</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? rows.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : rows
                  ).map((row: any) => (
                    <TableRow key={row.SHL}>
                      <TableCell component="th" scope="row">
                        {row.time}
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        {row.maCK}
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        {row.loaiGD}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.MB}
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        {row.loaiLenh}
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        {row.soLuong}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.gia}
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        {row.sanGD}
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        {row.sanGD}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.PthucDatLenh}
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        {row.SHL}
                      </TableCell>
                      <TableCell style={{ width: 160 }} align="right">
                        {row.thongBao}
                      </TableCell>
                    </TableRow>
                  ))}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TablePagination
                      rowsPerPageOptions={[
                        5,
                        10,
                        25,
                        { label: "All", value: -1 },
                      ]}
                      colSpan={15}
                      count={rows.length}
                      rowsPerPage={rowsPerPage}
                      page={page}
                      SelectProps={{
                        inputProps: {
                          "aria-label": "rows per page",
                        },
                        native: true,
                      }}
                      onPageChange={handleChangePage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                      ActionsComponent={TablePaginationActions}
                    />
                  </TableRow>
                </TableFooter>
              </Table>
            </TableContainer>
          </Box>
        </TabPanel>
        <TabPanel value="2">    {t('report:menu.REPORT_LSKL')}</TabPanel>
        <TabPanel value="3">    {t('report:menu.REPORT_LCKTT')} </TabPanel>
      </TabContext>
    </Box>
  );
}

// export const getStacticProps: GetStacticProps= async (context) =>{
//   const {data} = await axios.get('http://priceboard3.fpts.com.vn/report/api/ApiData/ReportBCTS');
//   console.log(data);
// }