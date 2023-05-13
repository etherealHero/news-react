import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

import { getNews, IArticle } from "../../shared"

enum Model {
  name = "news",
}

const fetchNews = createAsyncThunk(`${Model.name}/fetch`, getNews)

interface INews {
  totalResults: number
  articles: IArticle[] | []
  status: string | null
  error: Error | null
}

const initialState: INews = {
  totalResults: 0,
  articles: [],
  status: null,
  error: null,
}

export const newsSlice = createSlice({
  name: Model.name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.status = "pending"
      state.error = null
    })
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.status = action.payload.status
      state.articles = action.payload.articles
    })
    builder.addCase(fetchNews.rejected, (state) => {
      state.status = "error"
      state.error = new Error("Что-то пошло не так")
    })
  },
})

export default newsSlice.reducer

export const newsModel = {
  ...newsSlice.actions,
  fetchNews,
  articles: (state: RootState) => state.news.articles,
  status: (state: RootState) => state.news.status,
  totalResults: (state: RootState) => state.news.totalResults,
  error: (state: RootState) => state.news.error,
}
