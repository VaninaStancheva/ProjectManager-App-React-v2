import './App.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SignInPage from "./pages/SigninPage/Signin.tsx";
import Dashboard from "./pages/dashboard/Dashboard.tsx";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
            <Routes>
                <Route exact path="/" element={<SignInPage/>}/>
            </Routes>
        </Router>

)
}

export default App
