import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from './Pages/Home';
import Crypto from './Pages/Crypto';

export default function App() {
    const notionResume = 'https://www.notion.so/Resume-c6876a00167743f2a100372c8c1ae775';

    return (
        <Router>
            <div>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/crypto">
                        <Crypto />
                    </Route>
                    <Route path="/resume" component={() => {
                        window.location.href = notionResume;
                        return;
                    }}>
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

