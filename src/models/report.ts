export interface ModelBCTS {
    Code: number
    Message: string
    Data: Data
  }
  
  export interface Data {
    Table: Table[]
    Table1: Table1[]
    Table2: Table2[]
    Table3: Table3[]
  }
  
  export interface Table {
    SUM_STOCK: number
    SUM_CASH: number
    AVAL_STOCK: number
    ABUY_STOCK: number
    ARIGHT_STOCK: number
    ALIMIT_STOCK: number
    ACASH_AMOUNT: number
    AREC_CASH_SELL: number
    AREC_CASH_T0: number
    AREC_CASH_T1: number
    AREC_CASH_T2: number
    ARE_CASH_DEVIDEND: number
    ARE_CASH_OTHER: number
    AREMAIN_DEBT: number
    ASAVINGTOTAL: number
  }
  
  export interface Table1 {
    ASTOCKCODE: string
    ATRADING_READY_TOTAL: number
    ABUY_INTRADY: number
    AT1: number
    AT2: number
    AWAIT_REC_RIGHT: number
    AMORTGATE_BANK: number
    ATRANSFER_RESTRICTED: number
    ATOTAL_AMOUNT: number
    AMARKET_PRICE: number
    AMARKET_VALUE: number
    AAVG_PRICE: number
    AROOT_VALUE: number
    APROFIT_LOSS_VAL: number
    APROFIT_LOSS_RATE: string
    ACAPITAL_STRUCTURE: number
    APORTFOLIO_RATE: number
  }
  
  export interface Table2 {
    ADATE: string
    ANAV: number
    ANAV_IN: number
    ANAV_DE: number
  }
  
  export interface Table3 {
    ASTATUS: number
    TIME: string
  }
  