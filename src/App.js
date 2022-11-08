import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from './Pages/Home';
import Crypto from './Pages/Crypto';
import { Essays } from "./Pages/Essays";

export default function App() {
    return (
        <Router>
            <div>
                {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Routes>
                    <Route path={`/crypto`} element={<Crypto />} />
                    <Route path={`/essays`} element={<Essays />} />
                    <Route path={'/'} element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

