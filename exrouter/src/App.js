import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ListProuct from "./pages/admin/product/ListProduct";
import ListOrder from "./pages/home/ListOrder";
import Student from "./pages/admin/student/Student";
import AddStudent from "./pages/admin/student/AddStudent";
import DetailStudent from "./pages/admin/student/DetailStudent";
import EditStudent from "./pages/admin/student/EditStudent";
import AddProduct from "./pages/admin/product/AddProduct";
import EditProduct from "./pages/admin/product/EditProduct";
import { useEffect, useState } from "react";
// cometchat, texteditor, firebase
function App() {
  let [cur, setCur] = useState();
  useEffect(() => {
    setCur(localStorage.getItem('user'));
  }, [])
  return (
    <>
      <div className="container-fluid">
        <Routes>
          <Route path="" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
          <Route path="home" element={<Home />}>
            <Route path="" element={<ListProuct />}></Route>
            <Route path="order" element={<ListOrder />}></Route>
          </Route>
          <Route path="admin" element={<Admin />}>
            <Route path="" element={<ListProuct />}></Route>
            <Route path="products/add" element={<AddProduct />}></Route>
            <Route path="products/edit/:id" element={<EditProduct />}></Route>
            <Route path="order" element={<ListOrder />}></Route>
            <Route path="student" element={<Student />}></Route>
            <Route path="student/add" element={<AddStudent />}></Route>
            <Route path="student/detail" element={<DetailStudent />}></Route>
            <Route path="student/edit/:id" element={<EditStudent />}></Route>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
