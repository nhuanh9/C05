import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import axios from 'axios'
export default function Login() {
  let navigate = useNavigate();
  return (
    <>
      <h1>Login</h1>
      <button>
        <Link to={"register"}>Register</Link>
      </button>
      <Formik
        initialValues={{
          username: "",
          password: ""
        }}
        onSubmit={(values) => {
          axios.post('http://localhost:3000/users/login', values).then(x => {
            alert('Đăng nhập thành công!');
            navigate('/admin')
          }).catch(e => {
            alert('Tài khoản hoặc mật khẩu sai!')
          })
        }}
      >
        <Form>
          <Field name={"username"} />
          <Field name={"password"} />
          <button>Login 2</button>
        </Form>
      </Formik>
    </>
  );
}
