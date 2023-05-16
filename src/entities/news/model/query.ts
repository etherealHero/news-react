import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { EDateVariants } from "../../../shared"
// import { RootState } from "../../../app/store"

enum Model {
  name = "query",
}

interface IQuery {
  page: number
  pageSize: number
  dateVariant: EDateVariants
  date: string | null
  isInfinite?: boolean
}

const initialState: IQuery = {
  page: 1,
  pageSize: 3,
  dateVariant: EDateVariants.all,
  date: null,
}

export const newsSlice = createSlice({
  name: Model.name,
  initialState,
  reducers: {
    setPageSizeWithReset: (state, action: PayloadAction<number>) => {
      state.pageSize = action.payload

      // reset data
      state.page = 1
      state.dateVariant = EDateVariants.all
      state.date = null
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setDateVariant: (state, action: PayloadAction<EDateVariants>) => {
      state.dateVariant = action.payload
    },
    setDate: (state, action: PayloadAction<string | null>) => {
      state.date = action.payload
    },
    setIsInfiniteQuery: (state, action: PayloadAction<boolean>) => {
      state.isInfinite = action.payload
    },
  },
})

export default newsSlice.reducer

export const queryModel = {
  ...newsSlice.actions,
}
