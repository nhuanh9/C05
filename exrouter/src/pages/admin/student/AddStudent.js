import axios from "axios";
import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom";
export default function AddStudent() {
    let navigate = useNavigate();
    let [data, setData] = useState({
        name: '',
        score: ''
    })
    let changeInput = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    return (
        <>
        <h2>Add Student Form</h2>
        <h5><Link to={'/admin/student'}>Back to List Student</Link></h5>
            <input value={data.name} type="text" name='name' onChange={e => {
                changeInput(e);
            }} />
            <input value={data.score} type="text" name='score' onChange={e => {
                changeInput(e);
            }} />
            <button onClick={() => {
                axios.post('http://localhost:3000/students', data).then(() => {
                    setData({ name: '', score: '' });
                    navigate("/admin/student")
                })
            }}>Add</button>
        </>
    )
}