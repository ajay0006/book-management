import { createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const dataLocation = "http://localhost:3004/books";

export const getBooks = createAsyncThunk(
    "books/getBooks",
    async ({ page = 1, limit = 6, order = 'asc'}, thunkApi) =>{
        try{
            const response = await axios.get(`${dataLocation}_page=${page}&_limit=${limit}&_order=${order}$_sort=id`);
            const prevState = thunkApi.getState().books

            return{
                books: [...prevState.books, ...response.data],
                page: page,
                end: response.data.length === 0
            }

        }
        catch (error)
        {
            throw error
        }
    }
)

export const getBookById = createAsyncThunk(
    "books/getBookById",
    async (id) => {
        try {
            const response =  await axios.get(`${dataLocation}/${id}`);
            return response.data;
        }
        catch (error){
            throw error
        }

    }

)
