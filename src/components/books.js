import React from 'react';
import { useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import { Button, Spinner} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import Masonry from 'react-masonry-css';
import { getBooks} from "../reducers/thunk";

//public/assets/images/a-Dolls-house.jpg
const Books = () => {
    const books = useSelector((state) => state.books)
    const dispatch = useDispatch();


    useEffect( () => {
        if (books.items.books.length <= 0)
        {
            dispatch(getBooks({}))
        }
        //eslint-disable-next-line
    }, [])

    const loadMoreBooks = () => {
        const page = books.items.page + 1;
        dispatch(getBooks({page}))
    }

    return (
        <>
            <Masonry
                className='my-masonry-grid'
                breakpointCols={{ default: 3, 800: 2, 400: 1}}
                columnClassName = 'my-masonry-grid_column '
                >
                {books.items ?
                    books.items.books.map((book) => (
                        <div key={book.id}>
                            <img
                                style={{width: '100%', height: '350px'}}
                               src={`assets/${book.imageLink}`}
                                //above or below works
                                //src={process.env.PUBLIC_URL + `/assets/${book.imageLink}`}
                                alt='placeholder'
                            />
                            <div className='author'>
                                <span>{book.author}</span>
                            </div>
                            <div className='content'>
                                <div className='title'> {book.title}</div>
                                <LinkContainer to={`/book/${book.id}`} className = 'mt-3'>
                                    <Button variant='light'> Book Details </Button>
                                </LinkContainer>
                            </div>
                        </div>
                    )):
                null}
            </Masonry>
            {books.loading ?
                <div style={{ textAlign: 'center'}}>
                <Spinner animation='border' role='status'>
                    <span className='visually-hidden'> Loading ... </span>
                </Spinner>
                </div>
                :null}

            {
                !books.items.end && !books.loading ?
                    <Button variant='outline-dark' onClick={() => loadMoreBooks()}>
                        Load More
                    </Button>

                    : null
            }

        </>
    );
};

export default Books;
