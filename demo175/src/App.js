import "./App.css";
import AddStudent from "./pages/AddStudent";
import Country from "./pages/Country";
import FCompoent from "./pages/FComponent";
import Login from "./pages/Login";
import Student from "./pages/Student";
import { Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <h1>Hello</h1>
      <Link to='students'>Student</Link> | 
      <Link to='add-students'>AddStudent</Link> | 
      <Link to='countries'>Country</Link> | 
      <Link to='f'>FCompoent</Link> | 
      <hr/>
      <Routes>
        <Route path="students" element={<Student />}></Route>
        <Route path="add-students" element={<AddStudent />}></Route>
        <Route path="countries" element={<Country />}></Route>
        <Route path="f/:id" element={<FCompoent />}></Route>
        <Route path="" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;

// '/': Login Component
// 2 input usn, pass, button
// Ấn nút, kiểm tra: nếu usn & pass = 'admin' => Student.

