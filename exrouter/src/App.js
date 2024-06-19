import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/home/Home";
import Admin from "./pages/admin/Admin";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ListProuct from "./pages/home/ListProduct";
import ListOrder from "./pages/home/ListOrder";
import Student from "./pages/admin/student/Student";
import AddStudent from "./pages/admin/student/AddStudent";
import DetailStudent from "./pages/admin/student/DetailStudent";
import EditStudent from "./pages/admin/student/EditStudent";

function App() {
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
