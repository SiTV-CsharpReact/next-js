import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';
import { Select , Option} from "@material-tailwind/react";
import { useForm } from "react-hook-form";

const InputTextField = () => {
    const { register } = useForm();
  return (
    <div className="w-72">
   <select {...register("oke")}>
    <option>oke</option>
   </select>
  </div>
  )
}

export default InputTextField