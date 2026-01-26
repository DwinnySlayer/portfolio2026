import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Posters from "./pages/poster/Poster";
import Design from "./pages/design/Design";

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
                <Route path="/profile" element={<Profile />} />
                <Route path="/design" element={<Design />} />
                <Route path="/poster" element={<Posters />} />
                {/* add more routing below*/}
            </Routes>
        </Router>
    )
}

export default App;