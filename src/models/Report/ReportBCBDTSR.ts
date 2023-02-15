export interface ModelBCBDTSR {
    Code: number
    Message: string
    Data: Data
  }
  
  export interface Data {
    Table: Table[]
    Table1: Table1[]  
  }
  
  export interface Table {
    STAGE: string
  ANAV: number
  ATOTAL_CASH: number
  ACASH_AMOUNT: number
  AREC_CASH_SELL: number
  ARE_CASH_DEVIDEND: number
  AMARKET_VALUE: number
  AREMAIN_DEBT: number
  ACASH_IN: number
  ACASH_DE: number
  ASTOCK_IN: number
  ASTOCK_DE: number
  ARE_CASH_OTHER: number
  ASAVINGTOTAL: number
  }
  
  export interface Table1 {
    ASTATUS: number
    TIME: string
  }
