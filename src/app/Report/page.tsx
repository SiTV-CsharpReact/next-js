'use client'
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, NativeSelect, Button, TextField, Stack, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TablePagination, TableRow, IconButton, useTheme, TableHead, styled, tableCellClasses } from '@mui/material';
import Typography from '@mui/material/Typography';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import colorConfigs from '@/configs/colorConfigs';

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

function createData(time: string, maCK: string, loaiGD: string,MB: string,loaiLenh: string,soLuong: string,gia: string,sanGD: string,tinhTrang: string,PthucDatLenh: string,SHL: string,thongBao: string) {
  return { time, maCK, loaiGD,MB,loaiLenh,soLuong,gia,sanGD,tinhTrang,PthucDatLenh,SHL,thongBao};
}
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.mode === 'dark' ?'#fff': colorConfigs.sidebar.bg ,
    color: theme.palette.mode === 'dark' ?'#000': '#fff' ,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const rows = [
  createData('24/08/2022 12:21:20', 'ABC', 'EzMarPro','Bán	', 'Lệnh mới', '200','12,000', 'HSX', 'Đã khớp','INTERNET','15321', 'Lệnh đặt thành công!'),
  createData('24/08/2022 12:21:20', 'AAA', 'EzMargin','Mua	', 'Lệnh mới', '300','13,000', 'HSX', 'Đã khớp','INTERNET','15322', 'Lệnh đặt thành công!'),
  createData('24/08/2022 12:21:20', 'AAV', 'EzMarPro','Mua	', 'Lệnh mới', '200','1,000', 'HNX', 'Đã khớp','INTERNET','15323', 'Lệnh đặt thành công!'),
  createData('24/08/2022 12:21:20', 'AAA', 'EzMarPro','Mua	', 'Lệnh mới', '600','12,000', 'HSX', 'Đã khớp','INTERNET','15324', 'Lệnh đặt thành công!'),
  createData('24/08/2022 12:21:20', 'AAA', 'EzMarPro','Mua	', 'Lệnh mới', '200','12,000', 'HSX', 'Đã khớp','INTERNET','15325', 'Lệnh đặt thành công!'),
  createData('24/08/2022 12:21:20', 'ABC', 'EzMarPro','Bán	', 'Lệnh mới', '200','12,000', 'HSX', 'Đã khớp','INTERNET','15326', 'Lệnh đặt thành công!'),
  createData('24/08/2022 12:21:20', 'AAA', 'EzMargin','Mua	', 'Lệnh mới', '300','13,000', 'HSX', 'Đã khớp','INTERNET','15327', 'Lệnh đặt thành công!'),
  createData('24/08/2022 12:21:20', 'AAV', 'EzMarPro','Mua	', 'Lệnh mới', '200','1,000', 'HNX', 'Đã khớp','INTERNET','15320', 'Lệnh đặt thành công!'),
  createData('24/08/2022 12:21:20', 'AAA', 'EzMarPro','Mua	', 'Lệnh mới', '600','12,000', 'HSX', 'Đã khớp','INTERNET','15330', 'Lệnh đặt thành công!'),
  createData('24/08/2022 12:21:20', 'AAA', 'EzMarPro','Mua	', 'Lệnh mới', '200','12,000', 'HSX', 'Đã khớp','INTERNET','15328', 'Lệnh đặt thành công!'),
]
// ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

export default function ClientActivityRange() {
  const [value, setValue] = React.useState('1');
  const [age, setAge] = React.useState('');
  const [valueDate, setValueDate] = React.useState<Dayjs | null>(
    dayjs(),
  );
  const handleChangeS = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  const handleChangeDate = (newValueDate: Dayjs | null) => {
    setValueDate(newValueDate);
  };

// table
const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(5);

// Avoid a layout jump when reaching the last page with empty rows.
const emptyRows =
  page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

const handleChangePage = (
  event: React.MouseEvent<HTMLButtonElement> | null,
  newPage: number,
) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
) => {
  setRowsPerPage(parseInt(event.target.value, 10));
  setPage(0);
};


  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Lịch sử đặt lệnh" value="1" />
            <Tab label="Lịch sử khớp lệnh" value="2" />
            <Tab label="Lệnh khớp chờ t.toán" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          
          Lịch sử đặt lệnh
          <Box display='flex' sx={{float:'right'}}>
        
          <Box sx={{ minWidth: 120, marginRight:'20px' }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
       Loại lệnh
        </InputLabel>
        <NativeSelect
         
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Tất cả</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
    </Box>

    <Box sx={{ minWidth: 120 , marginRight:'20px'}}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
         Mã CK
        </InputLabel>
        <NativeSelect
          
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value={10}>Tất cả</option>
          <option value={20}>Twenty</option>
          <option value={30}>Thirty</option>
        </NativeSelect>
      </FormControl>
    </Box>
  
    <Box className="oke">
   <Stack spacing={3}>
   <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DesktopDatePicker
          label="Từ ngày"
          inputFormat="MM/DD/YYYY"
          value={valueDate}
          onChange={handleChangeDate}
          renderInput={(params:any) => <TextField {...params} />}
        />

</LocalizationProvider>
</Stack>
   </Box>
   <Box className="oke">
   <Stack spacing={3}>
   <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DesktopDatePicker
          label="Đến ngày"
          inputFormat="MM/DD/YYYY"
          value={valueDate}
          onChange={handleChangeDate}
          renderInput={(params:any) => <TextField {...params} />}
        />

</LocalizationProvider>
</Stack>
   </Box>
 
    
   <Button variant="outlined">Cập nhật</Button>
          </Box>
       
          <Box marginTop='50px'>
          <TableContainer component={Paper}>
      <Table aria-label="custom pagination table">
      <TableHead>
          <TableRow>
            <StyledTableCell>Thời gian</StyledTableCell>
            <StyledTableCell align="right">Mã CK</StyledTableCell>
            <StyledTableCell align="right">Loại GD</StyledTableCell>
            <StyledTableCell align="right">M/B</StyledTableCell>
            <StyledTableCell align="right">Loại lệnh</StyledTableCell>
            <StyledTableCell align="right">Số lượng</StyledTableCell>
            <StyledTableCell align="right">Giá</StyledTableCell>
            <StyledTableCell align="right">Sàn GD</StyledTableCell>
            <StyledTableCell align="right">Tình trạng</StyledTableCell>
            <StyledTableCell align="right">P.thức đặt lệnh</StyledTableCell>
            <StyledTableCell align="right">SHL</StyledTableCell>
            <StyledTableCell align="right">Thông báo</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row:any) => (
            <TableRow key={row.time}>
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
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={15}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
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
        <TabPanel value="2">Lịch sử khớp lệnh</TabPanel>
        <TabPanel value="3">Lệnh khớp chờ t.toán </TabPanel>
      </TabContext>
    </Box>
  );
}
