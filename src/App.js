import React from "react";
import {BrowserRouter} from "react-router-dom";
import Routes from "./routes";
import { Provider } from "react-redux";
import FireAlert from "./components/utils/alert/alert.component";
import store from "./redux/store";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
            <FireAlert></FireAlert>
        </Provider>
    );
}

export default App;
