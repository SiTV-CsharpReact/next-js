import { HisOrder,ModelLSDL } from "@/models/Report/ReportLSDL";
import instance from "./instance";

export const listLSDL = () => {
     const url = "/order_his/058C222210?buy_sell=ALL&exchange=ALL&stock_code=ALL&trading_account=ALL&order_status=ALL&from_date=01/10/2022&to_date=7/12/2022";
    return instance.get(url);
}
export const listrest = (HisOrder:HisOrder) => {
    const url = "/";
    return instance.post(url,HisOrder);
}
export const listBCTS = (url:string) => {
    // const url = "/bcts/058C222210";
    return instance.get(url);
}