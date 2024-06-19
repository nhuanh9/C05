import axios from "axios";
import { useEffect, useState } from "react";

export default function ListProuct() {
  let [list, setList] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/products").then((x) => {
      console.log(x.data);
      setList(x.data);
    });
  }, []);
  return (
    <>
      <h1>List Product</h1>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((e) => (
            <tr>
              <th scope="row">{e.id}</th>
              <td>{e.name}</td>
              <td>{e.price}</td>
              <td>{e.quantity}</td>
              <td>
                <button className="btn btn-secondary">Edit</button>
                <button className="btn btn-danger ml-2">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
