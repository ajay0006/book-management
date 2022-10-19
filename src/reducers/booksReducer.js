import { createSlice} from "@reduxjs/toolkit";
import { getBooks, getBookById} from "./thunk";

export const booksSlice = createSlice( {
    name: 'books',
    initialState:{
        loading: true,
        items: {
            page: "",
            books: []
        },
        book: {}
    },
    reducers:{

    },
    extraReducers:(builder) => {
        builder
            .addCase(getBooks.pending, (state) => {
                state.loading = true
            })
            .addCase(getBooks.fulfilled, (state, action) => {
                state.loading = false
                state.items = action.payload
            })
            .addCase(getBooks.rejected, (state) => {
                state.loading = false
            })
            .addCase(getBookById.pending, (state) => {
                state.loading = true
            })
            .addCase(getBookById.fulfilled, (state, action) => {
                state.loading = false
                state.book = action.payload
            })
            .addCase(getBookById.rejected, (state) => {
                state.loading = false
            })
    }
})

export default booksSlice.reducer