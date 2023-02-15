"use client"
import LoadingComponent from '@/layout/LoaddingComponent';
import { ModelLSDL } from '@/models/Report/ReportLSDL';
import { Box, FormControl, InputLabel, Select, MenuItem, Stack, TextField, Button, SelectChangeEvent } from '@mui/material';
import { LocalizationProvider, DesktopDatePicker } from '@mui/x-date-pickers';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from 'axios';
import dayjs, { Dayjs } from 'dayjs';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useTranslation } from "react-i18next";
const LSDL = () => {
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
    // const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    //   setValue(newValue);
    // };
    const handleChangeDate = (newValueDate: Dayjs | null) => {
      setValueDate(newValueDate);
    };
    const [products, setProducts] = useState<ModelLSDL| null>(null);
    const [loading,setLoading] = useState(true);
    const { register, handleSubmit } = useForm();
      const onHandleSubmit =(data:any)=>{
       console.log(data)
      }
    useEffect(() => {
        axios.get(`http://localhost:8480/api/stock/v1/report/order_his/058C222210?buy_sell=ALL&exchange=ALL&stock_code=ALL&trading_account=ALL&order_status=ALL&from_date=01/10/2022&to_date=7/12/2022`)
        .then(res=>setProducts(res.data))
        .catch(error=>{
          console.log(error);
        })
        .finally(()=> setLoading(false));
      }, []);
      if (loading) return <LoadingComponent message="Lịch sử đặt lệnh"/>
      if(!products) return <h3>Product not found...</h3>
      console.log(products);
      
  return (
   <Box>
      <Box display="flex" sx={{ float: "right" }}>
        <Box component="form" onSubmit={handleSubmit(onHandleSubmit)}>
        <Box display='flex' > 
            <Box sx={{ minWidth: 100, marginRight: "20px" }}>
              <FormControl variant="standard" sx={{ minWidth: 100 }}>
                <InputLabel id="demo-simple-select-standard-label">
                {t('home:base.SanGD')} 
                </InputLabel>

                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={valueSanGD}
                  
                  {...register("sanGD")}
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
               
                  {...register("maCK")}
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
                  {...register("ttLenh")}
                  label="Age"
                >
                  <MenuItem value={10}>{t('home:base.TatCa')}</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ width: 155, marginRight: "20px",marginTop:"8px" }}>
              <Stack>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DesktopDatePicker
                    label=         {t('home:base.TuNgay')}
                    inputFormat="MM/DD/YYYY"
                    value={valueDate}
                    // onChange={e => handleChangeDate('city', e.target.value, { shouldValidate: true })}
                    onChange={handleChangeDate}

                
                    renderInput={(params: any) => <TextField size="small" {...params}  {...register("formDate")}  />}
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

                   
                    renderInput={(params: any) => <TextField size="small" {...params}   {...register("toDate")} />}
                  />
                </LocalizationProvider>
              </Stack>
            </Box>
            <input type="submit" value="Cập nhật"></input>
            </Box>
           
           
        </Box>
   
            {/* <Button type="submit" sx={{marginTop:'8px'}} size="small" variant="outlined">{t('home:base.CapNhat')}</Button> */}
          </Box>
   </Box>
  )
}

export default LSDL