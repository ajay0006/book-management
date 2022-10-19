import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "../layout/mainLayout";
import Header from "../components/header";
import Footer from "../components/footer";
import Books from "../components/books";
import Book from "../components/book";
import CreateBook from "../components/createBook";
import EditBook from "../components/editBook";

const AppRouter = () => {
    return(
        <BrowserRouter>
            <Header/>
                <MainLayout>
                        <Routes>
                            <Route path="/" element={<Books/>}/>
                            <Route path="/book/:id" element={<Book/>}/>
                            <Route path="/createBook" element={<CreateBook/>}/>
                            <Route path="/editBook/:id" element={<EditBook/>}/>
                        </Routes>
                </MainLayout>
            <Footer/>
        </BrowserRouter>
    )
}

export default AppRouter;