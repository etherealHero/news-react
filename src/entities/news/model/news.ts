import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../../app/store"

import { newsAPI, IArticle, INewsData } from "../../../shared"
import { AxiosError } from "axios"

enum Model {
  name = "news",
}

const fetchNews = createAsyncThunk(
  `${Model.name}/fetch`,
  async (_, thunkAPI) => {
    try {
      const { dateVariant, page, pageSize, date } = (
        thunkAPI.getState() as RootState
      ).query

      const response = await newsAPI.get({
        dateVariant,
        page,
        pageSize,
        date,
      })

      if (response.status !== 200) {
        throw new Error("Что-то пошло не так")
      }

      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(
        (error as AxiosError<INewsData>).response?.data.message
      )
    }
  }
)

const fetchArticleById = createAsyncThunk(
  `${Model.name}/fetchArticle`,
  async (opt: { page: number; pageSize: number; id: number }, thunkAPI) => {
    try {
      const { dateVariant, date } = (thunkAPI.getState() as RootState).query

      const response = await newsAPI.get({
        dateVariant,
        page: (opt.page - 1) * opt.pageSize + opt.id + 1,
        pageSize: 1,
        date,
      })

      if (response.status !== 200) {
        throw new Error("Что-то пошло не так")
      }

      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(
        (error as AxiosError<INewsData>).response?.data.message
      )
    }
  }
)

interface INews {
  totalResults: number
  articles: IArticle[] | []
  status: string | null
  error: string | null
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
      const total = action.payload.totalResults

      state.status = action.payload.status
      state.articles = action.payload.articles
      state.totalResults = total <= 100 ? total : 100
    })
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.status = "rejected"
      state.error = action.payload as string
    })
    builder.addCase(fetchArticleById.pending, (state) => {
      state.status = "pending"
      state.error = null
    })
    builder.addCase(fetchArticleById.fulfilled, (state, action) => {
      state.status = action.payload.status
      state.articles = action.payload.articles
    })
    builder.addCase(fetchArticleById.rejected, (state, action) => {
      state.status = "rejected"
      state.error = action.payload as string
    })
  },
})

export default newsSlice.reducer

export const newsModel = {
  ...newsSlice.actions,
  fetchNews,
  fetchArticleById,
  articles: (state: RootState) => state.news.articles,
  status: (state: RootState) => state.news.status,
  totalResults: (state: RootState) => state.news.totalResults,
  error: (state: RootState) => state.news.error,
}