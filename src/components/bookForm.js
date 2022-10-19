import { useFormik} from "formik";
import * as yup from 'yup';
import { Alert} from "react-bootstrap";
import { useDispatch} from "react-redux";
import { addBook } from "../reducers/thunk";
import { displayToast} from "../utils/toasts";
import { v4 as uuidV4 } from 'uuid';


const BookForm = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues:{
            "id": "",
            "author": "",
            "title": "",
            "year": 0,
            "country": "",
            "language": "",
            "pages": 0,
        },
        validationSchema: yup.object({
            "author": yup.string().required("Author name is required"),
            "title": yup.string().required("Title is required"),
            "year": yup.number().required("Year is required"),
            "country": yup.string().required("Country is required"),
            "language": yup.string().required("Language name is required"),
            "pages": yup.number().required("Number of pages is required"),
        }),
        onSubmit: (values, {resetForm}) => {
            console.log(values)
            if (!values.id)
            {
                const newId = {id: uuidV4() }
                values = {...values, ...newId}
            }
            dispatch(addBook(values))
                .unwrap()
                .then((response ) =>{
                    if (response)
                    {
                        resetForm();
                        displayToast('SUCCESS', "You have successfully added a new book")
                    }
                })
                .catch(error => {
                    displayToast("ERROR", "The book was not added!!! please try again ")
                })

        },
    })

    return (
        <div className='container'>
            <div className="col-md-12 mt-5">
                <form onSubmit={formik.handleSubmit}>
                    {/*<h4 className="mb-3"></h4>*/}
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="author">Author</label>
                            <input type="text"
                                   className="form-control"
                                   id="author"
                                   name="author"
                                   {...formik.getFieldProps('author')}
                            />
                            {formik.errors.author && formik.touched.author ?
                                <Alert variant='danger'>
                                    <span>{formik.errors.author}</span>
                                </Alert> : null}
                        </div>
                        <div className="col-md-6 mb-3">
                            <label htmlFor="title"> Title </label>
                            <input
                                type="text"
                                className="form-control"
                                id="title"
                                name="title"
                                {...formik.getFieldProps('title')}

                            />
                            {formik.errors.title && formik.touched.title ?
                                <Alert variant='danger'>
                                    <span>{formik.errors.title}</span>
                                </Alert>
                                : null}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="year"> Year </label>
                            <input type="number"
                                   className="form-control"
                                   id="year"
                                   name="year"
                                   {...formik.getFieldProps('year')}

                            />
                            {formik.errors.year && formik.touched.year ?
                                <Alert variant='danger'>
                                    <span>{formik.errors.year}</span>
                                </Alert>
                                : null}

                        </div>
                        <div className="mb-3">
                            <label htmlFor="country"> Country </label>
                            <input type="text"
                                   className="form-control"
                                   id="country"
                                   name="country"
                                   {...formik.getFieldProps('country')}

                            />
                            {formik.errors.country && formik.touched.country ?
                                <Alert variant='danger'>
                                    <span>{formik.errors.country}</span>
                                </Alert>
                                : null}

                        </div>
                        <div className="mb-3">
                            <label htmlFor="language"> Language </label>
                            <input type="text"
                                   className="form-control"
                                   id="language"
                                   name="language"
                                   {...formik.getFieldProps('language')}

                            />
                            {formik.errors.language && formik.touched.language ?
                                <Alert variant='danger'>
                                    <span>{formik.errors.language}</span>
                                </Alert>
                                : null}

                        </div>
                        <div className="mb-3">
                            <label htmlFor="pages"> Pages </label>
                            <input type="number"
                                   className="form-control"
                                   id="pages"
                                   name="pages"
                                   {...formik.getFieldProps('pages')}

                            />
                            {formik.errors.pages && formik.touched.pages ?
                                <Alert variant='danger'>
                                    <span>{formik.errors.pages}</span>
                                </Alert>
                                : null}
                        </div>
                    </div>
{/* finish code from here and add year, you are going to use a datepicker and luxon */}
                    <hr className="mb-4"/>
                    <button className="btn btn-primary btn-lg btn-block" type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default BookForm;

