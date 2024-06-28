import { useEffect, useState } from "react"
import axios from "axios";
import './ListPost.css'
import { Link } from "react-router-dom";
export default function ListPost() {
    let [list, setList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/posts').then((res) => {
            setList(res.data)
        })
    }, [])
    return (
        <>
            <h1>ListPost Page</h1>
            <div className="list">
                {list.map(e => (
                    <div className="item">
                        <img src={e.image} />
                        <Link to={'detail/' + e.id}>
                            <div>{e.title}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}