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
    const websitePath = '/personal-website';
    return (
        <Router>
            <div>
                {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Routes>
                    <Route path={`${websitePath}/crypto`} element={<Crypto />} />
                    <Route path={`${websitePath}/essays`} element={<Essays />} />
                    <Route path={websitePath} element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

