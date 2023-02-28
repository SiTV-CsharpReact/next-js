import { listLSDL, listBCTS, } from "@/api/Report/HistoryOrder"

import useSWR from "swr"
const Report = () => {
  const fetcher = async () => {
    const { data } = await listLSDL();
    return data.Data;
  }
  const { data, error, mutate } = useSWR('', fetcher, { dedupingInterval: 5000 })
  return {
    data,
    error,
    mutate,
    
  }
}

export default Report