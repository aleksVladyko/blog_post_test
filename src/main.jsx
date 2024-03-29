import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import App from "./App.jsx";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    </React.StrictMode>
);
