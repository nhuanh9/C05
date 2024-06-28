import { Field, Form, Formik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function AddPost() {
    let navigate = useNavigate();
    return (
        <>
            <h1>Add Post Page</h1>
            <Formik
                initialValues={{
                    title: "",
                    content: "",
                    image: ""
                }}
                onSubmit={(values) => {
                    values = {...values, user: {
                        username: '1',
                        name: '1',
                        id: '1'
                    }}
                    axios.post('http://localhost:3000/posts', values).then(()=> {
                        alert('Thêm thành công!');
                        navigate("/home")
                    })
                }}
            >
                <Form>
                    <Field name="title"></Field>
                    <Field name="content"></Field>
                    <Field name="image"></Field>
                    <button>Add Post</button>
                </Form>
            </Formik>
        </>
    )
}