import { Box, Stack, TextField } from "@mui/material";
import { LocalizationProvider, DesktopDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

const inputDatePicker = ()=> {
    const { t } = useTranslation(["home", "report"]);
    const [valueDate, setValueDate] = useState<Dayjs | null>(dayjs());
    const handleChangeDate = (newValueDate: Dayjs | null) => {
        setValueDate(newValueDate);
      };
      const { register } = useForm();
 return(
    <>
    
    </>
 )
}
export default inputDatePicker;