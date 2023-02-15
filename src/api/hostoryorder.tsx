import { HisOrder } from "@/models/historyorder";
import instance from "./instance";

export const list = () => {
    const url = "/";
    return instance.get(url);
}
export const listrest = (HisOrder:HisOrder) => {
    const url = "/";
    return instance.post(url,HisOrder);
}
