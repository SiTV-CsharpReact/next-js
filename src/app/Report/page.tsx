"use client";
import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useNavigate } from "react-router-dom";
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
import { GetStaticProps, GetStaticPropsContext } from "next";

import { Filter, HisOrder } from "@/models/historyorder";

import { useForm, SubmitHandler } from "react-hook-form";
import { list } from "@/api/hostoryorder";
import inputDatePicker from "@/components/common/inputDatePicker";
import InputDatePicker from "@/components/common/inputDatePicker";
interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}
const listSanGD: string[] = [];
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

type ProductsProps = {
  posts: any[];
};
const posts = {};
// ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function ClientActivityRange(posts: ProductsProps) {
  const { t } = useTranslation(["home", "report"]);
  const [value, setValue] = useState("1");
  const [age, setAge] = useState("");
  const [valueSanGD, setValueSanGD] = useState("");
  const [valueMaCK, setValueMaCK] = useState("");
  const [valueTTLenh, setValueTTLenh] = useState("");
  const c = dayjs();
  const [valueDateFrom, setValueDateFrom] = useState<Dayjs | null>(c.month(-0));
  const [valueDateTo, setValueDateTo] = useState<Dayjs | null>(c);
  const handleChangeS = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const handleUpdate = () => {};
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
  const handleChangeDateFrom = (newValueDateFrom: Dayjs | null) => {
    setValueDateFrom(newValueDateFrom);
  };
  const handleChangeDateTo = (newValueDateTo: Dayjs | null) => {
    setValueDateTo(newValueDateTo);
  };
  // const [product, setProduct] = useState<HisOrder[]>([]);
  // useEffect(() => {
  //   const getProduct = async () => {
  //     const { data } = await list();
  //     setProduct(data);
  //     console.log(data);
  //   };
  //   getProduct();

  // }, []);
  const [product, setProduct] = useState<HisOrder[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");
  const handleClick = async () => {
    setIsLoading(true);

    try {
      const product = await fetch("http://localhost:8480/Data", {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      });

      if (!product.ok) {
        throw new Error(`Error! status: ${product .status}`);
      }

      const result = await product.json();

      console.log("result is: ", JSON.stringify(result, null, 4));

      setProduct(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(product);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - product.length) : 0;

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Filter>();
  const onHandleSubmit = (data: any) => {
    console.log(data);  
  };

  //   const { register, handleSubmit } = useForm();      const onHandleSubmit =(data:any)=>{       console.log(data)      }


  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
     
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label={t("report:menu.REPORT_LSDL")} value="1" />
            <Tab label={t("report:menu.REPORT_LSKL")} value="2" />
            <Tab label={t("report:menu.REPORT_LCKTT")} value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          {t("report:menu.REPORT_LSDL")}

          <Box
            display="flex"
            sx={{ float: "right" }}
            // onSubmit={handleSubmit(onSubmit)}
          >
            {/* onSubmit={handleSubmit(onHandleSubmit)} */}
            <Box display="flex" component="form">
              <Box sx={{ minWidth: 100, marginRight: "20px" }}>
                <FormControl variant="standard" sx={{ minWidth: 100 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    {t("home:base.SanGD")}
                  </InputLabel>

                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    // value={valueSanGD}
                     {...register("SanGD")}
                    label="Age"
                  >
                    <MenuItem value="Tat ca"> {t("home:base.TatCa")} </MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ minWidth: 80, marginRight: "20px" }}>
                <FormControl variant="standard" sx={{ minWidth: 80 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    {t("home:base.Stock")}
                  </InputLabel>

                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                   {...register("MaCK")}
                    label="Age"
                  >
                    <MenuItem value="Tat ca"> {t("home:base.TatCa")}</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ minWidth: 140, marginRight: "20px" }}>
                <FormControl variant="standard" sx={{ minWidth: 140 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    {t("home:base.TinhTrangLenh")}
                  </InputLabel>

                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    // value={valueTTLenh}
                    {...register("TinhTrangLenh")}
                    label="Age"
                  >
                    <MenuItem value="Tat ca">{t("home:base.TatCa")}</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ width: 155, marginRight: "20px", marginTop: "8px" }}>
                <Stack>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      label={t("home:base.TuNgay")}
                      inputFormat="MM/DD/YYYY"
                      value={valueDateFrom}
                      onChange={handleChangeDateFrom}
                      renderInput={(params: any) => (
                        <TextField
                          size="small"
                          {...params}
                          {...register("DateForm")}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Stack>
              </Box>
              <Box sx={{ width: 155, marginRight: "20px", marginTop: "8px" }}>
                <Stack>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                      label={t("home:base.DenNgay")}
                      inputFormat="MM/DD/YYYY"
                      value={valueDateTo}
                      onChange={handleChangeDateTo}
                      renderInput={(params: any) => (
                        <TextField
                          size="small"
                          {...params}
                          {...register("DateTo")}
                        />
                      )}
                    />
                  </LocalizationProvider>
                </Stack>
              </Box>
              <Box sx={{ minWidth: 140, marginRight: "20px" }}>
                <FormControl variant="standard" sx={{ minWidth: 140 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    {t("home:base.ThuTuSapXep")}
                  </InputLabel>

                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    // value={valueTTLenh}
                    {...register("SortBy")}
                    label="Age"
                  >
                    <MenuItem value="ASC">{t("home:base.TatCa")}</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              
              
            </Box>
            <input
                type="submit"
                onClick={handleClick}
                value="Cập nhật"
              ></input>
            {/*           
            <Button
              sx={{ marginTop: "8px" }}
              size="small"
              variant="outlined"
              onClick={() => {
                handleUpdate();
              }}
            >
              {t("home:base.CapNhat")}
            </Button>
            <FlatButton
        type="submit"
        label="Reset"
        secondary={true}
        style={{ float: 'left' }}
        /> */}
          </Box>

          <Box marginTop="50px">
            <TableContainer component={Paper}>
              <Table aria-label="custom pagination table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>{t("home:base.Time")}</StyledTableCell>
                    <StyledTableCell align="right">
                      {t("home:base.Stock")}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {t("home:base.LoaiGD")}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {t("home:base.MuaBan")}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {t("home:base.LoaiLenh")}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {t("home:base.SoLuong")}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {t("home:base.Gia")}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {t("home:base.SanGD")}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {t("home:base.TinhTrang")}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {t("home:base.PhuongThucDatLenh")}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {t("home:base.SHL")}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {t("home:base.ThongBao")}
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {err && <h2>{err}</h2>}
                {isLoading && <h2>Loading...</h2>}
                  {(rowsPerPage > 0
                    ? product.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : product
                  ).map(
                    (product) => (
                      // listSanGD.push(product.AEXCHANGE),
                      (
                        <TableRow key={product.AORDERID}>
                          <TableCell component="th" scope="row">
                            {product.ATRANID}
                          </TableCell>
                          <TableCell style={{ width: 160 }} align="right">
                            {product.ACLIENTCODE}
                          </TableCell>
                          <TableCell style={{ width: 160 }} align="right">
                            {product.AQUANTITY}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {product.ATRADEDQTY}
                          </TableCell>
                          <TableCell style={{ width: 160 }} align="right">
                            {product.AREMAININGQTY}
                          </TableCell>
                          <TableCell style={{ width: 160 }} align="right">
                            {product.APRICETYPE}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {product.AORDERSTATUS_VN}
                          </TableCell>
                          <TableCell style={{ width: 160 }} align="right">
                            {product.AERRORCODE}
                          </TableCell>
                          <TableCell style={{ width: 160 }} align="right">
                            {product.AMODIFYQTY}
                          </TableCell>
                          <TableCell component="th" scope="row">
                            {product.ADATETIME}
                          </TableCell>
                          <TableCell style={{ width: 160 }} align="right">
                            {product.ALASTTRADEDTIME}
                          </TableCell>
                          <TableCell style={{ width: 160 }} align="right">
                            {product.AEXCHANGEORDERNO}
                          </TableCell>
                        </TableRow>
                      )
                    )
                  )}
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
                      count={product.length}
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
        <TabPanel value="2"> {t("report:menu.REPORT_LSKL")}</TabPanel>
        <TabPanel value="3"> {t("report:menu.REPORT_LCKTT")} </TabPanel>
      </TabContext>
    </Box>
  );
}
