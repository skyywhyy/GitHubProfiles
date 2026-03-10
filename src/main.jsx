import React from "react";
import ReactDOM from 'react-dom/client';
import {App} from "./App.jsx";
import {GitHubProvider} from "./GitHubContext.jsx";
import {ThemeProvider} from "./ThemeProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider>
            <GitHubProvider>
                <App/>
            </GitHubProvider>
        </ThemeProvider>
    </React.StrictMode>
);

