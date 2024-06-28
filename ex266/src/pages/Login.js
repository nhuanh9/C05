import { Field, Form, Formik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
export default function Login() {
    let navigate = useNavigate();
    return (
        <>
            <h1>Login Page</h1>
            <Formik
                initialValues={{
                    username: "",
                    password: ""
                }}
                onSubmit={(values) => {
                    axios.post('http://localhost:3000/users/login', values).then(()=> {
                        alert('Đăng nhập thành công!');
                        navigate("/home")
                    })
                }}
            >
                <Form>
                    <Field name="username"></Field>
                    <Field name="password"></Field>
                    <button>Login</button>
                </Form>
            </Formik>
        </>
    )
}