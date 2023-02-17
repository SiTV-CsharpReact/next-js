export type NotiGetModel = Data[]

export interface Data {
  AID: string
  ATITLE: string
  ACLIENTCODE: string
  ATYPE: number
  ACONTENT: string
  ASUBCONTENT: string
  ATITLE_EN: string
  ACONTENT_EN: string
  ASUBCONTENT_EN: string
  AIMAGE: any
  AURL: string
  ASCHEDULEDATE: string
  ATARGETAPP: string
  ASOURCE: string
  AREADSTATUS: number
  ASTATUS: number
  ADATA: any
}


export interface NotificationSentGetModel {
    clientCode: string;
    appname: string;
    pagesize: number;
    pageindex: number;
}
export interface NotificationUnreadnotiCountModel {
    clientCode: string;
    appname: string;
    out: number;
}
export interface NotificationSentUpdateModel {
    clientCode: string;
    iD: string;
    errorCode: number;
    errorMess: string;
}