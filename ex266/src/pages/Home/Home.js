import { Outlet } from "react-router-dom";

export default function Home() {
    return (
        <>
            <h1>Home Page</h1>
            <Outlet></Outlet>
        </>
    )
}