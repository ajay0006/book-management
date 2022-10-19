import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const dataLocation = "http://localhost:3004/books";

export const getBooks = createAsyncThunk(
    "books/getBooks",
    async ({page = 1, limit = 9, order = 'asc'}, thunkApi) => {
        try {
            const response = await axios.get(`${dataLocation}?_page=${page}&_limit=${limit}&_order=${order}$_sort=id`);
            const prevState = thunkApi.getState().books
            return {
                books: [...prevState.items.books, ...response.data],
                page: page,
                end: response.data.length === 0
            }

        } catch (error) {
            throw error
        }
    }
)

export const getBookById = createAsyncThunk(
    "books/getBookById",
    async (id) => {
        try {
            const response = await axios.get(`${dataLocation}/${id}`);
            return response.data;
        } catch (error) {
            throw error
        }
    }
)

export const addBook = createAsyncThunk(
    "books/addBook",
    async (data) => {
        try {
            await axios({
                method: "POST",
                url: dataLocation,
                data
            })
            return true
        } catch (error) {
            throw error
        }
    }
)