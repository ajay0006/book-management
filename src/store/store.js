import {configureStore} from "@reduxjs/toolkit";
import BooksReducer from "../reducers/booksReducer";

export const Store = configureStore({
        reducer: {
            books: BooksReducer
        }
    }
)