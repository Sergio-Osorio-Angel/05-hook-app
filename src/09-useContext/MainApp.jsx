import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { UserProvider } from "./context/UserProvider";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import Navbar from "./Navbar";
import { NotFoundPage } from "./NotFoundPage";

export function MainApp() {



    return (
        <UserProvider>
            <Navbar></Navbar>

            <hr />
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/not-found-404" element={<NotFoundPage/>}/>
                
                {/* <Route path="/*" element={<NotFoundPage/>}/> */}
                <Route path="*" element={<Navigate to={"/not-found-404"}/>} />
            </Routes>
        </UserProvider>
    )
}
