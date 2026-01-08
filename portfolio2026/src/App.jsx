import Home from "./pages/home/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./App.css";
import "./components/NavBar";
import NavBar from "./components/NavBar";

function App() {
    return (
        <Router>
            {/* stays visible regardless of the route */}
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />

                {/* add more routing below*/}
            </Routes>
        </Router>
    )
}

export default App;