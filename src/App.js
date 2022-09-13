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
    const notionResume = 'https://www.notion.so/Resume-c6876a00167743f2a100372c8c1ae775';

    return (
        <Router>
            <div>
                {/* A <Routes> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Routes>
                    <Route path="/crypto" element={<Crypto />} />
                    <Route path="/resume" element={() => {
                        window.location.href = notionResume;
                        return;
                    }}>
                    </Route>
                    <Route path="/essays" element={<Essays />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    );
}

