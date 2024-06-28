import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home/Home';
import ListPost from './pages/Home/Post/ListPost';
import DetailPost from './pages/Home/Post/DetailPost';
import AddPost from './pages/Home/Post/AddPost';
import Test from './pages/Home/Post/Test';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import {
    ClassicEditor,
    Bold,
    Essentials,
    Heading,
    Indent,
    IndentBlock,
    Italic,
    Link,
    List,
    MediaEmbed,
    Paragraph,
    Table,
    Undo,
} from 'ckeditor5';

import 'ckeditor5/ckeditor5.css';
import {useContext} from "react";
import {MyContext} from "./MyContext";
import A from "./components/A";
import B from "./components/B";

function App() {
    const handleEditorDataChange = (event, editor) => {
        const data = editor.getData();
        console.log(data);
    };
    const ct = useContext(MyContext);
    return (
        <>
            {ct[0].name}
            <hr/>
            <A></A>
            <hr/>
            <B></B>
            <Routes>
                <Route path='' element={<Login></Login>}></Route>
                <Route path='register' element={<Register></Register>}></Route>
                <Route path='home' element={<Home></Home>}>
                    <Route path='' element={<ListPost></ListPost>}></Route>
                    <Route path='add' element={<AddPost></AddPost>}></Route>
                    <Route path='detail/:id' element={<DetailPost></DetailPost>}></Route>
                </Route>
            </Routes>
        </>
    );
}

export default App;
