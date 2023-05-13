import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

interface ITheme {
  mode: "light" | "dark"
  fontsize: number
}

const initialState: ITheme = {
  mode: "dark",
  fontsize: 16,
}

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleMode: (state) => {
      if (state.mode === "dark") {
        state.mode = "light"
        return
      }
      if (state.mode === "light") {
        state.mode = "dark"
        return
      }
    },
    setFontSize: (state, action: PayloadAction<number>) => {
      state.fontsize = action.payload
    },
  },
})

export default themeSlice.reducer

export const themeModel = {
  ...themeSlice.actions,
  mode: (state: RootState) => state.theme.mode,
  fontsize: (state: RootState) => state.theme.fontsize,
}
