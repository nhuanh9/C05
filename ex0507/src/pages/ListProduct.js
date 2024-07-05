import { useEffect, useState } from "react"
import axios from 'axios'
export default function ListProduct() {
    let [list, setList] = useState([{
        name: '',
        price: '',
        quantity: '',
        category: {
            name: ''
        }
    }]);
    useEffect(()=> {
        axios.get('http://localhost:3000/products').then(x => {
            setList(x.data)
        })
    }, [])
    return (
        <>
            List Product
            {list.map(e => (
                <h2>{e.name}, {e.price}, {e.quantity}, {e.category.name}</h2>
            ))}
        </>
    )
}